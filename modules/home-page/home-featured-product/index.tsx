import CompWrapper from "@/components/comp-wrapper";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import HomeCanvas from "@/modules/home-page/home-featured-product/home-canvas";
import {
  canvasContainerCss,
  canvasWrapperCss,
  featureProdHeadingCss,
  featuredProdDescContainerCss,
  featuredProdNameCss
} from "@/modules/home-page/home-featured-product/styles";
import { commonHeaderCss } from "@/styles/common-styles";

export default function HomeFeaturedProduct() {
  return (
    <>
      <div css={canvasWrapperCss}>
        <CompWrapper tag="div">
          <div css={featureProdHeadingCss}>
            <h3 css={commonHeaderCss("var(--color-font-default)")}>Featured Product</h3>
            <h2 css={featuredProdNameCss}>Product Name</h2>
          </div>
        </CompWrapper>
        <div css={canvasContainerCss}>
          <HomeCanvas />
        </div>
      </div>
      <CompWrapper tag="div" innerElemExtraStyles={featuredProdDescContainerCss}>
        <p className="feat-prod-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum autem porro quo quae rem placeat
          incidunt commodi, aspernatur vitae vel illo error voluptatum aliquid?
        </p>
        <LinkCtaBtn link="products/product-one">View Product</LinkCtaBtn>
      </CompWrapper>
    </>
  );
}
