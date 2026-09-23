import { useState } from "react";

export function FAQ() {
  return (
    <section className="w-full flex flex-col items-center gap-15 max-md:px-4 max-lg:px-14.75 p-30">
      <div className="flex flex-col items-center gap-3">
        <h2 className="md:text-center text-[32px] md:text-[41px] lg:text-xlarge font-bold leading-10.5 md:leading-12.75 lg:leading-17.5 tracking-[-4%] text-black-100">
          Frequently Asked{" "}
          <span className="bg-linear-[90deg,#F3CA13_0%,#FA03F6_100%] text-clip bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <p className="md:text-center text-xl md:text-2xl font-medium leading-8 md:leading-8.5 text-black-90">
          Everything you need to know about checking text contrast, improving
          accessibility, and getting the most out of the extension.
        </p>
      </div>

      <div className="w-full flex flex-col gap-5">
        {[
          {
            question: "How does the extension work?",
            answer:
              "Simply activate the extension and hover over any text on a webpage. The extension instantly analyzes the text and background colors, then displays the contrast ratio and accessibility rating",
          },
          {
            question: "Why is contrast important?",
            answer:
              "Proper color contrast improves readability and helps ensure your content is accessible to users with visual impairments, meeting accessibility standards such as WCAG",
          },
          {
            question: "Do I need design or accessibility knowledge to use it?",
            answer:
              "Not at all. The extension provides easy-to-understand ratings and contrast scores, making it useful for designers, developers, marketers, and content creators alike",
          },
          {
            question: "What accessibility standards does it check against?",
            answer:
              "The extension evaluates contrast ratios based on WCAG accessibility guidelines and indicates whether text passes or fails common compliance requirements",
          },
          {
            question: "Will the extension slow down my browser?",
            answer:
              "No. It’s lightweight and only analyzes elements when you interact with them",
          },
        ].map((item) => (
          <FAQItem key={item.question} {...item} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: FAQQItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-between gap-8 py-8 px-5 rounded-[20px] border border-black-10 bg-[#FCFCFD]">
      <div className="flex flex-col gap-3">
        <p className="text-lg md:text-xl xl:text-2xl font-semibold md:leading-7.5 xl:leading-11 text-black-90 tracking-[-1%]">
          {question}
        </p>
        {open && (
          <p className="md:text-lg xl:text-xl font-medium leading-7 md:leading-7.5 xl:leading-8 tracking-[-1%] text-black-70">
            {answer}
          </p>
        )}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="relative size-10.75 flex items-center justify-center cursor-pointer"
      >
        <div className="w-5.5 h-0.75 bg-black-80 rounded-full" />
        <div
          className={`absolute w-0.75 h-5.5 bg-black-80 rounded-full ${open ? "rotate-90" : "rotate-0"} transition-transform duration-300`}
        />
      </button>
    </div>
  );
}

interface FAQQItemProps {
  question: string;
  answer: string;
}
