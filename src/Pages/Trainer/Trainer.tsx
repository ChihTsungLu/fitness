
import Nav_Trainer from "./Nav_Trainer";
import Body_Trainer from "./Body_Trainer";
interface TrainerProps {}

const Trainer = ({}: TrainerProps) => {
 

  return (
    <div className="flex  ">
      <Nav_Trainer />
      <Body_Trainer />
    </div>
  );
};

export default Trainer;
