import { linkCtaBtnCss } from "@/components/link-cta-btn/styles";
import { LinkCtaBtnProp } from "@/components/link-cta-btn/types";
import Link from "next/link";

export default function LinkCtaBtn(props: LinkCtaBtnProp) {
  const { children, link, extraStyles } = props;
  return (
    <Link href={`/${link}`} css={[linkCtaBtnCss, extraStyles]}>
      {children}
    </Link>
  );
}
