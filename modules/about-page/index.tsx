import CompWrapper from "@/components/comp-wrapper";
import ContactSnippetBanner from "@/components/contact-snippet-banner";
import AboutBanner from "@/modules/about-page/about-banner";
import AboutDescription from "@/modules/about-page/about-desc";
import AboutTimeline from "@/modules/about-page/about-timeline";
import { commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function AboutPageModule() {
  return (
    <CompWrapper
      tag="div"
      page="About"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={commonPageContainerCss}
      wrapperClassName="page"
    >
      <AboutBanner />
      <AboutDescription />
      <AboutTimeline />
      <ContactSnippetBanner />
    </CompWrapper>
  );
}
