import { companyName } from "@/common-data";
import { innerElemCss, outerElemCss } from "@/components/comp-wrapper/styles";
import { WrapperPropType } from "@/components/comp-wrapper/types";
import { jsx } from "@emotion/react";
import Head from "next/head";
import { Ref, forwardRef } from "react";

function CW(props: WrapperPropType, ref: Ref<HTMLDivElement>) {
  const { children, tag, innerElemExtraStyles, wrapperStyles, page, wrapperClassName } = props;

  const innerElem = jsx(tag, { css: [innerElemCss, innerElemExtraStyles] }, children);

  return (
    <div css={[outerElemCss, wrapperStyles]} ref={ref} className={wrapperClassName}>
      {page && (
        <Head>
          <title>{`${page} | ${companyName}`}</title>
        </Head>
      )}
      {innerElem}
    </div>
  );
}

const CompWrapper = forwardRef(CW);
export default CompWrapper;
