
import Nav_Trainer from "./Nav_Trainer";
import Body_Trainer from "./Body_Trainer";
import MobileNav_Trainer from "./MobileNav_Trainer";
interface TrainerProps {}

const Trainer = ({}: TrainerProps) => {
 

  return (
    <div className="sm:flex">
      <Nav_Trainer />
      <MobileNav_Trainer/>
      <Body_Trainer />
    </div>
  );
};

export default Trainer;
