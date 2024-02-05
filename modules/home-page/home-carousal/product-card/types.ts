import { SerializedStyles } from "@emotion/react";

export interface ProductCardProps {
  imgSrc: string;
  cardHeading: string;
  cardDesc: string;
  cardCtaText: string;
  name: string;
  extraStyles?: SerializedStyles;
}
