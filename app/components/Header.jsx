// import React from 'react'
// import { motion } from "motion/react"


// const Header = () => {
//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4  pt-80 '>
//      <motion.div 
//      initial={{scale: 0}}
//      whileInView={{scale: 1}}
//      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
//      >
//       <img src="/me.png" alt="" className='rounded-full  w-48 h-48 object-cover' />
//     </motion.div>

//     <motion.h3
//     initial={{y: -20, opacity: 0}}
//     whileInView={{y: 0, opacity: 1}}
//     transition={{duration: 0.6, delay: 0.3}}
//     className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
//         Hi, I'm Winifred Nakawunde <img src="/hand-icon.png" alt="" className='w-6' /></motion.h3>
//     <motion.h1
//      initial={{y: -30, opacity: 0}}
//      whileInView={{y: 0, opacity: 1}}
//      transition={{duration: 0.8, delay: 0.5}}
//     className='text-3lx sm:text-6xl lg:text-[66px] font-Ovo'>
//        Software Engineer based in Uganda 
//     </motion.h1>
//     <motion.p 
//      initial={{opacity: 0}}
//      whileInView={{ opacity: 1}}
//      transition={{duration: 0.6, delay: 0.7}}
//     className='max-w-2xl mx-auto font-Ovo'>I am a passionate full-stack software engineer with expertise in JavaScript, React.js, Next.js, Node.js, and more. With a year of experience, I have built innovative solutions, including an online examination monitoring system. I thrive on creating seamless, user-friendly applications that drive impact.</motion.p>

//     <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//         <motion.a
//          initial={{y: 30, opacity: 0}}
//          whileInView={{y: 0, opacity: 1}}
//          transition={{duration: 0.6, delay: 0.3}}
//         href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex item-center gap-2 dark:bg-transparent' >contact me <img src="/right-arrow-white.png"  alt="" className='  w-4 h-6 pt-3' /></motion.a>

//         <motion.a
//         initial={{y: 30, opacity: 0}}
//         whileInView={{y: 0, opacity: 1}}
//         transition={{duration: 0.6, delay: 0.3}}
//         href="/Winifred Nakawunde _CV.docx" download 
//         className='px-10 py-3 border rounded-full border-gray-500 flex item-center gap-2 bg-white dark:text-black'>my resume <img src="/download-icon.png"  alt="" className= ' w-4 h-6 pt-2' /></motion.a>
//     </div>
//     </div>
//   )
// }

// export default Header

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-80">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/me.png"
          alt="Winifred Nakawunde"
          width={192}
          height={192}
          className="rounded-full object-cover"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi, I'm Winifred Nakawunde{' '}
        <Image src="/hand-icon.png" alt="hand icon" width={24} height={24} />
      </motion.h3>
      
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Software Engineer based in Uganda
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a passionate full-stack software engineer with expertise in JavaScript, React.js, Next.js, Node.js, and more. With a year of experience, I have built innovative solutions, including an online examination monitoring system. I thrive on creating seamless, user-friendly applications that drive impact.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me
          <Image src="/right-arrow-white.png" alt="right arrow" width={16} height={24} />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="/Winifred Nakawunde _CV.docx"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume
          <Image src="/download-icon.png" alt="download icon" width={16} height={24} />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
