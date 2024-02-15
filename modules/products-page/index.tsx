import { productList } from "@/common-data";
import CompWrapper from "@/components/comp-wrapper";
import { carousalMapper } from "@/modules/home-page/home-carousal/carousal-comp";
import { productsContainerCss } from "@/modules/products-page/styles";
import { commonHeaderCss, commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function ProductsPageModule() {
  return (
    <CompWrapper
      tag="div"
      page="Products"
      wrapperClassName="page"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={commonPageContainerCss}
    >
      <h1 css={commonHeaderCss()}>Our Products</h1>
      <div css={productsContainerCss}>{productList.map(carousalMapper)}</div>
    </CompWrapper>
  );
}
