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
          <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#404040] text-[12px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
            폴더 추가
          </p>
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden className="absolute border-[#b0b0b0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[4px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] min-w-px relative text-[#b0b0b0] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          입력
        </p>
      </div>
    </div>
  );
}

function ChatroomName() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="ChatroomName">
      <p className="[word-break:break-word] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        폴더 이름
      </p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white drop-shadow-[0px_0px_4px_rgba(0,0,0,0.1)] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden className="absolute border-[#b0b0b0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[4px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] min-w-px relative text-[#b0b0b0] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          입력
        </p>
      </div>
    </div>
  );
}

function Password() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Password">
      <p className="[word-break:break-word] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        비밀번호 (선택)
      </p>
      <Frame1 />
    </div>
  );
}

function Done() {
  return (
    <div className="bg-[#0076ff] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Done">
      <p className="[word-break:break-word] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        완료
      </p>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Bottom">
      <Done />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[8px] relative size-full">
        <ChatroomName />
        <Password />
        <Bottom />
      </div>
    </div>
  );
}

export default function NewChatRoomModal() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-[14px] size-full" data-name="NewChatRoomModal">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Top />
        <Main />
      </div>
      <div aria-hidden className="absolute border-[#b0b0b0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.4)]" />
    </div>
  );
}