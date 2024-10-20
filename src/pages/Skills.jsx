import { techLogo } from "../assets/SVGs/icon";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="bg-white p-2 shadow-xl  ">
      <h2 className="md:text-7xl text-5xl mb-6 text-center italianno-regular font-bold text-black">
        Skills
      </h2>
      <Marquee pauseOnHover={true}>
      <div className="flex gap-3">
        {techLogo.map((data, index) => (
          <img
            key={index} 
            className="h-20 w-20 m-2" 
            src={data}
            alt="logo"
          />
        ))}
      </div>
      </Marquee>

      {/* <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {techLogo.map((data, index) => (
          <img
            key={index} 
            className="h-20 w-20 m-2" 
            src={data}
            alt="logo"
          />
        ))}
      </div> */}
    </div>
  );
};

export default Skills;


