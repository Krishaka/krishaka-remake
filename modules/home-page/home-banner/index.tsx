import { companyName, companyBrief } from "@/common-data";
import CompWrapper from "@/components/comp-wrapper";
import ImageWrapper from "@/components/image-wrapper";
import {
  bannerCtaContainerCss,
  bannerHeaderCss,
  bannerProductsImgCss,
  homeBannerBriefCss,
  homeBannerWrapperCss,
  homeBannerImgCss,
  mainCss,
  homeBannerContainerCss,
  spanContainerStyle,
  spanStyle
} from "@/modules/home-page/home-banner/styles";

export default function HomePageBanner() {
  const words = ["Agriculture", "Automation", "Efficiency", "Future"];

  return (
    <CompWrapper tag="div" wrapperStyles={homeBannerWrapperCss} innerElemExtraStyles={homeBannerContainerCss}>
      <ImageWrapper alt="home" src="/images/wallpaper.jpg" extraStyles={homeBannerImgCss}></ImageWrapper>
      <main css={mainCss}>
        <h1 css={bannerHeaderCss}>{companyName}</h1>
        <h2 css={homeBannerBriefCss}>{companyBrief}</h2>
        <div css={bannerCtaContainerCss}>
          <span className="cta-info">We pride ourselves in</span>
          <div css={spanContainerStyle}>
            {words.map((word: string, index: number) => {
              return (
                <span key={index} css={spanStyle}>
                  {word}
                </span>
              );
            })}
            <span css={spanStyle}>{words[0]}</span>
          </div>
        </div>
      </main>
      <ImageWrapper alt="-" src="/images/hero.png" extraStyles={bannerProductsImgCss} />
    </CompWrapper>
  );
}
