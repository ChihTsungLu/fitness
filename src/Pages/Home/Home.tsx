import Feature from "./Feature";
import Hero from "./Hero";
import Navbar from "../../Components/Navbar";
import WhyUs from "./WhyUs";
import CTA from "./CTA";

const Home = () => {


  return (
    <div>
      <Navbar/>
      <Hero />
      <Feature />
      {/* <WhyUs/> */}
      <CTA/>
    </div>
  );
};

export default Home;
