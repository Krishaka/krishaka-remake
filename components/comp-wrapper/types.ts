import { SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";

export interface WrapperPropType {
  tag: string;
  children: ReactNode;
  page?: string;
  wrapperStyles?: SerializedStyles;
  innerElemExtraStyles?: SerializedStyles;
}
