import { productList } from "@/common-data";
import { footerListLinkCss, footerListWrapperCss } from "@/modules/footer/footer-site-links/styles";
import { footerColHeaderCss } from "@/modules/footer/styles";
import Link from "next/link";

export default function FooterProductsList() {
  const productListMapper = (product: (typeof productList)[0], index: number) => {
    const { productName } = product;
    return (
      <Link href={`/products/${productName.replace(/ /g, "-")}`} key={`product-item-${index}`} css={footerListLinkCss}>
        {productName}
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
