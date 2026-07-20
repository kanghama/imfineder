import svgPaths from "./svg-5emnqodd14";

function Buttom() {
  return (
    <div className="h-[14px] relative shrink-0 w-[58px]" data-name="Buttom">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 14">
        <g id="Buttom">
          <circle cx="7" cy="7" fill="var(--fill-0, #FF0000)" id="Ellipse 3" r="7" />
          <circle cx="29" cy="7" fill="var(--fill-0, #D0D0D0)" id="Ellipse 4" r="7" />
          <circle cx="51" cy="7" fill="var(--fill-0, #D0D0D0)" id="Ellipse 5" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Username() {
  return (
    <div className="content-stretch flex font-['SF_Pro:Bold',sans-serif] items-center relative shrink-0" data-name="Username">
      <p className="relative shrink-0 w-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        E
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        USERNAME
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-bold items-center justify-center leading-[normal] min-w-px relative text-[#404040] text-[12px]" data-name="Title">
      <Username />
      <p className="font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        님이 전송한 미디어
      </p>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[14px] relative shrink-0 w-[58px]" data-name="margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="margin" opacity="0">
          <circle cx="7" cy="7" fill="var(--fill-0, #FF0000)" id="Ellipse 3" r="7" />
          <circle cx="29" cy="7" fill="var(--fill-0, #D0D0D0)" id="Ellipse 4" r="7" />
          <circle cx="51" cy="7" fill="var(--fill-0, #D0D0D0)" id="Ellipse 5" r="7" />
        </g>
      </svg>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[8px] relative size-full">
          <Buttom />
          <Title />
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Password() {
  return (
    <div className="bg-black content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative rounded-[4px] w-full" data-name="Password">
      <p className="[word-break:break-word] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[14px] text-center text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        이미지영역
      </p>
    </div>
  );
}

function Out() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Out">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Out">
          <rect fill="var(--fill-0, white)" height="19.5" rx="9.75" width="19.5" x="0.25" y="0.25" />
          <rect height="19.5" rx="9.75" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="0.5" width="19.5" x="0.25" y="0.25" />
          <path d={svgPaths.p1ab22200} fill="var(--fill-0, #505050)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-[8px] relative shrink-0 w-[85px]" data-name="Slider">
      <div className="absolute inset-[-162.5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 34">
          <g id="Slider">
            <rect fill="var(--fill-0, #F0F0F0)" height="7.5" id="Sliderbar" rx="3.75" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="0.5" width="84.5" x="0.25" y="13.25" />
            <g filter="url(#filter0_d_16_1115)" id="Handle">
              <circle cx="43" cy="17" fill="var(--fill-0, white)" r="7" />
              <circle cx="43" cy="17" r="6.75" stroke="var(--stroke-0, #808080)" strokeWidth="0.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34" id="filter0_d_16_1115" width="34" x="26" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_16_1115" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_16_1115" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function In() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="In">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="In">
          <rect fill="var(--fill-0, white)" height="19.5" rx="9.75" width="19.5" x="0.25" y="0.25" />
          <rect height="19.5" rx="9.75" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="0.5" width="19.5" x="0.25" y="0.25" />
          <path d={svgPaths.p39e0a480} fill="var(--fill-0, #505050)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Zoom() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Zoom">
      <Out />
      <Slider />
      <In />
    </div>
  );
}

function Save() {
  return (
    <div className="bg-[#0076ff] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Save">
      <p className="[word-break:break-word] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        저장
      </p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Bottom">
      <Zoom />
      <Save />
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[8px] relative size-full">
        <Password />
        <Bottom />
      </div>
    </div>
  );
}

export default function MediaModal() {
  return (
    <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_10px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[10px] items-start relative rounded-[14px] size-full" data-name="MediaModal">
      <div aria-hidden className="absolute border-[#b0b0b0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Top />
      <Main />
    </div>
  );
}