import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// shadcn components
import { Separator } from "@/components/ui/separator";

// Components
import SeoData from "@/components/tools/seo-data";
import ImageGeneratorBlog from "@/components/elements/blog/image-generator-blog";
import Brand3 from "@/components/elements/brand/brand3";
import CTA3 from "@/components/elements/cta/cta3";
import ImageGeneratorFeature from "@/components/elements/feature/image-generator-feature";
import ImageGeneratorGallery from "@/components/elements/galleries/image-generator-gallery";
import ImageGeneratorHero from "@/components/elements/hero/image-generator-hero";
import ImageGeneratorIntegration from "@/components/elements/integration/image-generator-integration";
import ImageGeneratorPricing from "@/components/elements/pricing/image-generator-pricing";
import ImageGeneratorService from "@/components/elements/service/image-generator-service";
import ImageGeneratorTestimonial from "@/components/elements/testimonial/image-generator-testimonial";
import Counter2 from "@/components/elements/counter/counter2";
import CounterWrapper from "@/components/elements/counter/counterWrapper";
import MainFAQ from "@/components/elements/faq/main-faq";
import PNLSlider from "@/components/elements/PNL/pnl-slider";

export default function Page() {
  const hero = getMainPage("/heros/image-generator-hero.mdx");
  const gallery = getMainPage("/galleries/image-generator-gallery.mdx");
  const brand = getMainPage("/brands/brand3.mdx");
  const feature = getMainPage("/features/image-generator-feature.mdx");
  const service = getMainPage("/services/image-generator/_index.mdx");
  const services = getAllPages("/services/image-generator");
  const integration = getMainPage(
    "/integrations/image-generator-integration.mdx"
  );
  const testimonial = getMainPage(
    "/testimonials/image-generator-testimonial.mdx"
  );
  const pricing = getMainPage("/pricings/image-generator-pricing.mdx");
  const blog = getMainPage("/blogs/main/_index.mdx");
  const blogs = getAllPages("/blogs/main");
  const cta = getMainPage("/ctas/cta3.mdx");
  const faq = getMainPage("/faqs/faq1.mdx");

  return (
    <main>
      <SeoData />
      <ImageGeneratorHero hero={hero} />

      <div className="absolute top-0 left-0 w-full 2xl:h-[750px] xl:h-[600px] lg:h-[500px] h-[450px] z-[-1]">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/assets/video/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <CounterWrapper />
      <ImageGeneratorFeature feature={feature} />
      <ImageGeneratorService service={service} services={services} />
      <ImageGeneratorIntegration integration={integration} />
      <PNLSlider
        pnl={{
          data: {
            title: "PnL Users",
            details:
              "Optimize your crypto strategy – we’ll help you achieve maximum profit!",
            items: [
              { image: "/assets/imgs/PNL/pnl-1.png" },
              { image: "/assets/imgs/PNL/pnl-2.png" },
              { image: "/assets/imgs/PNL/pnl-3.png" },
              { image: "/assets/imgs/PNL/pnl-4.png" },
              { image: "/assets/imgs/PNL/pnl-5.png" },
              { image: "/assets/imgs/PNL/pnl-6.png" },
            ],
          },
        }}
      />
      <ImageGeneratorTestimonial testimonial={testimonial} />
      <MainFAQ faq={faq} />
      <CTA3
        cta={cta}
        className="pt-[50px] md:pt-[75px] xl:pt-[100px] 2xl:pt-[124px] sec_space_bottom3"
        btnClassName="rounded-full border border-[#41494D] hover:border-transparent"
        animatedBtn
      />
    </main>
  );
}
