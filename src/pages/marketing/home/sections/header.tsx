export function Header() {
  return (
    <header className="w-full h-22.25 py-5.75 px-4.75 md:px-14.5">
      <nav className="size-full">
        <div className="flex flex-row items-center gap-1.75">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="size-5 md:size-8.75"
          />
          <p className="text-sm md:text-xl md:leading-7 font-semibold text-white tracking-[-0.5px]">
            Contrack
          </p>
        </div>
      </nav>
    </header>
  );
}
