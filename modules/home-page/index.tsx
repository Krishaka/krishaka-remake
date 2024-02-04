import CompWrapper from "@/components/comp-wrapper";
import ContactSnippetBanner from "@/components/contact-snippet-banner";
import HomeAbout from "@/modules/home-page/home-about";
import HomePageBanner from "@/modules/home-page/home-banner";
import HomeTeam from "@/modules/home-page/home-team";
import { commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function HomePageModule() {
  return (
    <>
      <HomePageBanner />
      <CompWrapper
        page="Home"
        tag="div"
        wrapperStyles={commonPageWrapperCss}
        innerElemExtraStyles={commonPageContainerCss}
      >
        <HomeAbout />
        <HomeTeam />
        <ContactSnippetBanner />
      </CompWrapper>
    </>
  );
}
