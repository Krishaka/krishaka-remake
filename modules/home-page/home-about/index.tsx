import { companyName } from "@/common-data";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import {
  homeAboutBtnCss,
  homeAboutContainerCss,
  homeAboutDescCss,
  homeAboutImgCss,
  homeAboutTextWrapperCss
} from "@/modules/home-page/home-about/styles";
import { commonHeaderCss } from "@/styles/common-styles";

export default function HomeAbout() {
  return (
    <div css={homeAboutContainerCss}>
      <ImageWrapper alt="-" src="/images/wallpaper.jpg" extraStyles={homeAboutImgCss} />
      <div css={homeAboutTextWrapperCss}>
        <h2 css={commonHeaderCss()}>About {companyName}</h2>
        <p css={homeAboutDescCss}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, iste!</p>
        <LinkCtaBtn link="about" extraStyles={homeAboutBtnCss}>
          About Us
        </LinkCtaBtn>
      </div>
    </div>
  );
}
