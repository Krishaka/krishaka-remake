import { companyName } from "@/common-data";
import ImageWrapper from "@/components/image-wrapper";
import { logoCss } from "@/components/logo/styles";
import { LogoProp } from "@/components/logo/types";

export default function Logo(prop: LogoProp) {
  const { height } = prop;
  return (
    <ImageWrapper
      alt="Logo | Krishaka Agritech"
      src="/images/logo.png"
      extraStyles={logoCss(height)}
      link="/"
      title={companyName}
    />
  );
}
