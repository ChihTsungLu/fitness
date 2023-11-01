import { NavLink } from "react-router-dom";
import BezierCurve from "./BezierCurve";

interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <div className=" h-[600px] mt-[65px] hero-image flexBetween">
      <div className="space-y-3 w-full">
        <div className="space-y-2">
          <p className="text-3xl font-bold text-white">
            身材及知識兼具 !? 差一步推廣。
          </p>
          <p className="text-xl font-bold text-white">Maximize Your Reach</p>
        </div>
        <NavLink to={"/trainer"}>
          <div className="flex">
            <button className="w-[200px] h-[40px] border border-black rounded-full mt-4 bg-[#4b4e54] hover:bg-[#3d4046]">
              <p className="text-2xl text-white">成為教練</p>
            </button>
            {/* <img src={Dumbell} width={100} height={40} /> */}
          </div>
        </NavLink>
      </div>
      <div className="w-full">
        <div className="space-y-1">
          <p className="text-3xl font-bold text-white">運動夥伴，十倍槓桿</p>
          <p className="text-xl font-bold text-white">
            Your Perfect Fit, One Click Away
          </p>
        </div>
        <NavLink to={"/client"}>
          <div className="flex">
            <button className="w-[200px] h-[40px] border border-black mt-4 rounded-full bg-[#149e7a] hover:bg-[#108a6b]">
              <p className="text-2xl text-white">尋找教練/夥伴</p>
            </button>
            {/* <img src={DumbHand} width={100} height={40} /> */}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
