export function AddToChromeButton() {
  return (
    <button className="size-fit flex items-center gap-2 py-1.75 px-2.5 md:py-3.75 md:px-5.25 border border-[#292D321A] bg-white rounded-full cursor-pointer hover:bg-white/90">
      <img
        src="/images/hero/chrome.svg"
        alt="Chrome"
        className="max-md:size-3.75"
      />
      <span className="text-[8px] md:text-base font-medium leading-3.5 md:leading-7 tracking-[-2%] font-jakarta text-black-100">
        Add to chrome - it’s free
      </span>
    </button>
  );
}
