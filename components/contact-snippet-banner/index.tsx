import { ContactSnippetBannerCss, snippetPatternCss } from "@/components/contact-snippet-banner/styles";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";

export default function ContactSnippetBanner() {
  return (
    <div css={ContactSnippetBannerCss}>
      <p>
        Reach out for innovative farming solutions. Contact Krishaka today and join the future of sustainable
        agriculture. Lets grow together!
      </p>
      <LinkCtaBtn link="contact">Contact Us</LinkCtaBtn>
      <ImageWrapper alt="pattern" src="/images/bg-pattern.png" extraStyles={snippetPatternCss} />
    </div>
  );
}
