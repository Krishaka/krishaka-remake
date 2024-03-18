import ImageWrapper from "@/components/image-wrapper";
import {
  featureDescCss,
  featureImgCss,
  featureItemCss,
  featureTitleCss,
  featuresContainerCss,
  featuresWrapperCss
} from "@/modules/single-product-page/product-features/styles";
import { commonHeaderCss } from "@/styles/common-styles";

export default function ProductFeatures() {
  const featuresMapper = (_: unknown, index: number) => {
    return (
      <div key={index} css={featureItemCss}>
        <h3 css={featureTitleCss}>Feature Name</h3>
        <ImageWrapper alt="-" src="/images/tool.png" extraStyles={featureImgCss} />
        <p css={featureDescCss}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo perspiciatis mollitia expedita! Sapiente est
          explicabo corporis dolorum nam non excepturi.
        </p>
      </div>
    );
  };
  return (
    <div css={featuresWrapperCss}>
      <h2 css={commonHeaderCss("var(--color-bg-secondary)")}>Product Features</h2>
      <div css={featuresContainerCss}>{Array(4).fill({}).map(featuresMapper)}</div>
    </div>
  );
}
