import { useStateContext } from "../../ContextProvider/Contexts";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../features/firebase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const MobileNav_Trainer = () => {
  const { buildStep, setBuildStep } = useStateContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("Name");
        localStorage.removeItem("profilePic");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        console.log("user sign out");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const step = ["第一步", "第二步", "第三步"];
  return (
    <div className="flex items-center justify-start pl-5 w-full space-x-6 h-[50px] fixed top-0 select-none z-30 bg-white sm:hidden ">
      {step.map((item, index) => (
        <button
          className={`border p-2 border-black rounded-full font-bold ${
            buildStep - 1 === index ? "bg-[#113078] text-white" : ""
          }`}
          key={index}
          onClick={() => setBuildStep(index + 1)}
        >
          {item}
        </button>
      ))}
      <div className="flex ">
        <div className="sm:hidden ml-12">
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link to="/">
            <MenuItem onClick={handleClose}>
              <p className="text-lg font-bold">首頁</p>
            </MenuItem>
          </Link>
          <Link to="/client">
            <MenuItem onClick={handleClose}>
              <p className="text-lg font-bold">客戶</p>
            </MenuItem>
          </Link>
          <Link to="/service">
            <MenuItem onClick={handleClose}>
              <p className="text-lg font-bold">平台藍圖及服務</p>
            </MenuItem>
          </Link>
          <MenuItem
            onClick={() => {
              handleClose();
              handleSignOut();
            }}
          >
            <p className="text-lg font-bold">登出</p>
          </MenuItem>
        </Menu>

        {/* <button
          className="border border-slate-400 p-2 rounded-full "
          onClick={handleSignOut}
        >
          登出
        </button> */}
      </div>
    </div>
  );
};

export default MobileNav_Trainer;
