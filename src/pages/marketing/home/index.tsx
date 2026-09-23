import { CTA } from "./sections/cta";
import { FAQ } from "./sections/faq";
import { Features } from "./sections/features";
import { Footer } from "./sections/footer";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";

export default function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col items-center px-4 md:px-5 py-3 md:py-5.5">
        <div className="max-w-384 w-full flex flex-col gap-7 md:gap-13.25 rounded-[30px] bg-black overflow-hidden">
          <Header />

          <Hero />
        </div>
      </div>

      <main className="z-10 max-w-384 w-full flex flex-col">
        <Features />

        {/* <Testimonial /> */}

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
