import { NavLink  } from "react-router-dom"

interface NavbarProps { }

const Navbar = ({ }: NavbarProps) => {

    const navOptions = [{
        route: "/",
        option:"首頁"
    },{
        route: "trainer",
        option:"成為教練"
    },{
        route: "client",
        option: "尋找教練"
    },{
        route: "service",
        option: "專人服務"
    }]
    return (
        <div className="w-full h-[65px] fixed top-0 z-10 bg-white flex justify-end items-center pr-10 space-x-4">
            {
                navOptions.map(({route,option},index)=>(
                    <NavLink
                        to={`${route}`}
                        key={index}
                    >
                        <p className="tex-lg">{option}</p>
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Navbar;