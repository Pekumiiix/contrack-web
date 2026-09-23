import { AddToChromeButton } from "../components/add-to-chrome-button";

export function Hero() {
  return (
    <section className="w-full h-fit flex flex-col lg:flex-row items-centerlg:gap-1">
      <div className="basis-full lg:basis-1/2 lg:min-w-0 h-fit flex flex-col items-center lg:items-start gap-4.75 md:gap-30.75 justify-between px-4.75 md:px-14.75 lg:pr-0 lg:pb-25">
        <div className="flex flex-col items-center lg:items-start gap-4.75 md:gap-7.25 lg:gap-9.5">
          <div className="flex flex-col items-center lg:items-start gap-2 md:gap-3">
            <div className="size-fit flex items-center gap-2.75 py-1.25 px-2 md:py-2 md:px-4 border border-white/10 rounded-full bg-linear-[180deg,#20291F_0%,#2A281E_100%]">
              <span className="text-[10px] md:text-[13px] lg:text-[15px] font-medium leading-[100%] text-white tracking-[-1%]">
                Rated 5.0
              </span>

              <div className="flex items-center gap-px md:gap-0.5">
                {Array.from({ length: 5 }).map(() => (
                  <img
                    key={crypto.randomUUID()}
                    src="/images/hero/star.svg"
                    alt="Star"
                    className="size-2.5 md:size-3 lg:size-3.75"
                  />
                ))}
              </div>
            </div>

            <h1 className="text-[44px] md:text-[62px] lg:text-[80px] leading-12 md:leading-16.5 lg:leading-23.75 tracking-[-4%] text-white font-semibold text-center lg:text-left">
              Test Contrast on Any live{" "}
              <span className="bg-linear-[90deg,#00C4FF_0%,#EAFF00_100%] text-clip bg-clip-text text-transparent">
                Website
              </span>
            </h1>

            <p className="text-xl md:text-medium text-[#D6D2D7] leading-7.5 md:leading-9.25 text-center lg:text-left">
              Scan live websites for contrast issues, review compliance scores,
              and apply smarter color with confidence
            </p>
          </div>

          <AddToChromeButton />
        </div>

        {/* <div className="flex flex-col items-center md:items-start gap-3 md:gap-6">
          <p className="text-[11px] md:text-medium leading-5.75 font-medium text-white tracking-[-2%]">
            Recognize by industry leaders and expert
          </p>
          <div className="flex items-center gap-7.75">
            {[
              { src: "/images/hero/perplexity.svg", alt: "Perplexity" },
              { src: "/images/hero/openphone.svg", alt: "OpenPhone" },
              { src: "/images/hero/framer.svg", alt: "Framer" },
            ].map((item) => (
              <img
                key={item.alt}
                src={item.src}
                alt={item.alt}
                className="h-4.25 md:h-9 w-auto"
              />
            ))}
          </div>
        </div> */}
      </div>

      <img
        src="/images/hero/col-image.png"
        alt="Hero"
        className="flex md:hidden w-full h-auto object-cover"
      />

      <img
        src="/images/hero/right-basis.png"
        alt="Hero"
        className="hidden md:flex basis-full md:basis-1/2 min-w-0 w-full h-auto object-cover"
      />
    </section>
  );
}
