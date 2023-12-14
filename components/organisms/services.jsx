import SectionTitle from "../molecules/section-title";
import CardServices from "../molecules/card-services";
import devLottie from "@/public/lotties/services-dev.json";
import brandLottie from "@/public/lotties/services-brand.json";
import productLottie from "@/public/lotties/services-product.json";

const Services = () => {
  return (
    <section className="pt-32 container mx-auto" id="section-services">
      <SectionTitle title="Our Services" subtitle="Meet the professionals" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 md:gap-y-12 md:gap-x-8 mt-12">
        <CardServices
          lottieFile={devLottie}
          icon="/images/icon-development.svg"
          title="Development"
          description="Turning ideas into real digital products is a valid indicator that beautiful designs can be created and implemented."
        />
        <CardServices
          lottieFile={brandLottie}
          icon="/images/icon-brand-identity.svg"
          title="Brand Identity"
          description="Through branding, the company will have strong awareness, so that consumers can easily identify and remember the brand."
          delay={0.5}
        />
        <CardServices
          lottieFile={productLottie}
          icon="/images/icon-product-design.svg"
          title="Product Design"
          description="Designing interfaces by imagining, creating, and iterating products that solve user problems or meet specific needs."
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Services;
