import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  //   const [hoveredIndex, setHoveredIndex] = useState<number>();

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
    <div className="flexBetween w-full h-[65px] fixed top-0 z-30 bg-[#fafafa] flex justify-end items-center sm:pr-20 space-x-6 select-none ">
      <div className="ml-10 flexCenter space-x-3">
        <p className="text-3xl font-semibold">FitMeet</p>
      </div>
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
          <IconButton>
            <MenuIcon/>
          </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
