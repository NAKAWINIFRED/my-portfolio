
// import React, {useEffect, useState, useRef} from 'react';
// import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

// const Navbar = ({isDarkMode,setIsDarkMode}) => {
//     const[isScroll, setIsScroll] = useState(false)
//     const sideMenuRef = useRef();

//     const openMenu = ()=>{
//         sideMenuRef.current.style.transform  = "translate(-16rem)"
//     }

//     const closeMenu = ()=>{
//         sideMenuRef.current.style.transform  = "translate(16rem)"
//     }

//     // 
//     useEffect(() => {
//       const handleScroll = () => {
//           setIsScroll(window.scrollY > 50);
//       };
   
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//    }, []);
   
//   return (
//     <>

//     <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
//         <img src = "/header-bg-color.png" alt="" className='w-full'/>
//     </div>
//       <nav className={`w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark: shadow-white/20"  : ""}`}>
//         <a href="#top">
//           {/* Corrected <image> to <img> */}
//           <img src= {isDarkMode ?"/Logo-dark.png" : "/Logo.png" }alt="Logo" className="w-28 cursor-pointer mr-14" />
//         </a>

//         <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark border dark:border-white/50 dark:bg-transparent"}  `}>
//           <li><a href="#top" className="font-Ovo hover:text-teal-500">Home</a></li>
//           <li><a href="#about" className="font-Ovo hover:text-teal-500">About Me</a></li>
//           <li><a href="#services" className="font-Ovo hover:text-teal-500">Services</a></li>
//           <li><a href="#work" className="font-Ovo hover:text-teal-500">My Work</a></li>
//           <li><a href="#contact" className="font-Ovo hover:text-teal-500">Contact Me</a></li>
//         </ul>

//         <div className='flex items-center gap-4'>
//         <button onClick={() => setIsDarkMode((prev) => !prev)}>
//            <img src={isDarkMode ? "/sun_icon.png" : "/moon_icon.png"} alt="Theme Toggle" className="w-6" />
//             </button>

//           <a href="#contact" className="font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 text-teal-500 dark:border-white/50">
//             Contact 
//             <img src={isDarkMode ?"/arrow-icon-dark.png" :"/arrow-icon.png" }alt="Arrow" className="w-3 ml-2" />
//           </a>

//           <button className='block md:hidden ml-3' onClick={openMenu}>
//             <img src={isDarkMode ?"/menu-white.png":"/menu-black.png"} alt="" className='w-6' />
//           </button>
//         </div>

//         {/* --------- mobile menu------ */}
//         <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

//     <div className='absolute right-6 top-6' onClick={closeMenu}>
//         <img src={isDarkMode ? "/close-white.png" : "/close-black.png"} alt="Close Menu" className='w-5 cursor-pointer'/>
//     </div>

//     <li>
//         <a href="#top" className="font-Ovo flex items-center gap-3 hover:text-teal-500" onClick={closeMenu}>
//             <FaHome /> Home
//         </a>
//     </li>
//     <li>
//         <a href="#about" className="font-Ovo flex items-center gap-3 hover:text-teal-500" onClick={closeMenu}>
//             <FaUser /> About Me
//         </a>
//     </li>
//     <li>
//         <a href="#services" className="font-Ovo flex items-center gap-3 hover:text-teal-500" onClick={closeMenu}>
//             <FaTools /> Services
//         </a>
//     </li>
//     <li>
//         <a href="#work" className="font-Ovo flex items-center gap-3 hover:text-teal-500" onClick={closeMenu}>
//             <FaBriefcase /> My Work
//         </a>
//     </li>
//     <li>
//         <a href="#contact" className="font-Ovo flex items-center gap-3 hover:text-teal-500" onClick={closeMenu}>
//             <FaEnvelope /> Contact Me
//         </a>
//     </li>
// </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useEffect, useState, useRef } from 'react';
import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background image for header */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src='/header-bg-color.png' alt='Background' layout="fill" objectFit="cover" />
      </div>

      <nav
        className={`w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${
          isScroll
            ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
            : ''
        }`}
      >
        <a href='#top'>
          <Image
            src={isDarkMode ? '/Logo-dark.png' : '/Logo.png'}
            alt='Logo'
            className='w-28 cursor-pointer mr-14'
            width={112} // Adjust width and height accordingly
            height={28}
          />
        </a>

        {/* Desktop Navbar Links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ''
              : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
          }`}
        >
          <li>
            <a href='#top' className='font-Ovo hover:text-teal-500'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='font-Ovo hover:text-teal-500'>
              About Me
            </a>
          </li>
          <li>
            <a href='#services' className='font-Ovo hover:text-teal-500'>
              Services
            </a>
          </li>
          <li>
            <a href='#work' className='font-Ovo hover:text-teal-500'>
              My Work
            </a>
          </li>
          <li>
            <a href='#contact' className='font-Ovo hover:text-teal-500'>
              Contact Me
            </a>
          </li>
        </ul>

        {/* Theme Toggle and Contact Button */}
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? '/sun_icon.png' : '/moon_icon.png'}
              alt='Theme Toggle'
              className='w-6'
              width={24}
              height={24}
            />
          </button>

          <a
            href='#contact'
            className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 text-teal-500 dark:border-white/50'
          >
            Contact
            <Image
              src={isDarkMode ? '/arrow-icon-dark.png' : '/arrow-icon.png'}
              alt='Arrow'
              className='w-3 ml-2'
              width={12}
              height={12}
            />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image
              src={isDarkMode ? '/menu-white.png' : '/menu-black.png'}
              alt='Menu'
              className='w-6'
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'
        >
          {/* Close Menu Button */}
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image
              src={isDarkMode ? '/close-white.png' : '/close-black.png'}
              alt='Close Menu'
              className='w-5 cursor-pointer'
              width={20}
              height={20}
            />
          </div>

          {/* Mobile Menu Links */}
          <li>
            <a
              href='#top'
              className='font-Ovo flex items-center gap-3 hover:text-teal-500'
              onClick={closeMenu}
            >
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='font-Ovo flex items-center gap-3 hover:text-teal-500'
              onClick={closeMenu}
            >
              <FaUser /> About Me
            </a>
          </li>
          <li>
            <a
              href='#services'
              className='font-Ovo flex items-center gap-3 hover:text-teal-500'
              onClick={closeMenu}
            >
              <FaTools /> Services
            </a>
          </li>
          <li>
            <a
              href='#work'
              className='font-Ovo flex items-center gap-3 hover:text-teal-500'
              onClick={closeMenu}
            >
              <FaBriefcase /> My Work
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='font-Ovo flex items-center gap-3 hover:text-teal-500'
              onClick={closeMenu}
            >
              <FaEnvelope /> Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
