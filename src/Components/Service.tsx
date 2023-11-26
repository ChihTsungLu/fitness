interface ServicesProps { }
import Navbar from "./Navbar";

const Services = ({ }: ServicesProps) => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-[65px]">
        <div className="p-20"> 
          FitMeet 致力於提升人類身心靈健康，若您對這個目標有什麼想法，或想添加任何平台功能，可以到 <a className="text-blue-600 underline" href="https://line.me/ti/g2/8ieEtl-iUpawlOdt8yib7f1sTHEAzWNrDsisIg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">Line群組討論</a>，或寄信到信箱 fitmeet.service@gmail.com 會在 48 小時內回覆！
        </div>
      </div>
    </div>
  );
};

export default Services;
