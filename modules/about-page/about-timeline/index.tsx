import {
  tlCheckpointCss,
  tlGraphWrapperCss,
  tlInfoWrapperCss,
  tlItemCss,
  tlItemDateCss,
  tlItemDescCss,
  tlItemTitleCss,
  tlWrapperCss,
} from "@/modules/about-page/about-timeline/styles";
import { commonHeaderCss } from "@/styles/common-styles";
import { useEffect, useRef } from "react";
import {AboutTimelineData} from '@/common-data';

export default function AboutTimeline() {
  const tlContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = tlContainerRef.current;
    const tlItems = Array.from(tl?.children ?? []);

    const obvOptions: IntersectionObserverInit = {
      root: document,
      threshold: 0.9,
    };

    const obvCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        const { boundingClientRect, target } = entry;
        const { top, height } = boundingClientRect;
        const checkpoint = target.previousSibling;
        if (top >= innerHeight - height) {
          target?.classList.remove("item-active");
          (checkpoint as HTMLSpanElement).classList.remove("checkpoint-active");
        }
        if (entry.isIntersecting) {
          target.classList.add("item-active");
          (checkpoint as HTMLSpanElement).classList.add("checkpoint-active");
        }
      }
    };

    const tlObv = new IntersectionObserver(obvCallback, obvOptions);
    for (const item of tlItems) {
      const tlInfo = item.querySelector(".tl-info");
      if (tlInfo) {
        tlObv.observe(tlInfo);
      }
    }
    return () => {
      tlObv.disconnect();
    };
  }, []);
  const tlMapper = (_: unknown, index: number) => {
    let temp = AboutTimelineData[index];
    return (
      <div className="tl-item" key={index} css={tlItemCss}>
        <span css={tlCheckpointCss}></span>
        <div className="tl-info" css={tlInfoWrapperCss}>
          <h3 className="tl-item-title" css={tlItemTitleCss}>
            {temp.title}
          </h3>
          <span className="tll-item-date" css={tlItemDateCss}>
            {temp.date}
          </span>
          <p className="tl-item-desc" css={tlItemDescCss}>
            {temp.description}
          </p>
        </div>
      </div>
    );
  };
  console.log(AboutTimelineData);
  return (
    <div css={tlWrapperCss}>
      <h2 css={commonHeaderCss("var(--color-bg-secondary)")}>Timeline</h2>
      <div css={tlGraphWrapperCss} ref={tlContainerRef}>
        {Array(AboutTimelineData.length).fill({}).map(tlMapper)}
      </div>
    </div>
  );
}
