import { SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";

export interface WrapperPropType {
  tag: string;
  children: ReactNode;
  isPage?: boolean;
  wrapperStyles?: SerializedStyles;
  innerElemExtraStyles?: SerializedStyles;
}
