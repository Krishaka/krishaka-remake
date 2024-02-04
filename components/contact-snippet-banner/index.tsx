import { ContactSnippetBannerCss } from "@/components/contact-snippet-banner/styles";
import LinkCtaBtn from "@/components/link-cta-btn";

export default function ContactSnippetBanner() {
  return (
    <div css={ContactSnippetBannerCss}>
      <p>
        Reach out for innovative farming solutions. Contact Krishaka today and join the future of sustainable
        agriculture. Lets grow together!
      </p>
      <LinkCtaBtn link="contact">Contact Us</LinkCtaBtn>
    </div>
  );
}
