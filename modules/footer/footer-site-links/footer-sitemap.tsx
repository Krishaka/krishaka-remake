import { navList } from "@/common-data";
import { footerListLinkCss, footerListWrapperCss } from "@/modules/footer/footer-site-links/styles";
import { footerColHeaderCss } from "@/modules/footer/styles";
import { navListMapper } from "@/modules/header";

export default function FooterSitemap() {
  const modifiedNavList = navList.slice(0, 2).concat(navList.slice(3));

  return (
    <div className="footer-grid-col">
      <h3 css={footerColHeaderCss}>Sitemap</h3>
      <nav css={footerListWrapperCss}>
        {modifiedNavList.map((navItem, index: number) => navListMapper(navItem, index, footerListLinkCss))}
      </nav>
    </div>
  );
}
