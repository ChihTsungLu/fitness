
import { NavLink } from "react-router-dom";
const BezierCurve = () => {
  return (
    <svg width="100vw" height="100vh">
      <path d="M10,600 C9,230 3000,-100 2000,600" fill="none" stroke="black" />

      <foreignObject x="10%" y="10%" width="50%" height="50%">
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-3xl font-bold">身材及知識兼具 !? 差一步推廣。</p>
            <p className="text-xl font-bold">Maximize Your Reach</p>
          </div>
          <NavLink
            to={"/trainer"}
          >
            <button className="w-[200px] h-[40px] border border-black rounded-full mt-4 bg-[#149e7a]">
              <p className="text-2xl text-white">成為教練</p>
            </button>
          </NavLink>
        </div>
      </foreignObject>
      
      <foreignObject x="60%" y="40%" width="50%" height="50%">
        <div className="">
          <div className="space-y-1">

            <p className="text-3xl font-bold">運動夥伴，十倍槓桿</p>
            <p className="text-xl font-bold">Your Perfect Fit, One Click Away</p>
          </div>
          <NavLink
            to={"/client"}
          >
            <button className="w-[200px] h-[40px] border border-black mt-4 rounded-full bg-[#149e7a]">
              <p className="text-2xl text-white">尋找教練/夥伴</p>
            </button>
          </NavLink>
        </div>
      </foreignObject>



    </svg>
  );
};

export default BezierCurve;
