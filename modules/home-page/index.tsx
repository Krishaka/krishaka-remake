import CompWrapper from "@/components/comp-wrapper";
import ContactSnippetBanner from "@/components/contact-snippet-banner";
import HomeAbout from "@/modules/home-page/home-about";
import HomePageBanner from "@/modules/home-page/home-banner";
import HomeCarousal from "@/modules/home-page/home-carousal";
import HomeFeaturedProduct from "@/modules/home-page/home-featured-product";
import HomeTeam from "@/modules/home-page/home-team";
import { commonPageContainerCss, commonPageWrapperCss } from "@/styles/common-styles";

export default function HomePageModule() {
  return (
    <>
      <HomePageBanner />
      <HomeFeaturedProduct />
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
