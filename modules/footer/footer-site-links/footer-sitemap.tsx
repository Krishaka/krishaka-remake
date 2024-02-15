import { navList } from "@/common-data";
import { footerListLinkCss, footerListWrapperCss } from "@/modules/footer/footer-site-links/styles";
import { footerColHeaderCss } from "@/modules/footer/styles";
import Link from "next/link";

export default function FooterSitemap() {
  const navListMapper = (navItem: (typeof navList)[0], index: number) => {
    const { link, navItemName } = navItem;
    return (
      <Link href={link} key={`nav-item-${index}`} css={footerListLinkCss}>
        {navItemName}
      </Link>
    );
  };

  return (
    <div className="footer-grid-col">
      <h3 css={footerColHeaderCss}>Sitemap</h3>
      <nav css={footerListWrapperCss}>{navList.map(navListMapper)}</nav>
    </div>
  );
}
