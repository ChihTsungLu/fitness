import { useEffect } from "react";
import { useStateContext } from "../../ContextProvider/Contexts";
import { useNavigate } from "react-router-dom";
interface FeatureProps { }

const Feature = ({ }: FeatureProps) => {
    const navigate = useNavigate();

    const { isStudent, isTrainer, setIsStudent, setIsTrainer, userName, setUserName } =
        useStateContext();

    const handleTrainerClick = () => {
        setIsTrainer(true);
        setIsStudent(false);
    };

    const handleStudentClick = () => {
        setIsStudent(true);
        setIsTrainer(false);
    };
   
    useEffect(()=> {
        const localName = localStorage.getItem('name')
        setUserName(localName!)
    }, []);

    return (
        <div className="w-full h-fit ">
            <p className="ml-10 mt-10 text-4xl">
                我們協助<u onClick={()=>navigate("/auth")} className="cursor-pointer">教練找學生</u>，<u onClick={()=>navigate("/client")} className="cursor-pointer">學生找教練</u>
            </p>
            <div className="mt-5 ml-10 space-x-3">
                <button
                    className={`w-[150px] h-[40px] border  rounded-full mt-4 ${isTrainer
                            ? " bg-[#3d4046] border-black"
                            : "  bg-[#babec7] border-gray-300 hover:bg-[#3d4046] hover:border-black"
                        }`}
                    onClick={handleTrainerClick}
                >
                    <p className="text-xl text-white">我是教練💪🏽</p>
                </button>
                <button
                    className={`w-[150px] h-[40px] border rounded-full mt-4 ${isStudent
                            ? "bg-[#108a6b] border-black"
                            : "bg-[#90cebd] border-gray-300 hover:bg-[#149e7a] hover:border-black"
                        } `}
                    onClick={handleStudentClick}
                >
                    <p className="text-xl text-white">我是學生🏋🏽</p>
                </button>
            </div>

            {/* 教練 */}
            {isTrainer && (
                <div className="mt-7 rounded-xl bg-[#eef5ff] ">
                    <div className="space-y-4 pt-6 px-10">
                        <p className="text-4xl text-black font-bold">
                            建立訓練知識數位足跡，讓顧客親自找上門
                        </p>

                        <p className="text-2xl text-black font-bold">
                            簡單三步驟，迅速使用現成工具打造專屬品牌
                        </p>
                    </div>
                    <div className="m-10 pb-10 flexBetween">
                        <div className="space-y-4">
                            <div className="home-trainer-feature ">
                                提供個人經歷
                            </div>
                            <div className="home-trainer-feature ">
                                上傳照片
                            </div>
                            <div className="home-trainer-feature ">
                                確認資訊，一鍵建立個人品牌
                            </div>
                        </div>
                        <div>
                            pic
                        </div>
                    </div>
                 
                </div>
            )}

            {/* 學生 */}
            {isStudent && (
                // 建立訓練知識數位足跡，讓顧客親自找上門
                <div className="mt-7 rounded-xl bg-[#eef5ff] ">
                    <div className="space-y-4 pt-6 px-10">
                        <p className="text-4xl text-black font-bold">
                            建立訓練知識數位足跡，讓顧客親自找上門
                        </p>

                        <p className="text-2xl text-black font-bold">
                            簡單三步驟，迅速使用現成工具打造專屬品牌
                        </p>
                    </div>
                    <div className="m-10 pb-10 flexBetween">
                        <div className="space-y-4">
                            <div className="home-trainer-feature "></div>
                            <div className="home-trainer-feature "></div>
                            <div className="home-trainer-feature "></div>
                        </div>
                        <div>
                            pic
                        </div>
                    </div>
                 
                </div>
            )}
        </div>
    );
};

export default Feature;
