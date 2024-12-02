"use client";

import Image from "next/image";
import Head from "next/head";
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import me from "../public/me.png"; 


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Winifred Nakawunde Portfolio</title>
        <meta name="description" content="Portfolio"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900" >
        <section className="min-h-screen">
          <nav className="py-10 md-12 flex justify-between  dark:text-white">
          <h1 className="font-burtons text-xl">My Portfolio</h1>
          <ul className="flex items-center">
            <li>
            <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
            </li>
            <li>
                <a
                  href="https://github.com/NAKAWINIFRED"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 transition-colors duration-300 hover:from-cyan-600 hover:to-teal-600"
                >
                  My GitHub
                </a>
            </li>
          </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Winifred Nakawunde</h2>
            <h3 className=" text-2xl py-2  dark:text-white md:text-3xl">Software Engineer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800  dark:text-white md:text-xl max-w-lg mx-auto">I am a passionate software engineer who loves turning ideas into impactful tech solutions. With strong problem-solving skills and a creative approach, I combine functionality and style in my work.
            Am  always curious, eager to learn and dedicated to growing alongside the fast-paced world of technology.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 md:h-96 md:w-96 " >
             <Image src={me}className="rounded-full w-80 h-80 mt-10 md:h-96 md:w-96" layout="fill" objectFit="cover" />
          </div>
        </section>
        
       <section>
         <div>
          <h3 className="text-3xl py-1 dark:text-white mt-20" >My Journey</h3>
          <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">My journey into software engineering began with a passion for solving problems and creating impactful solutions. After completing a degree in Software Engineering, I joined the Refactory Academy apprenticeship program, gaining hands-on experience and bridging the gap between theory and practice.</p>

          <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200">I’ve worked on diverse projects using technologies like <span className="text-teal-500"> JavaScript, React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS </span>, building dynamic, responsive web applications. My expertise also extends to tools like figma,Git, GitHub, and Postman, ensuring seamless collaboration and efficient API testing.</p>

          <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200">With each project, I’ve refined my skills in crafting sleek interfaces and scalable backends while embracing every challenge as an opportunity to grow. This journey has shaped me into a versatile developer eager to create innovative solutions and drive meaningful impact.</p>
         </div>
         <div className="lg:flex gap-10">
         <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <h3 className="text-lg font-medium pt-8 pb-2 py-4 text-teal-600 ">
                Languages and Frameworks
              </h3>
              <p className="py-2">
              Languages and Frameworks I worked with in my past Projects
              </p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Html</p>
              <p className="text-gray-800 py-1">Pug</p>
              <p className="text-gray-800 py-1">Css</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
         </div>
       </section>

      </main>
      
    </div>
  );
}
