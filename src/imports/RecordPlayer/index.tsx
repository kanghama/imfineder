function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[10px] items-center justify-center leading-[normal] mr-[-4px] px-[12px] relative shrink-0 text-[12px] text-black whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        00:00
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        /
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        00:00
      </p>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-[8px] mr-[-4px] relative shrink-0 w-[105px]" data-name="Slider">
      <div className="absolute inset-[-162.5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 34">
          <g id="Slider">
            <rect fill="var(--fill-0, #F0F0F0)" height="7.5" id="Sliderbar" rx="3.75" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="0.5" width="84.5" x="10.25" y="13.25" />
            <g filter="url(#filter0_d_25_2599)" id="Handle">
              <circle cx="53" cy="17" fill="var(--fill-0, white)" r="7" />
              <circle cx="53" cy="17" r="6.75" stroke="var(--stroke-0, #808080)" strokeWidth="0.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34" id="filter0_d_25_2599" width="34" x="36" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_25_2599" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_25_2599" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Send() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px]" data-name="Send">
      <div className="bg-[#404040] relative rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

export default function RecordPlayer() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1000px] size-full" data-name="RecordPlayer">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        <Slider />
        <Send />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}