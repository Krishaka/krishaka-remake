import ThreeJsCanvas from "@/modules/home-page/home-canvas/three-js-canvas";
import { canvasContainerCss, canvasWrapperCss } from "@/modules/single-product-page/3d-model-wrapper/styles";

export default function HomeCanvas() {
  return (
    <div css={canvasWrapperCss}>
      <div className="eg-sec-1 eg-sec">1</div>
      <div className="eg-sec-2 eg-sec">2</div>
      <div className="eg-sec-3 eg-sec">3</div>
      <div className="eg-sec-4 eg-sec">4</div>
      <div className="eg-sec-5 eg-sec">5</div>
      <div className="eg-sec-6 eg-sec">6</div>
      <div css={canvasContainerCss}>
        <ThreeJsCanvas />
      </div>
    </div>
  );
}
