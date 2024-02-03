import { navList } from "@/common-data";
import { hamburgerCss, headerCss, headerWrapperCss, navCss, navItemCss } from "@/modules/header/styles";
import Link from "next/link";
import CompWrapper from "@/components/comp-wrapper";
import { useEffect, useRef } from "react";
import Logo from "@/components/logo";
import { SerializedStyles } from "@emotion/react";

export const navListMapper = (navItem: (typeof navList)[0], index: number, linkCss: SerializedStyles) => {
  const { link, navItemName } = navItem;
  return (
    <Link href={link} key={`nav-item-${index}`} css={linkCss}>
      {navItemName}
    </Link>
  );
};

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const scrollCallback = () => {
      if (header && scrollY > 100) {
        header.classList.add("header-active");
      } else {
        header?.classList.remove("header-active");
      }
    };
    window.addEventListener("scroll", scrollCallback);
  }, []);

  const clickHandler = () => {
    const hamburger = hamburgerRef.current;
    const nav = navRef.current;
    if (nav && hamburger) {
      nav.classList.toggle("nav-active");
      hamburger.classList.toggle("hamburger-active");
    }
  };
  return (
    <CompWrapper tag="header" innerElemExtraStyles={headerCss} wrapperStyles={headerWrapperCss} ref={headerRef}>
      <Logo height="75%" />
      <div css={hamburgerCss} onClick={clickHandler} ref={hamburgerRef}>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
      <nav css={navCss} ref={navRef}>
        {navList.map((navItem, index: number) => navListMapper(navItem, index, navItemCss))}
      </nav>
    </CompWrapper>
  );
}
