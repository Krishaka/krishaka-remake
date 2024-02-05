import { productList } from "@/common-data";
import ProductCard from "@/modules/home-page/home-carousal/product-card";
import {
  carousalArrowCss,
  carousalContainerCss,
  carousalTrackCss,
  carousalWrapperCss,
  homeCarousalCss,
  itemCounterCss
} from "@/modules/home-page/home-carousal/styles";
import { commonHeaderCss } from "@/styles/common-styles";
import { useEffect, useRef, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function HomeCarousal() {
  const carousalItemNum = useRef<number>(productList.length);
  const carousalRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemNum, setItemNum] = useState<number>(1);

  const scrollLength = useRef<number>(0);
  useEffect(() => {
    const track = trackRef.current;
    scrollLength.current = (track?.scrollWidth ?? 0) / carousalItemNum.current;
    const resizeHandler = () => {
      scrollLength.current = (track?.scrollWidth ?? 0) / carousalItemNum.current;
    };
    addEventListener("resize", resizeHandler);

    return () => removeEventListener("resize", resizeHandler);
  }, [itemNum]);

  const clickHandler = (num: number) => {
    return function returnHandler() {
      const carousal = carousalRef.current;
      const scrollNum = scrollLength.current ?? 0;
      if (carousal) {
        setItemNum(itemNum + num * 1);
        carousal.scrollTo({
          left: carousal.scrollLeft + num * scrollNum,
          behavior: "smooth"
        });
      }
    };
  };
  const carousalMapper = (product: (typeof productList)[0], index: number) => {
    const { productDesc, productImg, productName } = product;
    return (
      <ProductCard
        cardCtaText="View Product"
        cardDesc={productDesc}
        cardHeading={productName}
        imgSrc={productImg}
        key={`product-item-` + index}
        name={"product-item-" + index}
      />
    );
  };
  return (
    <div css={homeCarousalCss}>
      <h2 css={commonHeaderCss("var(--color-text-default)")}>Our Products</h2>
      <div css={carousalWrapperCss}>
        <FaCircleChevronLeft css={carousalArrowCss} className="arrow left-arrow" onClick={clickHandler(-1)} />
        <div css={carousalContainerCss} ref={carousalRef}>
          <div css={carousalTrackCss(carousalItemNum.current)} ref={trackRef}>
            {productList.map(carousalMapper)}
          </div>
        </div>
        <FaCircleChevronRight css={carousalArrowCss} className="arrow right-arrow" onClick={clickHandler(1)} />
      </div>
      <div css={itemCounterCss}>
        <span>{itemNum}</span>
        <span> / {carousalItemNum.current}</span>
      </div>
    </div>
  );
}
