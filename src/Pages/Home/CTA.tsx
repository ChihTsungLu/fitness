interface CTAProps {}
import { Link } from "react-router-dom";
import TouchAppIcon from '@mui/icons-material/TouchApp';
const CTA = ({}: CTAProps) => {
  return (
    <div className="p-7 sm:p-20 sm:flex sm:justify-center sm:items-center sm:space-x-6 select-none max-sm:space-y-4">
      <div className="flex items-center flex-col sm:w-[580px] w-full border sm:h-[590px] rounded-xl bg-[#1F2123] text-white p-16 ">
        <p className="text-xl sm:text-2xl font-bold whitespace-nowrap">建立教練個人專業品牌</p>
        <p className="text-3xl sm:text-4xl font-bold mt-4 whitespace-nowrap">For 教練</p>
        <p className="mt-5  font-bold text-lg sm:text-xl">傳播專業知識</p>
        <p className="  font-bold text-lg sm:text-xl whitespace-nowrap">協助提升學員身心靈健康</p>
        <Link to="/trainer" className=" w-1/2 mt-8 flexCenter">
          <div className="flexCenter bg-white rounded-xl hover:bg-gray-100 w-fit" onClick={() => {}}>
            <p className=" text-center text-2xl sm:text-3xl font-bold text-black p-4 whitespace-nowrap ">
              免費建立
            </p>
            <TouchAppIcon sx={{color:"#000"}} fontSize="large"/>
          </div>
        </Link>
      </div>
      <div className="flex items-center flex-col sm:w-[580px] border sm:h-[590px] rounded-xl bg-[#DDF2FD] text-white p-16 ">
        <p className="text-xl sm:text-2xl text-black font-bold whitespace-nowrap">運動產業資訊一站式平台</p>
        <p className=" font-bold text-3xl sm:text-4xl mt-4 text-black ">For 學生</p>
        <p className="mt-5 text-black font-bold text-lg sm:text-xl whitespace-nowrap">日常運動或是臨時起意</p>
        <p className=" text-black font-bold text-lg sm:text-xl whitespace-nowrap">立即查看符合需求的專業教練</p>
        <Link to="/client" className=" w-1/2 mt-8 flexCenter">
          <div className="flexCenter bg-black rounded-xl hover:bg-[#164863] w-fit" onClick={() => {}}>
            <p className="text-center text-2xl sm:text-3xl font-bold p-4 whitespace-nowrap">
              尋找專屬教練
            </p>
            <TouchAppIcon fontSize="large"/>
          </div>
        </Link>
      </div>
   
    </div>
  );
};

export default CTA;
