import { AddToChromeButton } from "../components/add-to-chrome-button";

export function CTA() {
  return (
    <section className="px-4 md:px-15">
      <div className="w-full h-fit lg:h-127.75 flex flex-col lg:flex-row lg:items-end gap-25 lg:gap-0 px-4 md:px-10 pt-9.5 rounded-[40px] bg-linear-[180deg,#F0F1FF_0%,#E7FFFA_50%,#D7D5FF_100%]">
        <div className="lg:max-w-133 w-full flex flex-col gap-7 md:gap-10 lg:gap-20 pb-9.5">
          <div className="flex flex-col gap-3">
            <h2 className="text-[32px] md:text-[41px] lg:text-xlarge font-bold leading-10.5 md:leading-12.75 lg:leading-17.5 tracking-[-4%] text-black-100">
              Accessibility shouldn't be an{" "}
              <span className="bg-linear-[90deg,#13F344_0%,#370978_100%] text-clip bg-clip-text text-transparent">
                afterthought
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-8 md:leading-8.5 text-black-90 opacity-80">
              The web is for everyone, but most sites fail basic contrast
              checks.
            </p>
          </div>
          <AddToChromeButton />
        </div>

        <div className="w-full overflow-hidden">
          <img
            src="/images/cta/cta.png"
            alt="Hero"
            className="w-[200%] lg:w-[60%] h-auto object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
