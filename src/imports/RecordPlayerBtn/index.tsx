import svgPaths from "./svg-38nqu05apu";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-4px] px-[12px] relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        00:00
      </p>
    </div>
  );
}

function Send() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-4px] overflow-clip p-[20px] relative shrink-0 size-[40px]" data-name="Send">
      <div className="bg-[#404040] relative rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

function Send1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Send">
          <path d={svgPaths.pc85d980} fill="var(--fill-0, #404040)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function RecordPlayerBtn() {
  return (
    <div className="bg-[#fafafa] relative rounded-[1000px] size-full" data-name="RecordPlayerBTN">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        <Send />
        <Send1 />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}