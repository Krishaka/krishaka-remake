import { productList } from "@/common-data";
import { footerListLinkCss, footerListWrapperCss } from "@/modules/footer/footer-site-links/styles";
import { footerColHeaderCss } from "@/modules/footer/styles";
import Link from "next/link";

export default function FooterProductsList() {
  const productListMapper = (product: string, index: number) => {
    return (
      <Link href={`/products/${product.replace(/ /g, "-")}`} key={`product-item-${index}`} css={footerListLinkCss}>
        {product}
      </Link>
    );
  };
  return (
    <div className="footer-grid-col">
      <h3 css={footerColHeaderCss}>Our Products</h3>
      <nav css={footerListWrapperCss}>{productList.map(productListMapper)}</nav>
    </div>
  );
}
