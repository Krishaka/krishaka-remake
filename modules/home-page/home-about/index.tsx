import { companyName } from "@/common-data";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import {
  bgPatternCss,
  homeAboutBtnCss,
  homeAboutContainerCss,
  homeAboutDescCss,
  homeAboutImgCss,
  homeAboutTextWrapperCss,
} from "@/modules/home-page/home-about/styles";
import { commonHeaderCss } from "@/styles/common-styles";

export default function HomeAbout() {
  return (
    <div css={homeAboutContainerCss}>
      <ImageWrapper
        alt="-"
        src="/images/wallpaper.jpg"
        extraStyles={homeAboutImgCss}
      />
      <div css={homeAboutTextWrapperCss}>
        <h2 css={commonHeaderCss()}>About {companyName}</h2>
        <p css={homeAboutDescCss}>
          Krishaka is transforming small-scale farming with affordable,
          energy-efficient solutions. We create innovative tools like automated
          paddy transplanters and groundnut harvesters, utilizing advanced
          technologies such as Ultra-Wideband (UWB) for precise localization and
          cameras for accurate perception. Our mission is to address challenges
          like labor shortages and rising costs, making modern agricultural
          technology accessible to small-scale farmers. By enhancing
          productivity and sustainability, Krishaka is committed to improving
          the livelihoods of farmers and securing the future of agriculture.
        </p>
        <LinkCtaBtn link="about" extraStyles={homeAboutBtnCss}>
          About Us
        </LinkCtaBtn>
      </div>
      <ImageWrapper
        alt="pattern"
        src="/images/bg-pattern.png"
        extraStyles={bgPatternCss}
      />
    </div>
  );
}
