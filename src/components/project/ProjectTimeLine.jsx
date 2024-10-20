import { Timeline } from "../ui/Timeline";



import projectsData from "../../data/projects";
import Image from "../Image";




const ProjectTimeLine = () => {
  const experience = "Here is my personal project works";
  const heading = "Crafting Code Stories"



  const data = projectsData.map((project) => {
    return {
      title: project.title,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap mb-4"> 
          
            {project.technologies.map((tech, index) => (
              <span key={index} className="mr-2 text-xs bg-blue-500 text-white rounded px-2  mb-1 py-1">
                {tech}
              </span>
            ))}
          </div>
          <div className=" mb-1">
          <a href={project.link} target="_blank" className="mr-2 text-xs bg-blue-500 text-white rounded px-2 py-1">App / Github Link </a>

          </div>
          <div className="grid grid-cols-2 gap-4">
            {project.image.map((img, index) => (
              // <Image imageUrl={img}  key={index}/>
              <img
                key={index}
                src={img}
                alt={`${project.title} image ${index + 1}`} 
                width={500}
                height={500}
                className=" rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            ))}
          </div>
        </div>
      ),
    };
  });
  
 
  
    // const data = [
    //     {
    //       title: "My-Portfolio",
    //       content: (
    //         <div>
    //           <p
    //             className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //            This project involves the development of a personal portfolio website using HTML, CSS, and JavaScript,ReactJs. The portfolio showcases personal projects, skills, and experiences, providing an interactive and visually appealing platform for individuals to present their work to potential employers or clients.
    //           </p>
    //           <div className="grid grid-cols-2 gap-4">
    //             <img
    //               src="https://assets.aceternity.com/templates/startup-1.webp"
    //               alt="startup template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //               src="https://assets.aceternity.com/templates/startup-2.webp"
    //               alt="startup template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //               src="https://assets.aceternity.com/templates/startup-3.webp"
    //               alt="startup template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //               src="https://assets.aceternity.com/templates/startup-4.webp"
    //               alt="startup template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //           </div>
    //         </div>
    //       ),
    //     },
    //     {
    //       title: "ClickyTrailers",
    //       content: (
    //         <div>
    //           <p
    //             className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //            The WatchList application provides users with a seamless experience to explore the latest movies and TV shows. Users can easily sign in or sign up to create personalized accounts, enabling them to watch trailers for new releases and discover trending content. The application features a WatchList functionality, allowing users to add or remove titles as they curate their viewing preferences.
    //           </p>
    //           <p
    //             className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //             Tech Used: Angular, TailwindCSS, Angular Material, TMDB API,ExpressJS,MongoDB
    //           </p>
    //           <div className="grid grid-cols-2 gap-4">
    //             <img
    //               src={movie}
    //               alt="hero template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //             src={movieimg}
    //               alt="feature template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //              src={movieV}
    //               alt="bento template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //               src={movieCast}
    //               alt="cards template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //           </div>
    //         </div>
    //       ),
    //     },
    //     {
    //       title: "SpeedyCars",
    //       content: (
    //         <div>
    //           <p
    //             className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
    //            The Online Car Booking and Rental Application is a comprehensive platform designed for seamless car bookings and rentals, providing an intuitive interface for customers seeking to rent vehicles and owners wanting to list their cars. The application enhances convenience and efficiency, allowing users to easily search for available vehicles and book them online. Additionally, it features a robust admin dashboard that empowers administrators to manage bookings, cancel reservations, add new cars, and oversee hosts while monitoring transactions to ensure transparency and accountability. Overall, this project aims to simplify the car rental process for both users and administrators.
    //           </p>
    //           <p
    //             className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
    //             Tech Used: Angular, BootStrap, Angular Material, RESTAPI, JSON
    //           </p>
             
    //           <div className="grid grid-cols-2 gap-4">
    //             <img
    //               src={home}
    //               alt="hero template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //               src={admin}
    //               alt="feature template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //               src={booking}
    //               alt="bento template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //             <img
    //               src={cars}
    //               alt="cards template"
    //               width={500}
    //               height={500}
    //               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
    //           </div>
    //         </div>
    //       ),
    //     },
    //   ];
  return (
    <div className="w-full">
    <Timeline data={data} text={experience} heading={heading} />
  </div>
  )
}

export default ProjectTimeLine


