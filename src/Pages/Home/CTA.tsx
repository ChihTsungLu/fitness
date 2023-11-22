interface CTAProps {}
import { Link } from "react-router-dom";
import TouchAppIcon from '@mui/icons-material/TouchApp';
const CTA = ({}: CTAProps) => {
  return (
    <div className="p-20 sm:flex sm:justify-center sm:items-center  space-x-6 select-none">
      <div className="flex items-center flex-col sm:w-[580px] w-full border sm:h-[590px] rounded-xl bg-[#1F2123] text-white p-16 ">
        <p className="text-lg font-bold">流通產業資訊一站式平台</p>
        <p className=" font-bold text-3xl mt-1 ">各項運動教練</p>
        <p className="mt-5 font-bold">建立專業知識品牌，協助提升學員身心靈健康</p>
        <Link to="/trainer" className=" w-1/2 mt-8">
          <div className="flexCenter bg-white rounded-xl hover:bg-gray-100" onClick={() => {}}>
            <p className=" text-center text-xl font-bold text-black p-4">
              免費使用
            </p>
            <TouchAppIcon sx={{color:"#000"}}/>
          </div>
        </Link>
      </div>
      <div className="flex items-center flex-col sm:w-[580px] border sm:h-[590px] rounded-xl bg-[#DDF2FD] text-white p-16 ">
        <p className="text-lg text-black font-bold">運動、飲食、教練、社群資訊</p>
        <p className=" font-bold text-3xl mt-1 text-black ">學生</p>
        <p className="mt-5 text-black font-bold">尋找符合預算、時間、地點專屬個人教練</p>
        <Link to="/client" className=" w-1/2 mt-8">
          <div className="flexCenter bg-black rounded-xl hover:bg-[#164863]" onClick={() => {}}>
            <p className=" text-center text-xl font-bold p-4">
              尋找專屬教練
            </p>
            <TouchAppIcon/>
          </div>
        </Link>
      </div>
   
    </div>
  );
};

export default CTA;
