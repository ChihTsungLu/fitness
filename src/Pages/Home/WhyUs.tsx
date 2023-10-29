interface WhyUsProps { }

const WhyUs = ({ }: WhyUsProps) => {
    return (
        <div className="flex ">
            <div className="w-1/2">
                這邊放圖片
            </div>
            <div className="w-1/2 space-y-4">
                <p className="text-3xl font-bold">建立個人品牌及打造運動社群</p>
                <p className="text-2xl text-start mr-16 ">打破教學時間及空間限制</p>
                <div className="space-y-4 pt-10">
                    <div className="home-trainer-feature ">
                        提升專業形象，讓學員從線上認識你
                    </div>
                    <div className="home-trainer-feature ">
                        打破教學時間及空間限制，提供線上諮詢服務
                    </div>
                    <div className="home-trainer-feature ">
                        建立網絡社群
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;