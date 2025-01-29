// "use client";

// import Image from "next/image";
// import Head from "next/head";
// import { useState } from "react";
// import { BsFillMoonStarsFill } from "react-icons/bs";
// import { AiFillLinkedin } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
// import me from "../public/me.png";

// export default function Home() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Head>
//         <title>Winifred Nakawunde Portfolio</title>
//         <meta name="description" content="Portfolio"></meta>
//         <link rel="icon" href="/favicon.ico"></link>
//       </Head>
//       <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
//         <section className="min-h-screen">
//           <nav className="py-10 md:py-12 flex justify-between dark:text-white">
//           <h1
//               className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-center font-bold"
//             >
//               My Portfolio
//             </h1>
//             <ul className="flex items-center">
//               <li>
//                 <BsFillMoonStarsFill
//                   onClick={() => setDarkMode(!darkMode)}
//                   className="cursor-pointer text-2xl"
//                 />
//               </li>
//               <li>
//                 <a
//                   href="https://github.com/NAKAWINIFRED"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition-colors duration-300 hover:from-cyan-600 hover:to-teal-600"
//                 >
//                   My GitHub
//                 </a>
//               </li>
//             </ul>
//           </nav>
//           <div className="text-center p-10">
//             <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
//               Winifred Nakawunde
//             </h2>
//             <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Software Engineer.</h3>
//             <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto">
//               I am a skilled software engineer who loves turning ideas into impactful tech
//               solutions. With strong problem-solving skills and a creative approach, I combine
//               functionality and style in my work. Am always curious, eager to learn, and dedicated to
//               growing alongside the fast-paced world of technology.
//             </p>
//           </div>
//           <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
//             <a
//               href="https://www.linkedin.com/in/winifred-nakawunde-22a83a303/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
//             >
//               <AiFillLinkedin />
//             </a>
//             <a
//               href="mailto:nakawundewinifred@gmail.com"
//               className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
//             >
//               <MdEmail />
//             </a>
//           </div>
//           <div className="relative mx-auto rounded-full w-80 h-80 md:h-96 md:w-96">
//             <Image
//               src={me}
//               className="rounded-full w-80 h-80 mt-10 md:h-96 md:w-96"
//               alt="picture of me"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </section>

//         <section>
//           <div>
//             <h3 className="text-3xl py-1 dark:text-white mt-20">My Journey</h3>
//             <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
//               My journey into software engineering began with a passion for solving problems and
//               creating impactful solutions. I joined the Refactory and was able to make it into Refactory the Academy apprenticeship program, gaining hands-on experience and
//               bridging the gap between theory and practice.
//             </p>

//             <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
//               I’ve worked on diverse projects using technologies like{" "}
//               <span className="text-teal-500">
//                 JavaScript, React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS
//               </span>
//               , building dynamic, responsive web applications. My expertise also extends to tools
//               like<span className="text-teal-500"> Figma, Git, GitHub, and Postman,</span> ensuring seamless collaboration and efficient API
//               testing.
//             </p>

            // <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            //   With each project, I’ve refined my skills in crafting sleek interfaces and scalable
            //   backends while embracing every challenge as an opportunity to grow. This journey has
            //   shaped me into a versatile developer eager to create innovative solutions and drive
            //   meaningful impact.
            // </p>
//           </div>
//           <div className="lg:flex gap-10">
//             <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
//               <h3 className="text-lg font-medium pt-8 pb-2 py-4 text-teal-600">
//                 Languages and Frameworks
//               </h3>
              // <p className="text-gray-800 py-1">JavaScript</p>
              // <p className="text-gray-800 py-1">React.js</p>
              // <p className="text-gray-800 py-1">Next.js</p>
              // <p className="text-gray-800 py-1">Html</p>
              // <p className="text-gray-800 py-1">NodeJS</p>
              // <p className="text-gray-800 py-1">Express</p>
              // <p className="text-gray-800 py-1">Css</p>
              // <p className="text-gray-800 py-1">Tailwind Css</p>
              // <p className="text-gray-800 py-1">BootStrap</p>
//             </div>
//             <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
//               <h3 className="text-lg font-medium pt-8 pb-2 py-4 text-teal-600">
//                 Technologies And Tools
//               </h3>
              // <p className="text-gray-800 py-1">Postgres</p>
              // <p className="text-gray-800 py-1">Git & GitHub</p>
              // <p className="text-gray-800 py-1">Figma</p>
              // <p className="text-gray-800 py-1">Docker</p>
              // <p className="text-gray-800 py-1"> Vite</p>
              // <p className="text-gray-800 py-1">Cypress</p>
              // <p className="text-gray-800 py-1"> Trello</p>
