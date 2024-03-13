import CompWrapper from "@/components/comp-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import HomeCanvas from "@/modules/home-page/home-featured-product/home-canvas";
import {
  canvasContainerCss,
  canvasWrapperCss,
  featuredProductHeadingCss
} from "@/modules/home-page/home-featured-product/styles";
import { commonHeaderCss } from "@/styles/common-styles";

export default function HomeFeaturedProduct() {
  return (
    <div css={canvasWrapperCss}>
      <CompWrapper tag="div" wrapperClassName="home-canvas-section-1" innerElemExtraStyles={featuredProductHeadingCss}>
        <h3 css={commonHeaderCss("var(--color-font-default)")}>Featured Product</h3>
        <h2 className="featured-product-name">Product Name</h2>
      </CompWrapper>
      <CompWrapper tag="div">
        <div className="home-canvas-section-2"></div>
        <div className="home-canvas-section-3"></div>
        <div className="home-canvas-section-4"></div>
        <div className="home-canvas-section-5">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam deleniti ipsa quisquam exercitationem
            ducimus ex! Expedita quas modi, aspernatur a alias nesciunt maiores facere similique ex doloribus aliquid
            voluptatem in?
          </p>
          <LinkCtaBtn link="products/product-one">View Product</LinkCtaBtn>
        </div>
      </CompWrapper>
      <div css={canvasContainerCss}>
        <HomeCanvas />
      </div>
    </div>
  );
}
