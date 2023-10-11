import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";
import { SELF_URL } from "../../constants";
import { NavbarBackgroundContext } from "../../contexts/navbar-background";
import Color from "color";

type NavLink = {
  text: string;
  link: string;
};

const navLinks: NavLink[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Berita",
    link: "/berita",
  },
  {
    text: "Profile",
    link: "/visi-misi",
  },
  {
    text: "Struktur Organisasi",
    link: "/struktur-organisasi",
  },
  {
    text: "Aduan dan Aspirasi",
    link: "/aduan-dan-aspirasi",
  },
  {
    text: "Projects",
    link: "/projects",
  },
];

export const Navbar = () => {
  const router = useRouter();
  const { navbarBackgroundColor } = useContext(NavbarBackgroundContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_mobile}>
        <div className={styles.navbar_mobile_branding}>
          <Link href="/">
            <a>
              <img
                src={`/bem-fasilkom-logo.png`}
                alt="Logo BEM Fasilkom UPN 'Veteran' Jawa Timur"
                className={styles.logo_navbar}
              />
            </a>
          </Link>
          <p
            className={styles.navbar_mobile_branding_text}
            style={{
              color: Color(navbarBackgroundColor).isDark()
                ? "white"
                : "#183149",
            }}
          >
            BEM FASILKOM UPN &quot;Veteran&quot; Jawa Timur
          </p>
        </div>

        <div>
          <img
            src={
              Color(navbarBackgroundColor).isDark()
                ? `/icons/hamburger-white.svg`
                : `/icons/hamburger.svg`
            }
            alt=""
            className={styles.navbar_mobile_hamburger}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </div>
      </div>

      <nav
        className={
          showMobileMenu
            ? styles.navbar_mobile_menu
            : styles.navbar_mobile_menu__hidden
        }
      >
        <ul>
          {navLinks.map((navLink, idx) => {
            return (
              <li
                key={idx}
                className={`${styles.navlink_mobile} ${
                  router.pathname === navLink.link
                    ? styles.navlink_mobile_active
                    : undefined
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                <Link href={navLink.link}>
                  <a>{navLink.text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.navbar_desktop}>
        <Link href="/">
          <a>
            <img
              src={`/bem-fasilkom-logo.png`}
              alt="Logo BEM Fasilkom UPN 'Veteran' Jawa Timur"
              className={styles.logo_navbar}
            />
          </a>
        </Link>

        <nav className={styles.nav_desktop_container}>
          <ul>
            {navLinks.map((navLink, idx) => {
              return (
                <li key={idx} className={styles.navlink_container}>
                  <Link href={navLink.link}>
                    <a
                      className={`${styles.navlink} ${
                        router.pathname === navLink.link
                          ? styles.navlink_active
                          : undefined
                      }`}
                      style={{
                        color: Color(navbarBackgroundColor).isDark()
                          ? "white"
                          : "#183149",
                      }}
                    >
                      {navLink.text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
