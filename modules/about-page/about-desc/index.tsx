import { aboutDescCss } from "@/modules/about-page/about-desc/styles";
import { commonHeaderCss } from "@/styles/common-styles";

export default function AboutDescription() {
  return (
    <section>
      <h1 css={commonHeaderCss()}>About Us</h1>
      <p css={aboutDescCss}>
        At Krishaka, we are driven by the vision to revolutionize small-scale
        farming through innovative, affordable, and energy-efficient solutions.
        Founded with a deep passion for agriculture and technology, Krishaka
        aims to empower farmers by providing them with cutting-edge tools that
        simplify their work and enhance productivity. Our focus is on developing
        automated machinery tailored for small-scale farmers, such as paddy
        transplanters and groundnut harvesters. These machines incorporate
        advanced technologies like Ultra-Wideband (UWB) for precise localization
        and camera-based systems for accurate perception, ensuring efficient and
        effective farming operations. We believe that by making modern
        agricultural technology accessible, we can address the critical
        challenges of labor shortages, rising costs, and inconsistent crop
        yields faced by farmers today. At Krishaka, we are committed to not only
        improving the livelihoods of farmers but also contributing to the
        sustainability of agriculture for future generations. Join us on our
        journey to make farming smarter, more sustainable, and more profitable
        for small-scale farmers everywhere.
      </p>
    </section>
  );
}
