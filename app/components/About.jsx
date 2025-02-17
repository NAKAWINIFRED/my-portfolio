import { infoList, toolsData } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about'className='w-full px-[12%] py-80 scroll-mt-20'
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </motion.h4>
      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
        initial={{scale: 0.9, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        transition={{duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <img src="/me.png" alt="user" className='w-full rounded-3xl' />
        </motion.div>
        <motion.div
        initial={{opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>
           <p className='mb-10 max-w-2xl font-Ovo text-sm leading-7'>I am a dedicated software engineer from Kampala, Uganda, specializing in full-stack development. My expertise spans JavaScript, React.js, Next.js, Node.js, CSS, Java, and more. Over the past year, I have worked on diverse projects, including an online examination monitoring system, building dynamic and scalable applications. My journey began with a passion for problem-solving and creating impactful solutions, leading me to join Refactory’s Academy apprenticeship program for hands-on experience. I enjoy crafting sleek interfaces, optimizing performance, and developing efficient backends. Continuous learning and innovation drive my approach to software development.</p>

           <motion.ul 
           initial={{ opacity: 0}}
           whileInView={{ opacity: 1}}
           transition={{duration: 0.8, delay: 1}}
           className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark,title,description},index)=>(
                <motion.li
                
                whileInView={{scale: 1.05}}
               
                className='border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index} >
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3 ' />
                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </motion.li>
            ))}
        </motion.ul>

        <motion.h4
        initial={{y: 20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.3, delay: 0.5}}
        className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I have Worked with</motion.h4>

        <motion.ul
        initial={{opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
                <motion.li
               
                whileHover={{scale: 1.1}}
      
                className='flex items-center justify-center w-12 sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ' key={index}>
                    <Image src={tool} alt='' className='w-5 sm:w-7'/>
                </motion.li>
            ))}
        </motion.ul>
        </motion.div>

        
      </motion.div>
    </motion.div>
  )
}

export default About
// import { infoList, toolsData } from '@/public/assets'; // Ensure this path and export are correct
// import Image from 'next/image';
// import React from 'react';
// import { motion } from 'framer-motion';

// const About = ({ isDarkMode = false }) => { // Defaulting isDarkMode to false if not provided
//   return (
//     <motion.div
//       id="about"
//       className="w-full px-[12%] py-80 scroll-mt-20"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.h4
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         Introduction
//       </motion.h4>
//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-Ovo"
//       >
//         About me
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
//       >
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-64 sm:w-80 rounded-3xl max-w-none"
//         >
//           <Image
//             src="/me.png" // Ensure this path is correct and image exists in 'public'
//             alt="user"
//             className="w-full rounded-3xl"
//             width={320} // Adjust width as needed
//             height={320} // Adjust height as needed
//           />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="flex-1"
//         >
//           <p className="mb-10 max-w-2xl font-Ovo text-sm leading-7">
//             I am a dedicated software engineer from Kampala, Uganda, specializing in full-stack development...
//           </p>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
//           >
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <motion.li
//                 whileInView={{ scale: 1.05 }}
//                 className="border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
//                 key={index}
//               >
//                 <Image
//                   src={isDarkMode ? iconDark : icon} // Ensure correct icon paths
//                   alt={title}
//                   className="w-7 mt-3"
//                   width={28} // Adjust width as needed
//                   height={28} // Adjust height as needed
//                 />
//                 <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
//                 <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
//               </motion.li>
//             ))}
//           </motion.ul>

//           <motion.h4
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3, delay: 0.5 }}
//             className="my-6 text-gray-700 font-Ovo dark:text-white/80"
//           >
//             Tools I have Worked with
//           </motion.h4>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="flex items-center gap-3 sm:gap-5"
//           >
//             {toolsData.map((tool, index) => (
//               <motion.li
//                 whileHover={{ scale: 1.1 }}
//                 className="flex items-center justify-center w-12 sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
//                 key={index}
//               >
//                 <Image
//                   src={tool} // Ensure correct tool image paths
//                   alt={`Tool ${index}`}
//                   className="w-5 sm:w-7"
//                   width={24} // Adjust width as needed
//                   height={24} // Adjust height as needed
//                 />
//               </motion.li>
//             ))}
//           </motion.ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About;
