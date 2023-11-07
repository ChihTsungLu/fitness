import { useTrainerContext } from "../../ContextProvider/TrainerContext";

interface TrainerThirdProps {
    image: File | undefined;
    video: File | undefined;
}

const TrainerThird = ({ image, video }: TrainerThirdProps) => {

    const { name, location, shortIntro, priceRange, line, insta, firstTime, secondTime, thirdTime, experience, goalInTime, description, trainingMethod } = useTrainerContext();

    return (
        <div className="p-4">
            <div className="p-6 border border-black rounded-xl ">

                <div className="flexBetween">
                    {
                        image &&
                        <img
                            src={URL.createObjectURL(image)}
                            className="w-3/5 h-auto rounded-lg block"
                        />
                    }
                    <div className="space-y-6">

                        <p className="w-2/5 ml-10">{experience}</p>
                        <p className="w-2/5 ml-10">{description}</p>
                    </div>
                </div>

                <p>{name}</p>
                <p>{location}</p>
                <p>{shortIntro}</p>
                {
                    video &&

                    <video
                        controls
                        src={URL.createObjectURL(video!)}
                        className="w-[400px] h-[400px]"
                    />
                }
            </div>
        </div>
    );
};

export default TrainerThird;