//             </div>
//             <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
//               <h3 className="text-lg font-medium pt-8 pb-2 py-4 text-teal-600">Soft Skills</h3>
              // <p className="text-gray-800 py-1">Effective Communication</p>
              // <p className="text-gray-800 py-1">Problem-Solving & Critical Thinking</p>
              // <p className="text-gray-800 py-1">Leadership & Team Collaboration</p>
              // <p className="text-gray-800 py-1">Time Management & Organization</p>
              // <p className="text-gray-800 py-1">Adaptability & Continuous Learning</p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import me from "../public/me.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Winifred Nakawunde Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="py-4 flex justify-between items-center px-6 bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
        <h1 className="text-xl font-bold text-teal-500">My Portfolio</h1>
        <ul className="flex gap-6 text-gray-800 dark:text-white">
          <li><a href="#home" className="hover:text-teal-500">Home</a></li>
          <li><a href="#about" className="hover:text-teal-500">About Me</a></li>
          <li><a href="#services" className="hover:text-teal-500">Services</a></li>
          <li><a href="#contact" className="hover:text-teal-500">Contact Me</a></li>
        </ul>
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-2xl dark:text-white"
        />
      </nav>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl pt-20">Winifred Nakawunde</h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Software Engineer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg">
          I am a skilled software engineer who loves turning ideas into impactful tech
              solutions. With strong problem-solving skills and a creative approach, I combine
             functionality and style in my work. Am always curious, eager to learn, and dedicated to               growing alongside the fast-paced world of technology.
          </p>
          <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/winifred-nakawunde-22a83a303/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="mailto:nakawundewinifred@gmail.com">
              <MdEmail />
            </a>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 md:h-96 md:w-96 mt-10">
            <Image src={me} className="rounded-full" alt="picture of me" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section id="about" className="py-5">
          <h3 className="text-3xl dark:text-white">About Me</h3>
          <p className="text-md py-2 text-gray-800 dark:text-white">
            My journey into software engineering began with a passion for solving problems and
            creating impactful solutions. I joined the Refactory and was able to make it into Refactory the Academy apprenticeship program, gaining hands-on experience and
            bridging the gap between theory and practice.
          </p>

          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
               I’ve worked on diverse projects using technologies like{" "}
              <span className="text-teal-500">
                 JavaScript, React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS
            </span>
            , building dynamic, responsive web applications. My expertise also extends to tools
             like<span className="text-teal-500"> Figma, Git, GitHub, and Postman,</span> ensuring seamless collaboration and efficient API
              testing.
           </p>

           <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              With each project, I’ve refined my skills in crafting sleek interfaces and scalable
              backends while embracing every challenge as an opportunity to grow. This journey has
              shaped me into a versatile developer eager to create innovative solutions and drive
              meaningful impact.
            </p>
        </section>

        <section id="projects" className="py-5">
          <h3 className="text-3xl dark:text-white">Projects</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             I have worked on multiple projects, including <span className="text-teal-500">an online examination management system, Day Star Day Care—a data management system for a daycare—a car dealership website, my personal portfolio, </span> and many more. These projects have allowed me to develop a strong foundation in both front-end and back-end development, as well as database management and UI/UX design.
           </p>

           <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             Through these experiences, I have gained expertise in building scalable and user-friendly applications tailored to different business needs. I have worked with a variety of technologies to create dynamic, responsive, and efficient solutions.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             Below is a list of the languages, frameworks, technologies, and tools I have used to develop these projects and many others.
            </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <h3 className="text-lg font-medium text-teal-600">Languages and Frameworks</h3>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Html</p>
              <p className="text-gray-800 py-1">NodeJS</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Css</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
              <p className="text-gray-800 py-1">BootStrap</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <h3 className="text-lg font-medium text-teal-600">Technologies And Tools</h3>
              <p className="text-gray-800 py-1">Postgres</p>
              <p className="text-gray-800 py-1">Git & GitHub</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Docker</p>
              <p className="text-gray-800 py-1"> Vite</p>
              <p className="text-gray-800 py-1">Cypress</p>
              <p className="text-gray-800 py-1"> Trello</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <h3 className="text-lg font-medium text-teal-600">Soft Skills</h3>
              <p className="text-gray-800 py-1">Effective Communication</p>
              <p className="text-gray-800 py-1">Problem-Solving & Critical Thinking</p>
              <p className="text-gray-800 py-1">Leadership & Team Collaboration</p>
              <p className="text-gray-800 py-1">Time Management & Organization</p>
              <p className="text-gray-800 py-1">Adaptability & Continuous Learning</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10">
          <h3 className="text-3xl dark:text-white">Contact Me</h3>
          <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/winifred-nakawunde-22a83a303/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="mailto:nakawundewinifred@gmail.com">
              <MdEmail />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
