
import { useStateContext } from "../../ContextProvider/Contexts";

 
import TrainerFirst from "./TrainerFirst";
import TrainerThird from "./TrainerThird";
import TrainerSecond from "./TrainerSecond";

const Body_Trainer = () => {
  const { buildStep } = useStateContext();

  return (
    <div className="sm:w-4/5  bg-[#F8FAFB] trainerLgScreen max-sm:mt-[50px] max-sm:w-fit">
      <div className="p-10 ">
        {buildStep === 1 && (
          <TrainerFirst />
        )}
        {buildStep === 2 && (
          <TrainerSecond/>
        )}
        {buildStep === 3 &&
          <TrainerThird />  
        }
      </div>
    </div>
  );
};

export default Body_Trainer;
