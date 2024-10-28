import { TypewriterEffect } from "./ui/TypewriterEffect";

const TypeWriteName = () => {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1Sa0yPnl-0fFAjMQZX9f3Fx0Lzeb2BLHh/view?usp=drive_link");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const words = [
    {
      text: "Your ",
    },
    {
      text: "Vision",
    },
    {
      text: "MyCode:",
    },
    {
      text: "Crafting",
    },
    {
      text: "Unique",
    },

    {
      text: "Web Experiences.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] playwrite-gb-s-regular">
      <div className="pb-5">
        <p className=" text-neutral-200 text-xl  md:text-3xl text-center  mb-1 ">
          Hi..
        </p>

        <p className=" text-center text-neutral-200 text-2xl md:text-4xl ">
          I&apos;m a{" "}
          <span className="text-blue-500 text-2xl md:text-4xl dark:text-blue-500 playwrite-gb-s-regular">
            {" "}
            Web Developer.
          </span>
        </p>
      </div>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          onClick={handleDownloadResume}
          className="w-40 h-10 rounded-xl  border hover:bg-blue-500  border-white border-transparent text-white text-sm"
        >
          Download Resume
        </button>
        <button
          onClick={scrollToContact}
          className="w-40 h-10 rounded-xl bg-white hover:text-blue-500 hover:dark:text-blue-500 text-black border border-black  text-sm"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default TypeWriteName;
