import { contactPageBannerCss } from "@/components/contact-page-banner/styles";
import LinkCtaBtn from "@/components/link-cta-btn";

export default function ContactPageBanner() {
  return (
    <div css={contactPageBannerCss}>
      <p>
        Reach out for innovative farming solutions. Contact Krishaka today and join the future of sustainable
        agriculture. Lets grow together!
      </p>
      <LinkCtaBtn>Contact Us</LinkCtaBtn>
    </div>
  );
}
