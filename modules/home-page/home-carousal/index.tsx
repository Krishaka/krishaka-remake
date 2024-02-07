import { productList } from "@/common-data";
import ProductCard from "@/modules/home-page/home-carousal/product-card";
import {
  carousalArrowCss,
  carousalContainerCss,
  carousalTrackCss,
  carousalWrapperCss,
  homeCarousalCss,
  itemCounterCss,
  numCarousalWrapperCss,
  numItemCss
} from "@/modules/home-page/home-carousal/styles";
import { commonHeaderCss } from "@/styles/common-styles";
import { useEffect, useRef } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function HomeCarousal() {
  const carousalItemNum = useRef<number>(productList.length);
  const carousalRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fontPixelWidth = useRef<number>(12.22);

  const scrollLength = useRef<number>(0);
  useEffect(() => {
    const track = trackRef.current;
    const carousal = carousalRef.current;
    scrollLength.current = (track?.scrollWidth ?? 0) / carousalItemNum.current;

    const resizeHandler = () => {
      scrollLength.current = (track?.scrollWidth ?? 0) / carousalItemNum.current;
    };

    const obvOptions: IntersectionObserverInit = {
      root: document
    };

    const leftArrow = carousal?.previousSibling;
    const rightArrow = carousal?.nextSibling;

    const obvCallback: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        const classAdder = (itemClassName: string, arrow: ChildNode | HTMLDivElement | null | undefined) => {
          if (entries[0].target.classList.contains(itemClassName)) {
            (arrow as HTMLDivElement).classList.add("arrow-inactive");
          } else {
            (arrow as HTMLDivElement).classList.remove("arrow-inactive");
          }
        };
        classAdder("product-item-0", leftArrow);
        classAdder(`product-item-${carousalItemNum.current - 1}`, rightArrow);
      }
    };

    const obv: IntersectionObserver = new IntersectionObserver(obvCallback, obvOptions);

    if (track) {
      const carousalItems = Array.from(track.querySelectorAll(".product-item"));
      for (const carousalItem of carousalItems) {
        obv.observe(carousalItem);
      }
    }
    addEventListener("resize", resizeHandler);

    return () => {
      obv.disconnect();
      removeEventListener("resize", resizeHandler);
    };
  }, []);

  const clickHandler = (num: number) => {
    return function returnHandler() {
      const carousal = carousalRef.current;
      const numberCarousal = document.querySelector(".num-carousal");
      const scrollNum = scrollLength.current ?? 0;
      if (carousal) {
        carousal.scrollTo({
          left: carousal.scrollLeft + num * scrollNum,
          behavior: "smooth"
        });
      }
      if (numberCarousal) {
        numberCarousal.scrollTo({
          left: numberCarousal.scrollLeft + num * fontPixelWidth.current,
          behavior: "smooth"
        });
      }
    };
  };

  const numberMapper = (_: unknown, index: number) => (
    <span key={index} css={numItemCss}>
      {index + 1}
    </span>
  );

  const carousalMapper = (product: (typeof productList)[0], index: number) => {
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
  return (
    <div css={homeCarousalCss}>
      <h2 css={commonHeaderCss("var(--color-text-default)")}>Our Products</h2>
      <div css={carousalWrapperCss}>
        <FaCircleChevronLeft
          css={carousalArrowCss}
          className="arrow left-arrow arrow-inactive"
          onClick={clickHandler(-1)}
        />
        <div css={carousalContainerCss} ref={carousalRef}>
          <div css={carousalTrackCss(carousalItemNum.current)} ref={trackRef}>
            {productList.map(carousalMapper)}
          </div>
        </div>
        <FaCircleChevronRight css={carousalArrowCss} className="arrow right-arrow" onClick={clickHandler(1)} />
      </div>
      <div css={itemCounterCss}>
        <div css={numCarousalWrapperCss(`${fontPixelWidth.current}px`)} className="num-carousal">
          {Array(carousalItemNum.current).fill(null).map(numberMapper)}
        </div>
        <span>/</span>
        <span>{carousalItemNum.current}</span>
      </div>
    </div>
  );
}
