import { companyName } from "@/common-data";
import CompWrapper from "@/components/comp-wrapper";
import LinkCtaBtn from "@/components/link-cta-btn";
import { notFoundContainerCss, notFoundHeadingCss, notFoundParaCss } from "@/modules/404-page/styles";
import { bannerHeaderCss } from "@/modules/home-page/home-banner/styles";
import { commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function PageNotFoundModule() {
  return (
    <CompWrapper
      tag="main"
      page="404"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={[commonPageContainerCss, notFoundContainerCss]}
      wrapperClassName="page"
    >
      <h2 css={bannerHeaderCss}>404</h2>
      <h1 css={notFoundHeadingCss}>Page Not Found</h1>
      <p css={notFoundParaCss}>
        We are very sorry for the inconvenience. It looks like you’re trying to access a page that has been deleted or
        never existed.
      </p>
      <LinkCtaBtn link="">Back To Homepage</LinkCtaBtn>
    </CompWrapper>
  );
}
