import { companyName } from "@/common-data";
import CompWrapper from "@/components/comp-wrapper";
import FooterCompanyInfo from "@/modules/footer/footer-company-info";
import FooterContactInfo from "@/modules/footer/footer-contact-info";
import FooterProductsList from "@/modules/footer/footer-site-links/footer-product-links";
import FooterSitemap from "@/modules/footer/footer-site-links/footer-sitemap";
import { footerHighlightTextCss, footerLinksContainerCss, footerWrapperCss } from "@/modules/footer/styles";

export default function Footer() {
  return (
    <CompWrapper tag="footer" wrapperStyles={footerWrapperCss}>
      <div css={footerLinksContainerCss}>
        <FooterCompanyInfo />
        <FooterProductsList />
        <FooterSitemap />
        <FooterContactInfo />
      </div>
      <h2 css={footerHighlightTextCss}>{companyName}</h2>
    </CompWrapper>
  );
}
