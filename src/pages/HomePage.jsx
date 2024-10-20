import TypeWriteName from "../components/TypeWriteName";
import { BackgroundBeamsWithCollision } from "../components/ui/BackgroundBeamsWithCollision";
import WindowScreen from "../components/WindowScreen";
import hero from "../assets/hero-1.png"


const HomePage = () => {
  const handleScroll = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed h-[5rem] top-0 left-0 right-0 z-10 k">
        <h1
          onClick={handleScroll}
          className="italianno-regular cursor-pointer text-5xl md:text-7xl text-blue-500 dark:text-blue-500 px-10  md:px-24 py-2 font-bold"
        >
          Umesh.
        </h1>
      </div>
      

      <BackgroundBeamsWithCollision>
      <div id="home" className="grid grid-cols-1 md:grid-cols-2 mb-16">
 
  <div className="flex justify-center items-center mb-4 md:mb-0">
    <TypeWriteName />
  </div>

 
  <div className="hidden md:flex justify-center items-center mt-4 md:mt-0">
    <WindowScreen />
  </div>
</div>


<div className="md:hidden sm:block">
  <div className="mt-10 sm:mt-36 flex justify-center">
    <img src={hero} alt="hero" className="w-full h-auto max-h-[400px] object-contain" />
  </div>
</div>

        
          {/* <div className="hidden ">
          <div className="flex justify-center items-center mb-4 md:mb-0">
            <TypeWriteName />
          </div>

          </div> */}
         
        
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default HomePage;
