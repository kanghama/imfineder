import svgPaths from "./svg-wfkn3b7y9v";
import imgBottom from "./04efd9ff2007ebed866c64664e62c5d9bc42e743.png";

function Group() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p15f49900} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Back() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px]" data-name="Back">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p15f49900} fill="var(--fill-0, #D0D0D0)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Foward() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[20px] relative size-[40px]" data-name="Foward">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Function() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1000px] shrink-0" data-name="Function">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Back />
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[24px]" data-name="Divider">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                  <line id="Divider" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeOpacity="0.2" x1="0.5" x2="23.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Foward />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}

function Count() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-[510] items-center justify-center leading-[normal] relative shrink-0 text-[14px] text-[rgba(64,64,64,0.6)] whitespace-nowrap" data-name="Count">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['SF_Pro:Medium',sans-serif] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        n
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        명
      </p>
    </div>
  );
}

function Led() {
  return <div className="bg-[#35c75a] relative rounded-[1000px] shrink-0 size-[8px]" data-name="LED" />;
}

function Connect() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Connect">
      <p className="[word-break:break-word] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-[rgba(64,64,64,0.6)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        연결됨
      </p>
    </div>
  );
}

function Network() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Network">
      <Led />
      <Connect />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Status">
      <Count />
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
                <line id="Divider" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeOpacity="0.2" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Network />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Search">
          <path d={svgPaths.p1dc30a80} fill="var(--fill-0, #404040)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Function1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1000px] shrink-0" data-name="Function">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Search />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p2f333800} fill="var(--fill-0, #404040)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p25a73100} fill="var(--fill-0, #404040)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgDarkMode() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-4px] overflow-clip p-[20px] relative shrink-0 size-[40px]" data-name="gg:dark-mode">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group 13">
          <path d={svgPaths.p37668200} fill="var(--fill-0, #404040)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsCloseRounded() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px]" data-name="material-symbols:close-rounded">
      <Group3 />
    </div>
  );
}

function Function2() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1000px] shrink-0" data-name="Function">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <GgDarkMode />
        <MaterialSymbolsCloseRounded />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Buttons">
      <Function1 />
      <Function2 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0" data-name="Right">
      <Status />
      <Buttons />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_10px_rgba(0,0,0,0.06)] flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <Function />
      <Right1 />
    </div>
  );
}

function Toparea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toparea">
      <div className="content-stretch flex flex-col items-start p-[14px] relative size-full">
        <Top />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center leading-[normal] relative shrink-0 text-[#808080]">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal opacity-0 relative shrink-0 text-[14px] w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        B
      </p>
      <p className="font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold relative shrink-0 text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        이름
      </p>
    </div>
  );
}

function Username() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[200px]" data-name="Username">
      <Frame />
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
                <line id="Divider" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeOpacity="0.2" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        내용
      </p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
                <line id="Divider" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeOpacity="0.2" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[140px]" data-name="Date">
      <p className="[word-break:break-word] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        날짜
      </p>
      <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[14px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
                <line id="Divider" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeOpacity="0.2" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[120px]" data-name="Date">
      <p className="[word-break:break-word] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        시간
      </p>
    </div>
  );
}

function Category() {
  return (
    <div className="relative shrink-0 w-full" data-name="Category">
      <div aria-hidden className="absolute border-[#d0d0d0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[24px] py-[8px] relative size-full">
          <Username />
          <Text />
          <Date />
          <Date1 />
        </div>
      </div>
    </div>
  );
}

function Username1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] items-center leading-[normal] relative shrink-0 text-[14px] text-black w-[200px]" data-name="Username">
      <p className="relative shrink-0 w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        E
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        USERNAME
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: '"wdth" 100' }}>
        MESSAGE
      </p>
    </div>
  );
}

function Date2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] items-center leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-[140px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        YYYY
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{` MM`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{` DD`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
    </div>
  );
}

function Date3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] items-center leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-[80px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        HH
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        :
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        MM
      </p>
    </div>
  );
}

function Message() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Message">
      <div className="content-stretch flex gap-[14px] items-start p-[8px] relative size-full">
        <Username1 />
        <Text1 />
        <Date2 />
        <Date3 />
      </div>
    </div>
  );
}

function Username2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-black w-[200px]" data-name="Username">
      <p className="relative shrink-0 w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        E
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        USERNAME
      </p>
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-[#808080] w-[140px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        YYYY
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{` MM`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{` DD`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
    </div>
  );
}

function Date5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-[#808080] w-[80px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        HH
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        :
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        MM
      </p>
    </div>
  );
}

