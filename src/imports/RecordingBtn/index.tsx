function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-4px] px-[12px] relative shrink-0">
      <p className="[word-break:break-word] font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        00:00
      </p>
    </div>
  );
}

function Send() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[20px] relative shrink-0 size-[40px]" data-name="Send">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[12px]" />
    </div>
  );
}

export default function RecordingBtn() {
  return (
    <div className="bg-[#e96464] relative rounded-[1000px] size-full" data-name="RecordingBTN">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame />
        <Send />
      </div>
      <div aria-hidden className="absolute border border-[#ff2626] border-solid inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}