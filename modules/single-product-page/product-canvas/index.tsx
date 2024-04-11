import { canvasCss } from "@/modules/home-page/home-featured-product/home-canvas/styles";
import { DepodderProduct } from "@/modules/models/depodder-product";
import Harvester from "@/modules/models/harvester";
import { PaddyTransplanter } from "@/modules/models/paddy-transplanter";
import {
  productCanvasContainerCss,
  productScrollContainerCss
} from "@/modules/single-product-page/product-canvas/styles";
import { ProductProps } from "@/modules/single-product-page/product-canvas/types";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function ProductCanvas(props: ProductProps) {
  const { productName } = props;
  const [product, setProduct] = useState("");

  useEffect(() => {
    setProduct(productName);
  }, [productName]);
  return (
    <div css={productScrollContainerCss}>
      <div css={productCanvasContainerCss}>
        <Canvas css={canvasCss}>
          <ambientLight intensity={1} />
          <Environment preset="city" />
          {product === "product one" && <DepodderProduct />}
          {product === "product two" && <PaddyTransplanter />}
          {product === "product three" && <Harvester />}
        </Canvas>
      </div>
    </div>
  );
}
