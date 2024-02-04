import { companyName, companyBrief } from "@/common-data";
import CompWrapper from "@/components/comp-wrapper";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import {
  bannerCtaContainerCss,
  bannerHeaderCss,
  bannerProductsImgCss,
  homeBannerBriefCss,
  homeBannerContainerCss,
  homeBannerCss,
  mainCss
} from "@/modules/home-page/home-banner/styles";

export default function HomePageBanner() {
  return (
    <CompWrapper tag="div" wrapperStyles={homeBannerContainerCss}>
      <ImageWrapper alt="-" src="/images/hero-products-dull.png" extraStyles={bannerProductsImgCss} />
      <ImageWrapper alt="home" src="/images/wallpaper.jpg" extraStyles={homeBannerCss}></ImageWrapper>
      <main css={mainCss}>
        <h1 css={bannerHeaderCss}>{companyName}</h1>
        <h2 css={homeBannerBriefCss}>{companyBrief}</h2>
        <div css={bannerCtaContainerCss}>
          <span className="cta-info">Check out our latest products</span>
          <LinkCtaBtn link="products">Our Products</LinkCtaBtn>
        </div>
      </main>
    </CompWrapper>
  );
}
