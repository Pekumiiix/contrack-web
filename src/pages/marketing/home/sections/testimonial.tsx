import { QuoutesIcon } from "../../../../components/icons/quotes";

export function Testimonial() {
  return (
    <section className="flex flex-col items-center gap-20 px-4 md:px-15 py-25">
      <div className="max-w-240.75 w-full flex flex-col gap-3">
        <h2 className="md:text-center text-[32px] leading-10.5 md:text-[41px] md:leading-12.75 lg:text-xlarge lg:leading-17.5 tracking-[-4%] text-black-100 font-bold">
          Loved by All, Trusted by Accessibility{" "}
          <span className="bg-linear-[90deg,#F3CA13_0%,#FA03F6_100%] text-clip bg-clip-text text-transparent">
            Teams
          </span>
        </h2>
        <p className="md:text-center text-xl md:text-2xl leading-8 md:leading-8.5 font-medium text-black-90">
          See how designers, developers, and accessibility professionals use our
          extension to create more readable and inclusive web experiences with
          confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <TestimonialCard
          testimony="“This extension saves me so much time. Instead of digging through DevTools, I can instantly check contrast ratios directly on the page”"
          avatar="/images/testimonial/eli.png"
          name="Eli Winderbaum"
          position="Product Designer"
          className="bg-primary-100 max-md:h-111"
          colorVariant="white"
        />

        <div className="w-full h-111 md:h-119.5 grid grid-rows-2 gap-3">
          <TestimonialCard
            testimony="“A must-have for accessibility audits. It’s fast, accurate, and incredibly easy to use.”"
            avatar="/images/testimonial/micheal.png"
            name="Michael T."
            position="Front-End Developer"
            className="border"
          />

          <TestimonialCard
            testimony="“I use it daily when reviewing designs before launch. It catches accessibility issues in seconds.”"
            avatar="/images/testimonial/david.png"
            name="David R"
            position="UX Lead"
            className="border"
          />
        </div>

        <TestimonialCard
          testimony="“The clean interface and instant feedback make accessibility testing effortless”"
          avatar="/images/testimonial/alex.jpg"
          name="Alex B."
          position="Senior Product Designer"
          cardVariant="special"
          className="bg-[url('/images/testimonial/alex.jpg')] object-cover object-center max-md:h-111"
          colorVariant="white"
        />

        <TestimonialCard
          testimony="“One of those tools you install once and wonder how you ever worked without it.”"
          avatar="/images/testimonial/emma.png"
          name="Emma L"
          position="Web designer"
          className="border h-119.5"
        />

        <TestimonialCard
          testimony="“Perfect for quickly validating color choices across websites without opening multiple tools.”"
          avatar="/images/testimonial/olivia.png"
          name="Olivia M"
          position="Accessibility Consultant"
          cardVariant="special"
          className="bg-[url('/images/testimonial/olivia.jpg')] object-cover object-center max-md:h-111"
          colorVariant="white"
        />

        <TestimonialCard
          testimony="“As someone who reviews dozens of interfaces every week, this extension has become part of my workflow. I can instantly verify contrast accessibility without breaking my focus or switching between tools.”"
          avatar="/images/testimonial/james.png"
          name="James P."
          position="Fullstack Developer"
          className="border h-119.5"
        />
      </div>
    </section>
  );
}

function TestimonialCard({
  testimony,
  avatar,
  name,
  position,
  className,
  colorVariant = "black",
  cardVariant = "default",
}: TestimonialCardProps) {
  return (
    <div
      className={`size-full flex flex-col justify-between p-5 rounded-3xl border-[#E5E5E5] ${className}`}
    >
      <p
        className={`text-xl font-medium leading-7.5 tracking-[-2%] ${colorVariant === "black" ? "text-black-80" : "text-white"}`}
      >
        {testimony}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {cardVariant === "default" && (
            <img src={avatar} alt={name} className="size-9 rounded-full" />
          )}

          <div className="flex flex-col gap-1">
            <p
              className={`text-lg font-medium leading-6 tracking-[-2%] ${colorVariant === "black" ? "text-black-70" : "text-white"}`}
            >
              {name}
            </p>
            <p
              className={`text-sm leading-6 tracking-[-2%] ${colorVariant === "black" ? "text-[#162235B2]" : "text-white"} `}
            >
              {position}
            </p>
          </div>
        </div>

        {cardVariant === "default" && (
          <QuoutesIcon
            className={
              colorVariant === "black" ? "fill-primary-100" : "fill-white"
            }
          />
        )}
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  testimony: string;
  avatar: string;
  name: string;
  position: string;
  className?: string;
  colorVariant?: "white" | "black";
  cardVariant?: "special" | "default";
}
