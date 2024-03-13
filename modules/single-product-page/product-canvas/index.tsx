import { canvasCss } from "@/modules/home-page/home-featured-product/home-canvas/styles";
import { DepodderProduct } from "@/modules/models/depodder-product";
import {
  productCanvasContainerCss,
  productCanvasSectionContainerCss
} from "@/modules/single-product-page/product-canvas/styles";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function ProductCanvas() {
  return (
    <div>
      <div css={productCanvasContainerCss}>
        <Canvas css={canvasCss}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Environment preset="city" />
          </Suspense>
          <DepodderProduct />
        </Canvas>
      </div>
      <div css={productCanvasSectionContainerCss}>
        <div className="product-canvas-section-big"></div>
        <div className="product-canvas-section-small"></div>
      </div>
    </div>
  );
}
