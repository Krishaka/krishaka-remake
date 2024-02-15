import {
  itemCounterCss,
  numCarousalWrapperCss,
  numItemCss
} from "@/modules/home-page/home-carousal/carousal-counter/styles";
import { CarousalCounterProps } from "@/modules/home-page/home-carousal/carousal-counter/types";
import { useRef } from "react";

export default function CarousalCounter(props: CarousalCounterProps) {
  const { fontSize, itemNum } = props;
  const numberMapper = (_: unknown, index: number) => (
    <span key={index} css={numItemCss}>
      {index + 1}
    </span>
  );

  return (
    <div css={itemCounterCss}>
      <div css={numCarousalWrapperCss(`${fontSize}px`)} className="num-carousal">
        {Array(itemNum).fill(null).map(numberMapper)}
      </div>
      <span>/</span>
      <span>{itemNum}</span>
    </div>
  );
}
