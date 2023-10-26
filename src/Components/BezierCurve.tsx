import React from "react";

const BezierCurve = () => {
  return (
    <svg width="100vw" height="100vh">
      <path d="M10,600 C9,200 5000,100 2000,600" fill="none" stroke="black" />

      <foreignObject x="150" y="10" width="800" height="300">
        <div className="space-y-10">
          <p className="text-3xl font-bold">Your Perfect Fit, One Click Away</p>
          <button className="w-[400px] h-[200px] border border-black">
          <p className="text-2xl">尋找教練</p>
          </button>
        </div>
      </foreignObject>

      {/* Button below the curve */}
      <foreignObject x="1250" y="400" width="800" height="300">
        <div className="space-y-10">
          <p className="text-3xl font-bold">身材及知識兼具!? 差一步推廣。</p>
          <button className="w-[400px] h-[200px] border border-black">
            <p className="text-2xl">成為教練</p>
          </button>
        </div>
      </foreignObject>
    </svg>
  );
};

export default BezierCurve;
