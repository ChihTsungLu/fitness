interface HeroProps {}
import HeroImage from '../images/hero.avif'
const Hero = ({}: HeroProps) => {

 return ( 
        <div className="w-full h-[700px] mt-[65px] hero-image ">
             <div className="flexCenter pt-40 space-x-96">
                <div className="space-y-20">
                    <p className="text-4xl text-[#FF7F00] font-mono pl-6">尋找您的專屬健身教練</p>
                    <div className="bg-white w-[400px] h-[300px] rounded-xl">

                    </div>
                </div>
                <div className="space-y-20">
                    <p className="text-4xl text-[#FF7F00] font-bold pl-10 font-sans">建立您的教練行銷</p>
                    <div className="bg-white w-[400px] h-[300px] rounded-xl">

                    </div>
                </div>
             </div>
        </div>
    );
};

export default Hero;