import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useState } from "react";
interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navOptions = [
    {
      route: "/",
      optionTw: "首頁",
      optionEn: "Home",
    },
    {
      route: "/trainer",
      optionTw: "成為教練",
      optionEn: "Trainer",
    },
    {
      route: "/client",
      optionTw: "尋找教練",
      optionEn: "Student",
    },
    {
      route: "/service",
      optionTw: "平台藍圖及服務",
      optionEn: "Personal Service",
    },
  ];

  return (
    <div className="flexBetween  h-[65px] fixed top-0 z-30 bg-[#fafafa] flex justify-end items-center w-screen sm:pr-20 space-x-6 select-none ">
      <Link to="/">
        <div className="ml-10 flexCenter space-x-3">
          <p className="text-3xl font-semibold">FitMeet</p>
        </div>
      </Link>
      <div className="hidden sm:flex  space-x-4">
        {navOptions.map(({ route, optionTw, optionEn }, index) => (
          <NavLink
            to={route}
            key={index}
            className={({ isActive }) => (isActive ? "text-[#149e7a]" : "")}
          >
            <div className="text-xl hover:bg-gray-100  flexCenter rounded-xl">
              <p className="flexCenter font-bold p-3">{optionTw}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="sm:hidden">
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
        <MenuItem onClick={handleClose}>
          <p className="text-lg font-bold">首頁</p>
        </MenuItem>

        <Link to="/trainer">
          <MenuItem onClick={handleClose}>
            {" "}
            <p className="text-lg font-bold">成為教練</p>
          </MenuItem>
        </Link>
        <Link to="/client">
          <MenuItem onClick={handleClose}>
            {" "}
            <p className="text-lg font-bold">尋找教練</p>
          </MenuItem>
        </Link>
        <Link to="/service">
          <MenuItem onClick={handleClose}>
            {" "}
            <p className="text-lg font-bold">平台藍圖及服務</p>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
