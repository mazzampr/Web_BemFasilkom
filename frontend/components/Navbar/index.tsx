import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image'
import styles from "./styles.module.scss";
import { SELF_URL } from "../../constants";
import { NavbarBackgroundContext } from "../../contexts/navbar-background";
import Color from "color";
import ButtonOutline from "../Assets/ButtonOutline";

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

  const [scrollY, setScrollY] = useState(0);

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

  
  return (
    <header className={`fixed z-[99] flex items-center justify-around w-[100vw] h-[13vh] ${scrollY>40?'bg-[#FFD7B7]':'bg-transparent'}`}>
        <section className=''>
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
                    <h5 className=" font-semibold text-sm tracking-wide">BEM FASILKOM 2023</h5>
                    <span className=" font-extralight text-xs tracking-wide">{'UPN "VETERAN" Jawa Timur'}</span>
                  </div>
                </a>
            </Link>
        </section>
        <nav className='flex justify-between text-sm md:w-[50%] lg:w-[38%] h-[1.5rem] box-content mx-5 '>
          {navLinks.map((menu,i) => menu.links? (
            <section className="group relative z-[100] cursor-pointer box-border h-fit">
              <div className="group-hover:border-b-2 border-b-black flex justify-between w-fit px-3">
                  <p>{menu.text}</p>
                  <Image className='group-hover:rotate-180 transition-transform duration-400' src={'/icons/caret.svg'} width={10} height={10} alt="Profile"></Image>
              </div>
              <ul className="absolute group invisible group-hover:visible group-focus:visible w-[200px] shadow shadow-slate-400 bg-white  overflow-y-auto  min-h-[fit] max-h-[6rem] rounded-md" key={i}>
                <li className="invisible group-hover:visible w-full ">
              {menu.links.map((subMenu,i)=>(
                <>
                  <a key={i} className='px-[.5rem] py-1 block text-center h-full hover:bg-tangerine hover:text-typedBlue text-sm font-medium' href={subMenu.link}>{subMenu.text}</a>
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
        </nav>
        <section className="w-[20%]">
          <ButtonOutline content={'Event'} width={'6.3rem'}/>
        </section>
    </header>
  );
};

