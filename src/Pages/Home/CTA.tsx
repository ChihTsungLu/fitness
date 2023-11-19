interface CTAProps {}

const CTA = ({}: CTAProps) => {
 return ( 
        <div className="p-20 flexCenter space-x-6">
            <div className="w-[580px] border h-[590px] rounded-xl bg-[#1F2123] text-white p-16 space-y-2">
                <p className="text-center text-lg">流通產業資訊一站式平台</p>
                <p className="text-center font-bold text-3xl">俱樂部 & 自由教練</p>
                <p className="text-center">建立專業知識品牌，協助提升學員身心靈健康</p>
            </div>
            <div className="w-[580px] border h-[590px] rounded-xl bg-[#B3FFAE] p-16 space-y-2">
            <p className="text-center text-lg">運動、飲食、教練、社群資訊</p>
                <p className="text-center font-bold text-3xl">學生</p>
                <p className="text-center">尋找符合預算、時間、地點專屬個人教練</p>
            </div>  
        </div>
    );
};

export default CTA;