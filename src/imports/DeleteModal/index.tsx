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
          <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#404040] text-[12px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>{` `}</p>
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Done() {
  return (
    <div className="bg-[red] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Done">
      <p className="[word-break:break-word] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        삭제
      </p>
    </div>
  );
}

function Done1() {
  return (
    <div className="bg-[#c0c0c0] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Done">
      <p className="[word-break:break-word] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        취소
      </p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-full" data-name="Bottom">
      <Done />
      <Done1 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[8px] relative size-full">
        <p className="[word-break:break-word] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
          폴더를 삭제하시겠습니까?
        </p>
        <Bottom />
      </div>
    </div>
  );
}

export default function DeleteModal() {
  return (
    <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_10px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[10px] items-start relative rounded-[14px] size-full" data-name="DeleteModal">
      <div aria-hidden className="absolute border-[#b0b0b0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Top />
      <Main />
    </div>
  );
}