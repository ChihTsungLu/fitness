import { Button } from "@mui/material";
import { useTrainerContext } from "../../ContextProvider/TrainerContext";
import { useStateContext } from "../../ContextProvider/Contexts";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
interface TrainerThirdProps {
    image: File | undefined;
    video: File | undefined;
    handleDataUpload: any;
}

const TrainerThird = ({ image, video, handleDataUpload }: TrainerThirdProps) => {

    const { name, location, title, expYear, priceRange, line, insta, firstTime, secondTime, thirdTime, experience, goalInTime, description, trainingMethod } = useTrainerContext();
    const { userData } = useStateContext();
    console.log(userData)
    return (
        <div className="p-4">
            <div className="p-6 border border-black rounded-xl ">

                <div className="flexBetween space-x-6">

                    <img
                        src={userData?.imgUrl}
                        className="w-3/5 h-auto rounded-lg block"
                    />
                    <div className="space-y-6 w-full">
                        <div className="flex">
                            <p className="">{userData?.name}</p>
                            <p className="">{userData?.location}</p>
                            <p>{userData.priceRange}</p>
                        </div>
                        <p className=" ">{userData?.experience}</p>
                        <p className=" ">{userData?.description}</p>
                    </div>
                </div>



                <video
                    controls
                    src={userData?.videoList}
                    className="w-[400px] h-[400px]"
                />

            </div>
            <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onClick={handleDataUpload}
            >
                <p className="text-xl">資料上傳</p>
            </Button>
        </div>
    );
};

export default TrainerThird;