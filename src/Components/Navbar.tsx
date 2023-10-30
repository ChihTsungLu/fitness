import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../ContextProvider/Contexts";
import Home from "../Pages/Home/Home";
import Auth from "../features/Auth";
interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number>();
  const { isAuthed } = useStateContext();
  const navOptions = [
    {
      route: "/",
      optionTw: "首頁",
      optionEn: "Home",
     
    },
    {
      route: "trainer",
      optionTw: "成為教練",
      optionEn: "Trainer",
    
    },
    {
      route: "client",
      optionTw: "尋找教練",
      optionEn: "Student",
    },
    {
      route: "service",
      optionTw: "專人服務",
      optionEn: "Personal Service",
    },
  ];

  return (
    <div className="w-full h-[65px] fixed top-0 z-10 bg-[#fafafa] flex justify-end items-center pr-20 space-x-6">
      {navOptions.map(({ route, optionTw, optionEn }, index) => (
        <NavLink
          to={`${optionTw === "成為教練" && isAuthed ? route : route }`}
          key={index}
          className={({ isActive }) => (isActive ? "text-[#149e7a]" : "")}
        >
          <div
            className="text-xl hover:bg-gray-100  flexCenter rounded-xl"
          >
            <p className="flexCenter font-bold p-3">{optionTw}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
