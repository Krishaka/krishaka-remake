import { productList } from "@/common-data";
import CarousalComp from "@/modules/home-page/home-carousal/carousal-comp";
import CarousalCounter from "@/modules/home-page/home-carousal/carousal-counter";
import { carousalArrowCss, carousalWrapperCss, homeCarousalCss } from "@/modules/home-page/home-carousal/styles";
import { commonHeaderCss } from "@/styles/common-styles";
import { useEffect, useRef } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function HomeCarousal() {
  const carousalItemNum = useRef<number>(productList.length);
  const carousalRef = useRef<HTMLDivElement>(null);
  const fontPixelWidth = useRef<number>(12.22);
  const touchStartNum = useRef<number>(0);
  const touchEndNum = useRef<number>(0);

  const scrollLength = useRef<number>(0);
  useEffect(() => {
    const track = carousalRef.current?.querySelector(".carousal-track");
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
    const touchStartCallback = (event: TouchEvent) => {
      touchStartNum.current = event.changedTouches[0].pageX;
    };
    const touchEndCallback = (event: TouchEvent) => {
      touchEndNum.current = event.changedTouches[0].pageX;
      const touchDirection = touchStartNum.current - touchEndNum.current;
      let num = 0;
      if (touchDirection > 0) {
        num = 1;
      } else {
        num = -1;
      }
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

    const obv: IntersectionObserver = new IntersectionObserver(obvCallback, obvOptions);

    if (track) {
      const carousalItems = Array.from(track.querySelectorAll(".product-item"));
      for (const carousalItem of carousalItems) {
        obv.observe(carousalItem);
      }
    }
    carousal?.addEventListener("touchstart", touchStartCallback);
    carousal?.addEventListener("touchend", touchEndCallback);
    addEventListener("resize", resizeHandler);

    return () => {
      obv.disconnect();
      removeEventListener("resize", resizeHandler);
      carousal?.removeEventListener("touchstart", touchStartCallback);
      carousal?.removeEventListener("touchend", touchEndCallback);
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

  return (
    <div css={homeCarousalCss}>
      <h2 css={commonHeaderCss("var(--color-text-default)")}>Our Products</h2>
      <div css={carousalWrapperCss}>
        <FaCircleChevronLeft
          css={carousalArrowCss}
          className="arrow left-arrow arrow-inactive"
          onClick={clickHandler(-1)}
        />
        <CarousalComp itemNum={carousalItemNum.current} ref={carousalRef} />
        <FaCircleChevronRight css={carousalArrowCss} className="arrow right-arrow" onClick={clickHandler(1)} />
      </div>
      <CarousalCounter fontSize={fontPixelWidth.current ?? 0} itemNum={carousalItemNum.current ?? 0} />
    </div>
  );
}
