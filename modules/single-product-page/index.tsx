import CompWrapper from "@/components/comp-wrapper";
import ContactSnippetBanner from "@/components/contact-snippet-banner";
import ProductCanvas from "@/modules/single-product-page/product-canvas";
import ProductFeatures from "@/modules/single-product-page/product-features";
import { headingColorCss } from "@/modules/single-product-page/product-features/styles";
import ProductLinksSnippet from "@/modules/single-product-page/product-links-snippet";
import { productsLinksSnippetHeaderCss } from "@/modules/single-product-page/product-links-snippet/styles";
import { productDescContainerCss, productNameHeaderCss } from "@/modules/single-product-page/styles";
import { commonHeaderCss, commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SingleProductModule() {
  const [pageName, setPageName] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    if (router.isReady){
      setPageName((router.query.product as string).replace("-", " "));
    }
  }, [router.isReady,router]);

  return (
    <CompWrapper
      tag="div"
      page="Product"
      wrapperClassName="page"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={commonPageContainerCss}
    >
      <h1 css={[commonHeaderCss("var(--color-bg-secondary)"), productNameHeaderCss]}>Product One</h1>
      <ProductCanvas productName={pageName} />
      <ProductFeatures />
      <div css={productDescContainerCss}>
        <h3 css={[productsLinksSnippetHeaderCss, headingColorCss]}>About Product Name</h3>
        <p className="prod-page-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quos iure, exercitationem atque numquam autem
          corporis, rem odit quis a fuga vero, quidem cumque amet voluptatibus possimus vel praesentium qui maiores
          ullam quaerat veritatis aperiam aspernatur! Amet eos fugiat alias reprehenderit odio excepturi. Saepe suscipit
          commodi cum unde a pariatur qui, laborum quo dolorum maiores dolor sapiente earum ipsam doloribus perspiciatis
          neque nam nesciunt cupiditate vel, ipsum dicta. Porro natus culpa assumenda molestiae nobis minus! Voluptates
          distinctio ratione debitis ducimus quae iste perferendis molestiae delectus veritatis quos eum, pariatur
          quidem culpa. Illum, aperiam. Harum, quidem nam illo praesentium dolorum exercitationem maiores cum nobis eos.
          Excepturi necessitatibus vel iure porro incidunt modi expedita facere corrupti! Fuga laborum consequatur dicta
          aliquid optio necessitatibus sapiente fugit commodi corporis eveniet autem, nemo unde laudantium totam
          distinctio, illum, pariatur natus. Culpa quos et dicta incidunt dolorem repellendus quas facilis quisquam
          libero odit laborum ad eveniet maxime velit modi asperiores in veritatis saepe, ab fuga! Distinctio, quam
          asperiores? Ab ea accusamus, excepturi dolore voluptate quasi ut unde nobis, dolorum, earum laudantium aliquid
          dignissimos quod! Error doloremque magni fugit voluptate odit voluptatibus possimus unde rerum, provident ut
          doloribus, modi, cum officiis quam id veritatis repellendus dolor neque!
        </p>
      </div>
      <ProductLinksSnippet pageName={pageName} />
      <ContactSnippetBanner />
    </CompWrapper>
  );
}
