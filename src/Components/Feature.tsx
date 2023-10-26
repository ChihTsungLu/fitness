interface FeatureProps { }

const Feature = ({ }: FeatureProps) => {
    return (
        <div className="w-full h-[600px] ">
            <p className="ml-10 mt-10 text-4xl">我們幫助教練找學生，學生找教練</p>
            <div className="mt-5 ml-10 space-x-3">
                <button className="w-[150px] h-[40px] border border-black rounded-full mt-4 bg-[#149e7a]">
                    <p className="text-xl text-white">你是教練</p>
                </button>
                <button className="w-[150px] h-[40px] border border-gray-500 rounded-full mt-4 bg-[#f4f5fb]">
                    <p className="text-xl text-white">你是學生</p>
                </button>
            </div>
        </div>
    );
};

export default Feature;