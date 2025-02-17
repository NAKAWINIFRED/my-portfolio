// "use client";
// import { useEffect } from "react";
// import Image from "next/image";
// import Head from "next/head";
// import { useState } from "react";
// import { BsFillMoonStarsFill } from "react-icons/bs";
// import { AiFillLinkedin } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
// import me from "../public/me.png
// export default function Home() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchGitHubProjects = async () => {
//       try {
//         const response = await fetch("https://api.github.com/users/NAKAWINIFRED/repos");
//         const data = await response.json();
//         console.log(data);
//         setProjects(data);
//       } catch (error) {
//         console.error("Error fetching GitHub projects:", error);
//       }
//     };

//     fetchGitHubProjects();
//   }, []);
   
//   const allowedProjects = [
//     "Star-Day-care-",
//     "my-portfolio",
//     "QR-Generator",
//     "carDealership",
//     "CIU-Frontend",
//     "C_I_U_BACKEND"
//   ];

//   // const filteredProjects = projects.filter((project) => 
//   //   allowedProjects.includes(project.name)
//   // );

//   const filteredProjects = projects.filter((project) =>
//     allowedProjects.map(name => name.toLowerCase()).includes(project.name.toLowerCase())
//   );
  

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Head>
//         <title>Winifred Nakawunde Portfolio</title>
//         <meta name="description" content="Portfolio" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <nav className="py-4 flex justify-between items-center px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 fixed w-full z-10">

        
//         <ul className="flex gap-6 text-gray-800 dark:text-white">
//           <li><a href="#home" className="hover:text-teal-500">Home</a></li>
//           <li><a href="#about" className="hover:text-teal-500">About Me</a></li>
//           <li><a href="#projects" className="hover:text-teal-500">Projects</a></li>
//           <li><a href="#contact" className="hover:text-teal-500">Contact Me</a></li>
//         </ul>
//         <BsFillMoonStarsFill
//           onClick={() => setDarkMode(!darkMode)}
//           className="cursor-pointer text-2xl dark:text-white"
//         />
//       </nav>

//       <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
//         <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
//           <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl pt-28">Winifred Nakawunde</h2>
//           <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Software Engineer.</h3>
//           <h4 className="text-2xl py-2 dark:text-white md:text-3l">Full Stack Developer</h4>
//           <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg">
//           I am a skilled software engineer who loves turning ideas into impactful tech
//               solutions. With strong problem-solving skills and a creative approach, I combine
//              functionality and style in my work. Am always curious, eager to learn, and dedicated to               growing alongside the fast-paced world of technology.
//           </p>
//           <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
//             <a href="https://www.linkedin.com/in/winifred-nakawunde-22a83a303/" target="_blank" rel="noopener noreferrer">
//               <AiFillLinkedin />
//             </a>
//             <a href="mailto:nakawundewinifred@gmail.com">
//               <MdEmail />
//             </a>
//           </div>
//           <div className="relative mx-auto rounded-full w-80 h-80 md:h-96 md:w-96 mt-10">
//             <Image src={me} className="rounded-full" alt="picture of me" layout="fill" objectFit="cover" />
//           </div>
//         </section>

//         <section id="about" className="py-10">
//           <h3 className="text-3xl dark:text-white">About Me</h3>
//           <p className="text-md py-2 text-gray-800 dark:text-white">
//             My journey into software engineering began with a passion for solving problems and
//             creating impactful solutions. I joined the Refactory and was able to make it into Refactory the Academy apprenticeship program, gaining hands-on experience and
//             bridging the gap between theory and practice.
//           </p>

//           <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
//                I’ve worked on diverse projects using technologies like{" "}
//               <span className="text-teal-500">
//                  JavaScript, React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS
//             </span>
//             , building dynamic, responsive web applications. My expertise also extends to tools
//              like<span className="text-teal-500"> Figma, Git, GitHub, and Postman,</span> ensuring seamless collaboration and efficient API
//               testing.
//            </p>

//            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
//               With each project, I’ve refined my skills in crafting sleek interfaces and scalable
//               backends while embracing every challenge as an opportunity to grow. This journey has
//               shaped me into a versatile developer eager to create innovative solutions and drive
//               meaningful impact.
//             </p>
//         </section>

//         <section id="projects" className="py-10">
//         <h3 className="text-3xl dark:text-white">Projects</h3>
//           <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
//             Here are some of my GitHub projects. Click on a project to view more details.
//           </p>

//           <div className="grid md:grid-cols-3 gap-10">
//             {filteredProjects.map((project) => (
//               <div key={project.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
//                 <h3 className="text-lg font-medium text-teal-600 mt-4">{project.name.replace(/-/g, " ")}</h3>
//                 <p className="text-gray-800 dark:text-gray-300 py-2">
//                   {project.description ? project.description : "No description available."}
//                 </p>
//                 <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">
//                   View on GitHub →
//                 </a>
//               </div>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
//               <h3 className="text-lg font-medium text-teal-600">Languages and Frameworks</h3>
//               <p className="text-gray-800 py-1">JavaScript</p>
//               <p className="text-gray-800 py-1">React.js</p>
//               <p className="text-gray-800 py-1">Next.js</p>
//               <p className="text-gray-800 py-1">Html</p>
//               <p className="text-gray-800 py-1">NodeJS</p>
//               <p className="text-gray-800 py-1">Express</p>
//               <p className="text-gray-800 py-1">Css</p>
//               <p className="text-gray-800 py-1">Tailwind Css</p>
//               <p className="text-gray-800 py-1">BootStrap</p>
//             </div>
//             <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
//               <h3 className="text-lg font-medium text-teal-600">Technologies And Tools</h3>
//               <p className="text-gray-800 py-1">Postgres</p>
//               <p className="text-gray-800 py-1">Git & GitHub</p>
//               <p className="text-gray-800 py-1">Figma</p>
//               <p className="text-gray-800 py-1">Docker</p>
//               <p className="text-gray-800 py-1"> Vite</p>
//               <p className="text-gray-800 py-1">Cypress</p>
//               <p className="text-gray-800 py-1"> Trello</p>
//             </div>
//             <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
//               <h3 className="text-lg font-medium text-teal-600">Soft Skills</h3>
//               <p className="text-gray-800 py-1">Effective Communication</p>
//               <p className="text-gray-800 py-1">Problem-Solving & Critical Thinking</p>
//               <p className="text-gray-800 py-1">Leadership & Team Collaboration</p>
//               <p className="text-gray-800 py-1">Time Management & Organization</p>
//               <p className="text-gray-800 py-1">Adaptability & Continuous Learning</p>
//             </div>
//           </div>
//         </section>

//         <section id="contact" className="py-10">
//           <h3 className="text-3xl dark:text-white">Contact Me</h3>
//           <p className="text-md py-2 text-gray-800 dark:text-gray-200">
//           Feel free to connect with me via LinkedIn or email below for any inquiries, collaborations, or opportunities
//           </p>
//           <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
          
//             <a href="https://www.linkedin.com/in/winifred-nakawunde-22a83a303/" target="_blank" rel="noopener noreferrer">
//               <AiFillLinkedin />
//             </a>
//             <a href="mailto:nakawundewinifred@gmail.com">
//               <MdEmail />
//             </a>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
export default function Home() {


  const[isDarkMode, setIsDarkMode] = useState(true);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
      if(isDarkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
  },[isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  )
}