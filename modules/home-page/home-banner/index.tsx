import { companyName, companyBrief } from "@/common-data";
import CompWrapper from "@/components/comp-wrapper";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import {
  bannerCtaBtnCss,
  bannerCtaContainerCss,
  bannerHeaderCss,
  bannerProductsImgCss,
  homeBannerBriefCss,
  homeBannerWrapperCss,
  homeBannerImgCss,
  mainCss,
  homeBannerContainerCss
} from "@/modules/home-page/home-banner/styles";

export default function HomePageBanner() {
  return (
    <CompWrapper tag="div" wrapperStyles={homeBannerWrapperCss} innerElemExtraStyles={homeBannerContainerCss}>
      <ImageWrapper alt="home" src="/images/wallpaper.jpg" extraStyles={homeBannerImgCss}></ImageWrapper>
      <main css={mainCss}>
        <h1 css={bannerHeaderCss}>{companyName}</h1>
        <h2 css={homeBannerBriefCss}>{companyBrief}</h2>
        <div css={bannerCtaContainerCss}>
          <span className="cta-info">Check out our latest products</span>
          <LinkCtaBtn link="products" extraStyles={bannerCtaBtnCss}>
            Our Products
          </LinkCtaBtn>
        </div>
      </main>
      <ImageWrapper alt="-" src="/images/hero.png" extraStyles={bannerProductsImgCss} />
    </CompWrapper>
  );
}
