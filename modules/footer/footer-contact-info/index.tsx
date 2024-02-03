import { contactInfoList } from "@/common-data";
import {
  footerContactInfoWrapperCss,
  footerContactLinkCss,
  footerContactLinkTextCss
} from "@/modules/footer/footer-contact-info/styles";
import { footerIconCss } from "@/modules/footer/styles";
import Link from "next/link";

export const contactInfoMapper = (contactInfo: (typeof contactInfoList)[0], index: number) => {
  const { Icon, iconName, link, text } = contactInfo;
  return (
    <Link href={link} key={`contact-${iconName}-${index}`} css={footerContactLinkCss}>
      <Icon css={footerIconCss("var(--color-bg-secondary)")} />
      <span css={footerContactLinkTextCss}>{text}</span>
    </Link>
  );
};

export default function FooterContactInfo() {
  return (
    <div css={footerContactInfoWrapperCss} className="footer-grid-col">
      {contactInfoList.map(contactInfoMapper)}
    </div>
  );
}
