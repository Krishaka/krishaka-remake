import { productList } from "@/common-data";
import CompWrapper from "@/components/comp-wrapper";
import ContactSnippetBanner from "@/components/contact-snippet-banner";
import ProductCanvas from "@/modules/single-product-page/product-canvas";
import ProductFeatures from "@/modules/single-product-page/product-features";
import { headingColorCss } from "@/modules/single-product-page/product-features/styles";
import ProductLinksSnippet from "@/modules/single-product-page/product-links-snippet";
import { productsLinksSnippetHeaderCss } from "@/modules/single-product-page/product-links-snippet/styles";
import {
  productDescContainerCss,
  productNameHeaderCss,
} from "@/modules/single-product-page/styles";
import {
  commonHeaderCss,
  commonPageContainerCss,
  commonPageWrapperCss,
} from "@/styles/common-styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingleProductModule() {
  const [pageName, setPageName] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setPageName((router.query.product as string).replace("-", " "));
    }
  }, [router.isReady, router]);
  const product = productList.find((element) => {
    return element.productName == pageName;
  });
  return (
    <CompWrapper
      tag="div"
      page="Product"
      wrapperClassName="page"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={commonPageContainerCss}
    >
      <h1
        css={[
          commonHeaderCss("var(--color-bg-secondary)"),
          productNameHeaderCss,
        ]}
      >
        {pageName}
      </h1>
      <ProductCanvas productName={pageName} />
      <ProductFeatures />
      <div css={productDescContainerCss}>
        <h3 css={[productsLinksSnippetHeaderCss, headingColorCss]}>
          About {pageName}
        </h3>
        {product && <p className="prod-page-desc">{product.productPageDesc}</p>}
      </div>
      <ProductLinksSnippet pageName={pageName} />
      <ContactSnippetBanner />
    </CompWrapper>
  );
}
