import { SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";

export interface LinkCtaBtnProp {
  children: ReactNode;
  link: string;
  extraStyles?: SerializedStyles;
}
