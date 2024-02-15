import { productList } from "@/common-data";
import ProductCard from "@/components/product-card";
import { carousalContainerCss, carousalTrackCss } from "@/modules/home-page/home-carousal/carousal-comp/styles";
import { CarousalProps } from "@/modules/home-page/home-carousal/carousal-comp/types";
import { Ref, forwardRef } from "react";

export const carousalMapper = (product: (typeof productList)[0], index: number) => {
  const { productDesc, productImg, productName } = product;
  return (
    <ProductCard
      cardCtaText="View Product"
      cardDesc={productDesc}
      cardHeading={productName}
      imgSrc={productImg}
      key={`product-item-` + index}
      name={"product-item product-item-" + index}
    />
  );
};

function CC(props: CarousalProps, ref: Ref<HTMLDivElement>) {
  const { itemNum } = props;
  return (
    <div css={carousalContainerCss} ref={ref}>
      <div css={carousalTrackCss(itemNum)} className="carousal-track">
        {productList.map(carousalMapper)}
      </div>
    </div>
  );
}

const CarousalComp = forwardRef(CC);
export default CarousalComp;
