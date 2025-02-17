// // import { workData } from '@/public/assets'
// // import React from 'react'
// // import {motion} from "motion/react"
// // import Image from 'next/image'

// // const Work = ({isDarkMode}) => {
// //   return (
// //     <motion.div 
// //     initial={{ opacity: 0}}
// //     whileInView={{ opacity: 1}}
// //     transition={{duration: 1}} id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
// //        <motion.h4
// //        initial={{y: -20, opacity: 0}}
// //        whileInView={{y: 0, opacity: 1}}
// //        transition={{duration: 0.5, delay: 0.3}}
// //        className='text-center mb-2 text-lg font-Ovo'>
// //         My portfolio
// //       </motion.h4>
// //       <motion.h2 
// //       initial={{y: -20, opacity: 0}}
// //       whileInView={{y: 0, opacity: 1}}
// //       transition={{duration: 0.5, delay: 0.5}}
// //       className='text-center text-5xl font-Ovo'>My Latest work</motion.h2>

// //       <motion.p
// //       initial={{ opacity: 0}}
// //       whileInView={{ opacity: 1}}
// //       transition={{duration: 0.5, delay: 0.7}}
// //       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am a passionate full-stack software engineer with expertise in JavaScript, React.js, Next.js, Node.js, and more.</motion.p>

// //       <motion.div
// //       initial={{opacity: 0}}
// //       whileInView={{ opacity: 1}}
// //       transition={{duration: 0.6, delay: 0.9}}
// //       className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
// //         {workData.map((project, index)=>(
// //             <motion.div 
            
// //             whileHover={{scale:1.05}}
// //             transition={{duration: 0.3}}
// //             key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
// //                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3  flex items-center justify-around duration-500 group-hover:bottom-7  text-sm'>
// //                <div>
// //                     <h2 className='font-semibold pl-2 '>{project.title}</h2>
// //                     <p className='text-sm text-gray-700 pl-3'>{project.description}</p>
// //                 </div>
// //                 <div className='border rounded-full border-black w-6  aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition 300  ' >
// //                     <img src="/send-icon.png" alt="send icon" className='w-3 '/>
// //                 </div>
// //                </div>
                
// //             </motion.div>
// //         ))}
// //       </motion.div>
// //     </motion.div>
// //   )
// // }

// // export default Work


// import { workData } from '@/public/assets'
// import React from 'react'
// import { motion } from "framer-motion"
// import Image from 'next/image'

// const Work = ({ isDarkMode }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }} 
//       id='work' 
//       className='w-full px-[12%] py-10 scroll-mt-20'
//     >
//       <motion.h4
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className='text-center mb-2 text-lg font-Ovo'
//       >
//         My portfolio
//       </motion.h4>
//       <motion.h2 
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className='text-center text-5xl font-Ovo'
//       >
//         My Latest Work
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
//       >
//         I am a passionate full-stack software engineer with expertise in JavaScript, React.js, Next.js, Node.js, and more.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className='grid grid-cols-auto my-10 gap-5 dark:text-black'
//       >
//         {workData.map((project, index) => (
//           <a 
//             key={index} 
//             href={project.link} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="block"
//           >
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
//               style={{ backgroundImage: `url(${project.bgImage})` }}
//             >
//               <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 flex items-center justify-around duration-500 group-hover:bottom-7 text-sm'>
//                 <div>
//                   <h2 className='font-semibold pl-2'>{project.title}</h2>
//                   <p className='text-sm text-gray-700 pl-3'>{project.description}</p>
//                 </div>
//                 <div className='border rounded-full border-black w-6 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition 300'>
//                   <img src="/send-icon.png" alt="send icon" className='w-3'/>
//                 </div>
//               </div>
//             </motion.div>
//           </a>
//         ))}
//       </motion.div>
//     </motion.div>
//   )
// }

// export default Work
import { workData } from '@/public/assets';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} 
      id='work' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My portfolio
      </motion.h4>
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I am a passionate full-stack software engineer with expertise in JavaScript, React.js, Next.js, Node.js, and more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-auto my-10 gap-5 dark:text-black'
      >
        {workData.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 flex items-center justify-around duration-500 group-hover:bottom-7 text-sm'>
                <div>
                  <h2 className='font-semibold pl-2'>{project.title}</h2>
                  <p className='text-sm text-gray-700 pl-3'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-6 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition 300'>
                  <Image src="/send-icon.png" alt="send icon" width={12} height={12} />
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
