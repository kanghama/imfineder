function Username() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[200px]" data-name="Username">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MENUTITLE
      </p>
    </div>
  );
}

function Name() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Name">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Username />
      </div>
    </div>
  );
}

function Username1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[200px]" data-name="Username">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MENUTITLE
      </p>
    </div>
  );
}

function Name1() {
  return (
    <div className="bg-[#eaeaea] relative rounded-[8px] shrink-0 w-full" data-name="Name">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Username1 />
      </div>
    </div>
  );
}

function Username2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[200px]" data-name="Username">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MENUTITLE
      </p>
    </div>
  );
}

function Name2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Name">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Username2 />
      </div>
    </div>
  );
}

function Username3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[200px]" data-name="Username">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MENUTITLE
      </p>
    </div>
  );
}

function Name3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Name">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Username3 />
      </div>
    </div>
  );
}

function Messages() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Messages">
      <Name />
      <Name1 />
      <Name2 />
      <Name3 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Messages />
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_10px_20px_rgba(0,0,0,0.4)] flex flex-col items-start relative rounded-[14px] size-full" data-name="Menu">
      <div aria-hidden className="absolute border-[#b0b0b0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Main />
    </div>
  );
}