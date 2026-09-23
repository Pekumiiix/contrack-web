export function AddToChromeButton() {
  return (
    <button className="size-fit flex items-center gap-2 py-3.75 px-5.25 border border-[#292D321A] bg-white rounded-full cursor-pointer hover:bg-white/90">
      <img src="/images/hero/chrome.svg" alt="Chrome" className="size-3.75" />
      <span className="text-base font-medium leading-7 tracking-[-2%] font-jakarta text-black-100">
        Add to chrome - it’s free
      </span>
    </button>
  );
}
