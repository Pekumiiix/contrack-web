export function Features() {
  return (
    <section className="w-full flex flex-col gap-30 max-md:px-4 max-lg:px-14.75 p-30">
      <div className="w-full flex flex-col gap-15">
        <div className="grid md:grid-cols-2 gap-3 md:gap-20">
          <p className="text-[32px] leading-10.5 md:text-[41px] md:leading-12.75 lg:text-xlarge font-bold lg:leading-17.5 tracking-[-4%] text-black-100">
            Accessibility shouldn't be an{" "}
            <span className="bg-linear-[90deg,#F3CA13_0%,#FA03F6_100%] text-clip bg-clip-text text-transparent">
              afterthought
            </span>
          </p>

          <p className="text-xl md:text-2xl font-medium leading-7.5 md:leading-8 text-black-90">
            The web is for everyone, but most sites fail basic contrast
            checks.The web is for everyone, but most sites fail basic contrast
            checks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <MetricsCard
            value="96.3%"
            label="Of homepages have WCAG failures"
            color="#EF4444"
          />

          <MetricsCard
            value="$13B"
            label="Lost annually in ADA lawsuits"
            color="#6B4CF5"
          />

          <MetricsCard
            value="1 in 4"
            label="Adults have a disability"
            color="#14B8A6"
          />
        </div>
      </div>

      <div className="flex flex-col gap-20 lg:gap-30">
        <FeatureCard
          imageSrc="/images/features/f1.png"
          imageAlt="Extension preview"
          iconSrc="/images/features/zap.svg"
          iconAlt="Zap"
          title="Live Page Inspection"
          description="Hover over any element on any webpage to instantly see its contrast ratio and WCAG compliance status."
        />

        <FeatureCard
          imageSrc="/images/features/f2.png"
          imageAlt="Contrast test results"
          iconSrc="/images/features/check.svg"
          iconAlt="Check"
          title="WCAG AA & AAA"
          description="Strict adherence to WCAG 2.1 guidelines for normal and large text."
          reverse
        />

        <FeatureCard
          imageSrc="/images/features/f3.png"
          imageAlt="Suggested color palette"
          iconSrc="/images/features/theme.svg"
          iconAlt="Theme"
          title="Smart Suggestions"
          description="Failing contrast? Get auto-generated accessible alternatives instantly."
        />

        <FeatureCard
          imageSrc="/images/features/f4.png"
          imageAlt="Manual color picker"
          iconSrc="/images/features/settings.svg"
          iconAlt="Settings"
          title="Manual Mode"
          description="Input HEX, RGB, or HSL values directly for quick checks during design."
          reverse
        />
      </div>
    </section>
  );
}

function MetricsCard({ value, label, color }: MetricsCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-8.25 md:p-8.75 border border-[#E2E8F0] rounded-2xl bg-[#F8FAFC80]">
      <p
        className="font-semibold leading-10.5 md:leading-12.75 lg:leading-15 text-[32px] md:text-[41px] lg:text-xlarge"
        style={{ color }}
      >
        {value}
      </p>
      <p className="text-xl leading-6 font-medium text-black-70 text-center">
        {label}
      </p>
    </div>
  );
}

function FeatureCard({
  imageSrc,
  imageAlt,
  iconSrc,
  iconAlt,
  title,
  description,
  reverse = false,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-10 lg:gap-20 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className="basis-full md:basis-1/2 min-w-0 min-h-78.75 h-78.75 lg:h-111.5 flex items-center justify-center rounded-[20px] bg-linear-[180deg,#F7F5FF_0%,#FEF2F6_100%]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="size-auto max-w-[80%] max-h-full"
        />
      </div>

      <div className="basis-1/2 min-w-0 flex flex-col gap-8">
        <div className="size-15 flex items-center justify-center bg-[#F0EDFF] rounded-[15px]">
          <img src={iconSrc} alt={iconAlt} className="size-7.5" />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[32px] leading-10.5 md:text-[41px] md:leading-12.75 lg:text-xlarge font-bold tracking-[-4%] text-black-100 lg:leading-17.5">
            {title}
          </p>
          <p className="text-xl md:text-2xl font-medium leading-8 md:leading-8.5 text-black-90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface MetricsCardProps {
  value: string;
  label: string;
  color: `#${string}`;
}

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  reverse?: boolean;
}
