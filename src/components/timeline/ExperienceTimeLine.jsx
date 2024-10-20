import { Timeline } from "../ui/Timeline";

import { experienceData } from "../../data/projects";

const ExperienceTimeLine = () => {
  const experience =
    "I've been working as Full Stack Developer for the past 2 years. Here's a timeline of my journey.";
  const heading = "Engineering the Future: My Full-Stack Saga";
  
  const data = experienceData.map((project) => {
    return {
      title: project.companyName,
      content: (
        <div>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-blue-500 text-xs md:text-sm font-normal mb-8">
            {project.roleAndYoE}
          </p>
          <div className="mb-8">
            {project.responsibilities.map((responsibility, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
                >
                  ✅ {responsibility}
                </div>
              );
            })}
          </div>
          
        </div>
      ),
    };
  });

  // const experienceData = [
  //   {
  //     title: "Mphasis Limited",
  //     content: (
  //       <div>
  //         <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-blue-500 text-xs md:text-sm font-normal mb-8">
  //           Worked as Associate Software Engineer. From May 2023 to Present
  //         </p>
  //         <div className="mb-8">
  //           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //             ✅ Full Stack Development: Developed comprehensive client and
  //             server-side applications utilizing Node.js, Express, Angular,
  //             React, and MongoDB, ensuring seamless integration and
  //             functionality across the entire tech stack.
  //           </div>
  //           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //             ✅ Lazy Loading Implementation: Implemented lazy loading to
  //             optimize resource loading, resulting in a 20% reduction in initial
  //             load times and significantly enhancing overall page performance.
  //           </div>
  //           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //             ✅ API Optimization & Enhancement: Redesigned and optimized
  //             RESTful APIs to improve response times and ensure scalability,
  //             effectively accommodating high-traffic environments.
  //           </div>
  //           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //             ✅ Code Refactoring: Streamlined codebases through restructuring,
  //             reducing technical debt, and enhancing overall maintainability.
  //           </div>
  //           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //             ✅ Version Control & Collaboration: Utilized Git for version
  //             control, actively participated in continuous integration, and
  //             conducted thorough code reviews to ensure high-quality code.
  //           </div>
  //           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //             ✅ Cross-Functional Collaboration: Collaborated closely with UI/UX
  //             teams to deliver a seamless user experience and partnered with
  //             DevOps for efficient application deployment.
  //           </div>
  //         </div>

  //         {/* <div className="grid grid-cols-2 gap-4">
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
  //           </div> */}
  //       </div>
  //     ),
  //   },
  // ];
  return (
    <div className="w-full bg-white">
      <Timeline data={data} text={experience} heading={heading} />
    </div>
  );
};

export default ExperienceTimeLine;
