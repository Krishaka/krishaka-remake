import CompWrapper from "@/components/comp-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import {
  canvasContainerCss,
  canvasWrapperCss,
  featuredProductHeadingCss
} from "@/modules/home-page/home-banner/home-canvas/styles";
import ThreeJsCanvas from "@/modules/home-page/home-banner/home-canvas/three-js-canvas";
import { commonHeaderCss } from "@/styles/common-styles";

export default function HomeCanvas() {
  return (
    <div css={canvasWrapperCss}>
      <CompWrapper tag="div" wrapperClassName="eg-sec-1 eg-sec">
        <div css={featuredProductHeadingCss}>
          <h3 css={commonHeaderCss("var(--color-font-default)")}>Featured Product</h3>
          <h2 className="featured-product-name">Product Name</h2>
        </div>
      </CompWrapper>
      <CompWrapper tag="div">
        <div className="eg-sec-2 eg-sec"></div>
        <div className="eg-sec-3 eg-sec"></div>
        <div className="eg-sec-4 eg-sec">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam deleniti ipsa quisquam exercitationem
            ducimus ex! Expedita quas modi, aspernatur a alias nesciunt maiores facere similique ex doloribus aliquid
            voluptatem in?
          </p>
          <LinkCtaBtn link="product-one">View Product</LinkCtaBtn>
        </div>
      </CompWrapper>
      <div css={canvasContainerCss}>
        <ThreeJsCanvas />
      </div>
    </div>
  );
}
