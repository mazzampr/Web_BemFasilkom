import React, { useContext, useState, useEffect,useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image'
import styles from "./styles.module.scss";
import { SELF_URL } from "../../constants";
import { NavbarBackgroundContext } from "../../contexts/navbar-background";
import Color from "color";
import ButtonOutline from "../Assets/ButtonOutline";
import Headroom from 'react-headroom'
import Hamburger from "../Assets/Hamburger";
interface NavLink {
  text: string;
  link: string;
};

interface profileLinks {
  text:string;
  links:{
    text:string;
    link:string;
  }[];
}

const navLinks: (NavLink | profileLinks)[] = [
  {
    text: "Profile",
    links:[
      {
        text: "Struktur Organisasi",
        link: "/struktur-organisasi",
      },
      {
        text: 'Kabinet',
        link: '/kabinet'
      }
    ],
  },
  {
    text: "Fasilkom News",
    link: "/berita",
  },
  {
    text: "Our Services",
    links: [
      {
        text:'Aduan dan Aspirasi',
        link:'/aduan-dan-aspirasi'
      },
      {
        text:'Bisnis Mitra',
        link:'/bisnis-mitra'
      }
    ],
  },
];

export const Navbar = () => {
  const router = useRouter();
  const { navbarBackgroundColor } = useContext(NavbarBackgroundContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const refCheckbox = useRef(null)
  const refHamSvg = useRef(null)
  const refXmark = useRef(null)
  const refDiv = useRef(null)

  const [scrollY, setScrollY] = useState(0);
  const [showNavbar,setShowNavbar] = useState(false) 
  const [submenuVisible, setSubmenuVisible] = useState(new Array(navLinks.length).fill(false));

  
  const toggleSubmenu = (index) => {
    // Toggle the submenu visibility for the specified index
    const updatedSubmenuVisible = [...submenuVisible];
    updatedSubmenuVisible[index] = !updatedSubmenuVisible[index];
    setSubmenuVisible(updatedSubmenuVisible);
  };

  const checkHandler=()=>{
    const updatedShowNavbar= !showNavbar
    setShowNavbar(updatedShowNavbar)
    if(refCheckbox.current.checked){
        refHamSvg.current.style.display='none'
        refXmark.current.style.display='flex'
        refDiv.current.style.backgroundColor='rgb(148 163 184)'
    }
    else{
        refHamSvg.current.style.display='flex'
        refXmark.current.style.display='none'
        refDiv.current.style.backgroundColor='transparent'
        

    }
}

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    console.log(scrollY)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(showNavbar)
  
  return (
    <Headroom className="fixed z-[99] " style={{
      transition: 'all 1s ease-in-out'
    }}>
      <header className={`flex items-center justify-between lg:justify-evenly w-[100vw] ${scrollY>0?'bg-[#FFD7B7]':'bg-transparent'} h-[13vh]`}  style={{
      transition: 'all 1s ease-in-out'
    }}  >
          <section className='flex w-[60%] lg:w-[20%]'>
              <Link href="/">
                  <a className="flex items-center ">
                    <Image
                        src={`/logo/kabinetArial.svg`}
                        alt="Logo BEM Fasilkom UPN 'Veteran' Jawa Timur"
                        className={styles.logo_navbar}
                        width={50}
                        height={40}
                    />
                    <div className="text-left flex flex-col justify-center">
                      <h5 className=" font-semibold text-xs sm:text-sm tracking-wide">BEM FASILKOM 2023</h5>
                      <span className=" font-extralight text-xs tracking-wide">{'UPN "VETERAN" Jawa Timur'}</span>
                    </div>
                  </a>
              </Link>
          </section>
          <nav className={`bg-white lg:bg-transparent justify-evenly text-2xl px-5 lg:px-0 lg:text-base w-screen absolute ${showNavbar ?'top-[13vh]':'-top-[100vh]'} -ml-2 md:w-[50%] lg:ml-0 lg:static flex flex-col gap-1 lg:flex-row lg:w-[70%] h-[87vh] max-h-screen lg:max-h-none lg:h-fit box-content mx-5`}>
            <section className="flex flex-col lg:flex-row justify-around w-fit max-h-[80%] lg:max-h-none lg:w-[70%] h-[60%] lg:h-fit ">
              {navLinks.map((menu,i) => menu.links? (
                <section className="group relative z-[100] cursor-pointer box-border h-fit" onClick={() => toggleSubmenu(i)}>
                  <div className="group-hover:border-b-2 border-b-black flex justify-between w-fit lg:px-3">
                      <p>{menu.text}</p>
                      <Image className='group-hover:rotate-180 transition-transform duration-400' src={'/icons/caret.svg'} width={10} height={10} alt="Profile"></Image>
                  </div>
                  <ul className={`mt-2 lg:mt-0 ${submenuVisible[i] ? "block" : "hidden"} lg:absolute group lg:invisible lg:group-hover:visible w-[200px] lg:shadow lg:shadow-slate-400 bg-white  overflow-y-auto  min-h-[fit] max-h-[6rem] rounded-md`} key={i}>
                    <li className="lg:invisible lg:group-hover:visible w-full ">
                  {menu.links.map((subMenu,i)=>(
                    <>
                      <a key={i} className='px-[.5rem] py-1 block lg:text-center h-full hover:bg-tangerine hover:text-typedBlue text-base lg:text-sm font-medium' href={subMenu.link}>{subMenu.text}</a>
                    </>
                      ))}
                      </li >
                  </ul>
                
                </section>
              )
              :(
                <section key={i}>
                  <Link href={menu.link} className='flex justify-center mx-3'><a className="text-black hover:border-b-2 border-b-black w-fit">{menu.text}</a></Link>
                </section>
              ))}
            </section>
            <ButtonOutline content={'Event'} width={'6.3rem'}/>
          </nav>
          <section className="w-[20%] lg:hidden flex justify-center ">
            <section ref={refDiv} className='relative box-border rounded-md hover:bg-slate-400 '>
              <input ref={refCheckbox} onChange={checkHandler} className='absolute  w-full h-full opacity-0 pointer-events-auto' type="checkbox"/>
                <div className='cursor-pointer flex w-fit h-full  lg:hidden rounded-md p-1'>
                  <div className='w-full h-full'>
                      <svg ref={refHamSvg} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
                      <svg ref={refXmark} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" className="svg-inline--fa fa-xmark h-6 w-6 hidden" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
                  </div>
                </div>
            </section>
          </section>
      </header>
    </Headroom>
  );
};

