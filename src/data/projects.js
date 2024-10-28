import movieV from "../assets/ClickyTrailers/MovieV.png";
import movieimg from "../assets/ClickyTrailers/movie.png";
import movie from "../assets/ClickyTrailers/Movie1.png";
import movieCast from "../assets/ClickyTrailers/movieCast.png";

import home from "../assets/SpeedyCars/home.png";
import admin from "../assets/SpeedyCars/admin.png";
import cars from "../assets/SpeedyCars/cars.png";
import booking from "../assets/SpeedyCars/booking.png";



import auth from "../assets/SparkChat/auth.png";
import otp from "../assets/SparkChat/otp.png";
import chat from "../assets/SparkChat/chat.png";
import profile from "../assets/SparkChat/profile.png";
import search from "../assets/SparkChat/search.png";
import search1 from "../assets/SparkChat/search2.png";

const projectsData = [{
  title: "SparkChat",
  description:
    "SparkChat is a dynamic, real-time messaging platform designed for seamless communication and collaboration. With a modern and intuitive interface, SparkChat allows  users can easily sign up or log in, chat instantly, and share files. With features like emoji support and file uploads, SparkChat is designed for dynamic, interactive communication.",
  link: "https://spark-chat-2024.vercel.app",
  image: [auth, otp, chat,search1],
  technologies: [
    "React",
    "TailwindCSS",
    "WebSocket",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Cloudinary",
  ],
},

  {
    title: "My-Portfolio",
    description:
      "This project involves the development of a personal portfolio website using HTML, CSS, JavaScript, and ReactJs. The portfolio showcases personal projects, skills, and experiences, providing an interactive and visually appealing platform for individuals to present their work to potential employers or clients.",
      link:'',
    image: [],
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
  },
  {
    title: "Clicky Trailers",
    description:
      "The WatchList application provides users with a seamless experience to explore the latest movies and TV shows. Users can easily sign in or sign up to create personalized accounts, enabling them to watch trailers for new releases and discover trending content. The application features a WatchList functionality, allowing users to add or remove titles as they curate their viewing preferences.",
      link:'https://clickytrailers.vercel.app/',
    image: [movieimg, movie, movieV, movieCast],
    technologies: [
      "Angular",
      "TailwindCSS",
      "Angular Material",
      "NgRx",
      "TMDB API",
      "ExpressJS",
      "MongoDB",
    ],
  },
  {
    title: "SpeedyCars",
    description:
      "The Online Car Booking and Rental Application is a comprehensive platform designed for seamless car bookings and rentals, providing an intuitive interface for customers seeking to rent vehicles and owners wanting to list their cars. The application enhances convenience and efficiency, allowing users to easily search for available vehicles and book them online. Additionally, it features a robust admin dashboard that empowers administrators to manage bookings, cancel reservations, add new cars, and oversee hosts while monitoring transactions to ensure transparency and accountability. Overall, this project aims to simplify the car rental process for both users and administrators.",
      link:'https://github.com/umesh-22/RentAndDrive',
    image: [home, admin, cars, booking],
    technologies: [
      "Angular",
      "Bootstrap",
      "Angular Material",
      "REST API",
      "JSON",
    ],
  },
];

export default projectsData;

export const experienceData = [
  {
    companyName: "Mphasis Limited",
    roleAndYoE:
      "Worked as Associate Software Engineer. From May 2023 to Present",
    responsibilities: [
      "Full Stack Development: Developed comprehensive client and server-side applications utilizing Node.js, Express, Angular, React, and MongoDB, ensuring seamless integration and functionality across the entire tech stack.",
      "Lazy Loading Implementation: Implemented lazy loading to optimize resource loading, resulting in a 20% reduction in initial load times and significantly enhancing overall page performance.",
      "API Optimization & Enhancement: Redesigned and optimized RESTful APIs to improve response times and ensure scalability, effectively accommodating high-traffic environments.",
      "Code Refactoring: Streamlined codebases through restructuring, reducing technical debt, and enhancing overall maintainability.",
      "Version Control & Collaboration: Utilized Git for version control, actively participated in continuous integration, and conducted thorough code reviews to ensure high-quality code.",
      "Cross-Functional Collaboration: Collaborated closely with UI/UX teams to deliver a seamless user experience and partnered with DevOps for efficient application deployment.",
    ],
  },
];