function Message1() {
  return (
    <div className="bg-[#eaeaea] relative rounded-[8px] shrink-0 w-full" data-name="Message">
      <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[14px] items-start leading-[normal] p-[8px] relative size-full text-[14px]">
        <Username2 />
        <p className="flex-[1_0_0] min-w-px relative text-black" style={{ fontVariationSettings: '"wdth" 100' }}>
          MESSAGE
        </p>
        <Date4 />
        <Date5 />
      </div>
    </div>
  );
}

function Username3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] items-center leading-[normal] relative shrink-0 text-[14px] text-black w-[200px]" data-name="Username">
      <p className="relative shrink-0 w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        E
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        USERNAME
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: '"wdth" 100' }}>
        MESSAGE
      </p>
    </div>
  );
}

function Date6() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] items-center leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-[140px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        YYYY
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{` MM`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{` DD`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
    </div>
  );
}

function Date7() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] items-center leading-[normal] relative shrink-0 text-[#808080] text-[14px] w-[80px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        HH
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        :
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        MM
      </p>
    </div>
  );
}

function Message2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Message">
      <div className="content-stretch flex gap-[14px] items-start p-[8px] relative size-full">
        <Username3 />
        <Text2 />
        <Date6 />
        <Date7 />
      </div>
    </div>
  );
}

function Username4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-black w-[200px]" data-name="Username">
      <p className="relative shrink-0 w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        E
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        USERNAME
      </p>
    </div>
  );
}

function Date8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-[#808080] w-[140px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        YYYY
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{` MM`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{` DD`}</p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        .
      </p>
    </div>
  );
}

function Date9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 text-[#808080] w-[80px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        HH
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        :
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        MM
      </p>
    </div>
  );
}

function Message3() {
  return (
    <div className="bg-[#eaeaea] relative rounded-[8px] shrink-0 w-full" data-name="Message">
      <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[14px] items-start leading-[normal] p-[8px] relative size-full text-[14px]">
        <Username4 />
        <p className="flex-[1_0_0] min-w-px relative text-black" style={{ fontVariationSettings: '"wdth" 100' }}>
          MESSAGE
        </p>
        <Date8 />
        <Date9 />
      </div>
    </div>
  );
}

function Messages() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Messages">
      <div className="content-stretch flex flex-col items-start px-[14px] py-[8px] relative size-full">
        <Message />
        <Message1 />
        <Message2 />
        <Message3 />
      </div>
    </div>
  );
}

function ScrollBar() {
  return <div className="bg-[#808080] h-[80px] relative rounded-[100px] shrink-0 w-[12px]" data-name="ScrollBar" />;
}

function Scroll() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex h-full items-start overflow-clip relative rounded-[100px] shrink-0" data-name="Scroll">
      <ScrollBar />
    </div>
  );
}

function ScrollArea() {
  return (
    <div className="h-full relative shrink-0" data-name="ScrollArea">
      <div className="flex flex-row justify-end size-full">
        <div className="content-stretch flex items-start justify-end p-[14px] relative size-full">
          <Scroll />
        </div>
      </div>
    </div>
  );
}

function Messagegroup() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="Messagegroup">
      <Messages />
      <ScrollArea />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-w-px relative rounded-[30px]" data-name="Input">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[13px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] min-w-px relative text-[#b0b0b0] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            작성..
          </p>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsMicRounded() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="material-symbols:mic-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="material-symbols:mic-rounded">
          <path d={svgPaths.p234e1180} fill="var(--fill-0, #404040)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Send() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px]" data-name="Send">
      <MaterialSymbolsMicRounded />
    </div>
  );
}

function Function3() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1000px] shrink-0" data-name="Function">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Send />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}

function Send1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Send">
          <path d={svgPaths.p18002200} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Function4() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1000px] shrink-0" data-name="Function">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Send1 />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}

function Inputarea() {
  return (
    <div className="content-stretch drop-shadow-[0px_0px_10px_rgba(0,0,0,0.06)] flex flex-[1_0_0] gap-[12px] items-start min-w-px relative" data-name="Inputarea">
      <Input />
      <Function3 />
      <Function4 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBottom} />
      <div className="content-stretch flex items-start p-[14px] relative size-full">
        <Inputarea />
      </div>
    </div>
  );
}

function Mainarea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Mainarea">
      <Category />
      <Messagegroup />
      <Bottom />
    </div>
  );
}

export default function Right() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative size-full" data-name="Right">
      <Toparea />
      <Mainarea />
    </div>
  );
}