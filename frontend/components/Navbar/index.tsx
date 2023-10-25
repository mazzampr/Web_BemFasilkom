import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import styles from "./styles.module.scss";
import ButtonOutline from "../Assets/ButtonOutline";
import Headroom from 'react-headroom'
import Hamburger from "../Assets/Hamburger";
import { useSelector, useDispatch } from 'react-redux'
import { navbarSlice, setStateNavbar } from '../../store/hamburgerSlices'
import { setStateLink } from '../../store/linkDetectSlices'
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
      },
      {
        text: 'Tentang Kami',
        link: 'tentang-kami'
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
  {
    text: "Projects",
    link: "/projects",
  },
];

interface navbarSliceType{
  navbarSlice:{
    value:boolean
  }
}
interface linkClickedSliceType{
  linkClickedSlice:{
    value:string
  }
}
export const Navbar = () => {
  const dispatch = useDispatch()
  const navbarShow = useSelector((state:navbarSliceType) => state.navbarSlice.value)
  const linkClicked = useSelector((state:linkClickedSliceType) => state.linkClickedSlice.value)
  console.log(linkClicked)

  const [scrollY, setScrollY] = useState(0);
  const [submenuVisible, setSubmenuVisible] = useState(new Array(navLinks.length).fill(false));

  const toggleSubmenu = (index:number) => {
    // Toggle the submenu visibility for the specified index
    const updatedSubmenuVisible = [...submenuVisible];
    updatedSubmenuVisible[index] = !updatedSubmenuVisible[index];
    setSubmenuVisible(updatedSubmenuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    console.log(scrollY)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleClickedNavbar=(link:string)=>{
    dispatch(setStateNavbar())
    dispatch(setStateLink({link}))
  }
  return (
    <Headroom className="fixed z-[99] " style={{
      transition: 'all 1s ease-in-out'
    }}>
      <header className={`flex items-center justify-between lg:justify-evenly w-[100vw] ${scrollY>0?'bg-[#FFD7B7]':'bg-transparent'} h-[13vh]`}  style={{
      transition: 'all 1s ease-in-out'
    }}  >
          <section className='flex w-[60%] lg:w-[20%]'>
              <Link href="/">
                  <a onClick={()=>dispatch(setStateLink({link:'Home'}))} className="flex items-center ">
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
          <nav className={`bg-white lg:bg-transparent justify-evenly text-2xl px-5 lg:px-0 lg:text-base w-screen absolute ${navbarShow ?'top-[13vh]':'-top-[100vh]'} duration-500 -ml-2 md:w-full lg:ml-0 lg:static flex flex-col gap-1 lg:flex-row lg:w-[70%] h-screen z-100 lg:z-0 max-h-screen lg:max-h-none lg:h-fit box-content mx-5`}>
            <section className="flex flex-col lg:flex-row justify-around w-fit max-h-[80%] lg:max-h-none lg:w-[70%] h-[60%] lg:h-fit ">
              {navLinks.map((menu:any,i:number) => menu.links? (
                <section key={`menu-${i}`} className="group relative z-[100] cursor-pointer box-border h-fit" onClick={() => toggleSubmenu(i)} >
                  <div className="group-hover:border-b-2 border-b-black flex justify-between w-fit lg:px-3">
                      <p className={`${linkClicked===menu.text?'text-typedBlue font-bold':'text-black'}`}>{menu.text}</p>
                      <Image className='group-hover:rotate-180 transition-transform duration-400' src={'/icons/caret.svg'} width={10} height={10} alt="Profile"></Image>
                  </div>
                  <ul className={`mt-2 lg:mt-0 ${submenuVisible[i] ? "block" : "hidden"} lg:block lg:absolute group lg:invisible lg:group-hover:visible w-[200px] lg:shadow lg:shadow-slate-400 bg-white  overflow-y-auto  min-h-[fit] max-h-[6rem] rounded-md`}>
                  {menu.links.map((subMenu:NavLink,subIndex:number)=>(
                    <li key={`submenu-${subIndex}`} className="lg:invisible lg:group-hover:visible w-full flex flex-col gap-3 lg:gap-0">
                      <Link href={subMenu.link}>
                        <a onClick={()=>handleClickedNavbar(menu.text)} className={`px-[.5rem] py-1 block lg:text-center h-full hover:bg-tangerine hover:text-typedBlue text-base lg:text-sm font-medium `}>{subMenu.text}</a>
                      </Link>
                    </li >
                      ))}
                  </ul>
                
                </section>
              )
              :(
                <section key={`menu-${i}`}>
                  <Link href={menu.link}><a onClick={()=>handleClickedNavbar(menu.text)} className={`${linkClicked===menu.text?'text-typedBlue font-bold':'text-black'} hover:border-b-2 border-b-black w-fit`}>{menu.text}</a></Link>
                </section>
              ))}
            </section>
            <ButtonOutline content={'Event'} width={'6.3rem'}/>
          </nav>
          <section className="w-[20%] lg:hidden flex justify-center md:pr-8 md:justify-end ">
            <Hamburger />
          </section>
      </header>
    </Headroom>
  );
};

