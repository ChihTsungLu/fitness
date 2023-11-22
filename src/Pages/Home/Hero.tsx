import { NavLink } from "react-router-dom";
import BezierCurve from "./BezierCurve";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
interface HeroProps { }

const Hero = ({ }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <div className=" h-[650px] mt-[65px] flex items-end relative hero-image ">
      {/* 左側教練 */}


      {/* 中間文字 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-2 ">
        <p className="text-5xl text-white font-black mt-20 whitespace-nowrap">教練品牌升級</p>
        <p className="text-5xl text-white ml-16 font-black whitespace-nowrap">學生精準匹配</p>
      </div>

      <h1 className="hidden sm:block text-white text-3xl mb-10 w-full ml-20 text-center font-extrabold"><CheckCircleOutlineIcon /> 流通產業資訊 <CheckCircleOutlineIcon />達成目標體態 <CheckCircleOutlineIcon />滿足心靈健康</h1>


    </div>
  );
};

export default Hero;
