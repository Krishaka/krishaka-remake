import CompWrapper from "@/components/comp-wrapper";
import ContactPageBanner from "@/components/contact-page-banner";
import { commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function HomePageModule() {
  return (
    <CompWrapper
      page="Home"
      tag="div"
      wrapperStyles={commonPageWrapperCss}
      innerElemExtraStyles={commonPageContainerCss}
    >
      hi
      <ContactPageBanner />
    </CompWrapper>
  );
}
