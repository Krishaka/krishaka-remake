import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import {
  cardPatternCss,
  productCardBtnCss,
  productCardContainerCss,
  productCardDescCss,
  productCardHeading,
  productCardImgCss,
  productCardTextWrapperCss
} from "@/components/product-card/styles";
import { ProductCardProps } from "@/components/product-card/types";

import { commonHeaderCss } from "@/styles/common-styles";

export default function ProductCard(props: ProductCardProps) {
  const { cardCtaText, cardDesc, cardHeading, imgSrc, extraStyles, name } = props;
  return (
    <div css={[productCardContainerCss, extraStyles]} className={name}>
      <ImageWrapper alt="-" src={imgSrc} extraStyles={productCardImgCss} />
      <div css={productCardTextWrapperCss}>
        <h2 css={[commonHeaderCss(), productCardHeading]}>{cardHeading}</h2>
        <p css={productCardDescCss}>{cardDesc}</p>
        <LinkCtaBtn link={`products/${cardHeading.replace(/ /g, "-")}`} extraStyles={productCardBtnCss}>
          {cardCtaText}
        </LinkCtaBtn>
      </div>
      <ImageWrapper alt="pattern" src="/images/bg-pattern.png" extraStyles={cardPatternCss} />
    </div>
  );
}
