import {
  tlCheckpointCss,
  tlGraphWrapperCss,
  tlInfoWrapperCss,
  tlItemCss,
  tlItemDateCss,
  tlItemDescCss,
  tlItemTitleCss,
  tlWrapperCss
} from "@/modules/about-page/about-timeline/styles";
import { commonHeaderCss } from "@/styles/common-styles";
import { useEffect, useRef } from "react";

export default function AboutTimeline() {
  const tlContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = tlContainerRef.current;
    const tlItems = Array.from(tl?.children ?? []);

    const obvOptions: IntersectionObserverInit = {
      root: document,
      threshold: 0.9
    };

    const obvCallback: IntersectionObserverCallback = (events) => {
      for (const event of events) {
        const { target } = event;
        const checkpoint = target.previousSibling;
        if (event.isIntersecting) {
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
    return (
      <div className="tl-item" key={index} css={tlItemCss}>
        <span css={tlCheckpointCss}></span>
        <div className="tl-info" css={tlInfoWrapperCss}>
          <h3 className="tl-item-title" css={tlItemTitleCss}>
            Title
          </h3>
          <span className="tll-item-date" css={tlItemDateCss}>
            24th March, 2024
          </span>
          <p className="tl-item-desc" css={tlItemDescCss}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, nostrum est placeat voluptas et earum
            velit magnam ut harum fugiat omnis consectetur delectus vel quam, provident magni voluptatibus.
            Exercitationem hic facere consequuntur accusantium, blanditiis amet sapiente non dolorem delectus a
            reprehenderit, eaque dolore repellendus voluptas labore quae veritatis nam. Adipisci.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div css={tlWrapperCss}>
      <h2 css={commonHeaderCss("var(--color-bg-secondary)")}>Timeline</h2>
      <div css={tlGraphWrapperCss} ref={tlContainerRef}>
        {Array(5).fill({}).map(tlMapper)}
      </div>
    </div>
  );
}
