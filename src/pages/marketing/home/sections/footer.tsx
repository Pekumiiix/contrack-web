export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 p-30 pt-60 bg-[#0E0636] -mt-30">
      <a
        href="mailto:amaopelumi96@gmail.com"
        className="text-white/80 leading-[100%]"
      >
        Contact
      </a>

      <div className="w-full flex justify-center leading-none pointer-events-none select-none translate-y-4 md:translate-y-8">
        <span className="text-[15vw] leading-[150%] font-extrabold tracking-[-2%] bg-linear-[180deg,#CFC4FF_0%,#1B133E_81.61%] bg-clip-text text-transparent">
          CONTRACK
        </span>
      </div>
    </footer>
  );
}
