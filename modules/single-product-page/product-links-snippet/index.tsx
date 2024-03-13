import { productList } from "@/common-data";
import ImageWrapper from "@/components/image-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import {
  productLinkSnippetCss,
  productLinksSnippetContainerCss,
  productLinksSnippetWrapperCss,
  productSnippetImgContainerCss,
  productSnippetImgCss,
  productSnippetTextWrapperCss,
  productsLinksSnippetHeaderCss
} from "@/modules/single-product-page/product-links-snippet/styles";

interface ProductLinksSnippetProps {
  pageName: string;
}

export default function ProductLinksSnippet(props: ProductLinksSnippetProps) {
  const { pageName } = props;
  const productLinkMapper = (product: (typeof productList)[0], index: number) => {
    if (product.productName != pageName) {
      return (
        <div key={index} css={productLinkSnippetCss}>
          <div css={productSnippetImgContainerCss}>
            <ImageWrapper src={product.productImg} alt={product.productName} extraStyles={productSnippetImgCss} />
          </div>
          <div className="product-snippet-info" css={productSnippetTextWrapperCss}>
            <span className="prod-snippet-generic-text">Check out</span>
            <span className="prod-snippet-product-name">{product.productName}</span>
            <LinkCtaBtn link={`products/${product.productName.replace(/ /g, "-")}`}>View Product</LinkCtaBtn>
          </div>
        </div>
      );
    }
  };
  return (
    <div css={productLinksSnippetWrapperCss}>
      <h3 css={productsLinksSnippetHeaderCss}>Other Products</h3>
      <div css={productLinksSnippetContainerCss}>{productList.map(productLinkMapper)}</div>
    </div>
  );
}
