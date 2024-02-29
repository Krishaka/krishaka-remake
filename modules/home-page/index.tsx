import CompWrapper from "@/components/comp-wrapper";
import ContactSnippetBanner from "@/components/contact-snippet-banner";
import HomeAbout from "@/modules/home-page/home-about";
import HomePageBanner from "@/modules/home-page/home-banner";
import HomeCanvas from "@/modules/home-page/home-banner/home-canvas";
import HomeCarousal from "@/modules/home-page/home-carousal";
import HomeTeam from "@/modules/home-page/home-team";
import { commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function HomePageModule() {
  return (
    <>
      <HomePageBanner />
      <HomeCanvas />
      <CompWrapper
        page="Home"
        tag="div"
        wrapperStyles={commonPageWrapperCss}
        innerElemExtraStyles={commonPageContainerCss}
      >
        <HomeCarousal />
        <HomeAbout />
        <HomeTeam />
        <ContactSnippetBanner />
      </CompWrapper>
    </>
  );
}
