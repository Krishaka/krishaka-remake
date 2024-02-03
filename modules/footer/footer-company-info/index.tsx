import { companyName, companyTagLine, socialIconsList } from "@/common-data";
import Logo from "@/components/logo";
import {
  footerCompanyIDCss,
  footerCompanyIDNameCss,
  footerCompanyInfoWrapperCss,
  footerSocialsHeaderCss,
  footerSocialsWrapperCss,
  footerTaglineCss
} from "@/modules/footer/footer-company-info/styles";
import { footerIconCss } from "@/modules/footer/styles";
import Link from "next/link";

export default function FooterCompanyInfo() {
  const socialIconsMapper = (iconData: (typeof socialIconsList)[0], index: number) => {
    const { Icon, iconName, link } = iconData;
    return (
      <Link href={link} title={iconName} aria-label={iconName} key={iconName + "-" + index}>
        <Icon css={footerIconCss("var(--color-text-default)")} />
      </Link>
    );
  };
  return (
    <div className="footer-grid-col">
      <div css={footerCompanyInfoWrapperCss}>
        <div css={footerCompanyIDCss}>
          <Logo height="50px" />
          <h2 css={footerCompanyIDNameCss}>{companyName}</h2>
        </div>
        <h3 css={footerTaglineCss}>{companyTagLine}</h3>
      </div>
      <div>
        <span css={footerSocialsHeaderCss}>Follow Us</span>
        <div css={footerSocialsWrapperCss}>{socialIconsList.map(socialIconsMapper)}</div>
      </div>
    </div>
  );
}
