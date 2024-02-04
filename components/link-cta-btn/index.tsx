import { linkCtaBtnCss } from "@/components/link-cta-btn/styles";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function LinkCtaBtn(props: PropsWithChildren) {
  const { children } = props;
  return (
    <Link href="/contact" css={linkCtaBtnCss}>
      {children}
    </Link>
  );
}
