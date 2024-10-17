import ImageWrapper from "@/components/image-wrapper";
import { aboutBannerCss } from "@/modules/about-page/about-banner/styles";

export default function AboutBanner() {
  return (
    <ImageWrapper
      src="/images/home-model-bg.jpg"
      alt="about-image"
      extraStyles={aboutBannerCss}
    ></ImageWrapper>
  );
}
