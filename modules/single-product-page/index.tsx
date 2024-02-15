import CompWrapper from "@/components/comp-wrapper";
import Model from "@/modules/single-product-page/3d-model-wrapper";
import { commonHeaderCss, commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function SingleProductPageModule() {
  return (
    <CompWrapper
      tag="div"
      page="Product"
      wrapperClassName="page"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={commonPageContainerCss}
    >
      <h1 css={commonHeaderCss()}>Product Name</h1>
      <Model />
    </CompWrapper>
  );
}
