import { innerElemCss, outerElemCss } from "@/components/comp-wrapper/styles";
import { WrapperPropType } from "@/components/comp-wrapper/types";
import { jsx } from "@emotion/react";
import { Ref, forwardRef } from "react";

function CompWrapper(props: WrapperPropType, ref: Ref<HTMLDivElement>) {
  const { children, tag, innerElemExtraStyles, wrapperStyles } = props;

  const innerElem = jsx(tag, { css: [innerElemCss, innerElemExtraStyles] }, children);

  return (
    <div css={[outerElemCss, wrapperStyles]} ref={ref}>
      {innerElem}
    </div>
  );
}

const CW = forwardRef(CompWrapper);
export default CW;
