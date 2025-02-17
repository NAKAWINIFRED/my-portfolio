import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <img src={isDarkMode ? "/Logo-dark.png" : "/Logo.png"} alt="" className='w-36 mx-auto mb-2'/>
          <div className='w-max flex items-center gap-2 mx-auto  text-gray-700 hover:text-teal-500'>
          <img src={isDarkMode ?"/mail_icon_dark.png" :"/mail_icon.png"} alt="" className='w-6'/>
          nakawundewinifred@gmail.com
          </div>
          <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Winifred Nakawunde. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
              <li><a className="flex items-center gap-2 text-gray-700 hover:text-teal-500" target='_blank' href="https://github.com/NAKAWINIFRED">GitHub <FaGithub size={24} /></a></li>
              <li><a className="flex items-center gap-2 text-gray-700 hover:text-teal-500" target='_blank'  rel="noopener noreferrer" href="https://www.linkedin.com/in/winifred-nakawunde-22a83a303/">Linkedin  <AiFillLinkedin size={24}/></a></li>
            </ul>
          </div>
        
      </div>
    </div>
  )
}

export default footer
// import React from 'react';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { FaGithub } from 'react-icons/fa';
// import Image from 'next/image';

// const Footer = ({ isDarkMode }) => {
//   return (
//     <div className="mt-20">
//       <div className="text-center">
//         <Image
//           src={isDarkMode ? "/Logo-dark.png" : "/Logo.png"}
//           alt="Logo"
//           className="w-36 mx-auto mb-2"
//           width={144} // Adjust width as needed
//           height={36} // Adjust height as needed
//         />
//         <div className="w-max flex items-center gap-2 mx-auto text-gray-700 hover:text-teal-500">
//           <Image
//             src={isDarkMode ? "/mail_icon_dark.png" : "/mail_icon.png"}
//             alt="Mail Icon"
//             className="w-6"
//             width={24} // Adjust width as needed
//             height={24} // Adjust height as needed
//           />
//           nakawundewinifred&#64;gmail.com {/* Replaced @ with &#64; to escape it */}
//         </div>
//         <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
//           <p>© 2025 Winifred Nakawunde. All rights reserved</p>
//           <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
//             <li>
//               <a
//                 className="flex items-center gap-2 text-gray-700 hover:text-teal-500"
//                 target="_blank"
//                 href="https://github.com/NAKAWINIFRED"
//                 rel="noopener noreferrer"
//               >
//                 GitHub <FaGithub size={24} />
//               </a>
//             </li>
//             <li>
//               <a
//                 className="flex items-center gap-2 text-gray-700 hover:text-teal-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href="https://www.linkedin.com/in/winifred-nakawunde-22a83a303/"
//               >
//                 Linkedin <AiFillLinkedin size={24} />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
