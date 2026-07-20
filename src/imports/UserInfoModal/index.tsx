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
            접속 중인 사용자
          </p>
          <Margin />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#808080] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        나
      </p>
    </div>
  );
}

function Username() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['SF_Pro:Medium',sans-serif] font-[510] items-center leading-[normal] min-w-px relative text-[14px] text-black" data-name="Username">
      <p className="relative shrink-0 w-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        E
      </p>
      <p className="flex-[1_0_0] min-w-px relative" style={{ fontVariationSettings: '"wdth" 100' }}>
        USERNAME
      </p>
    </div>
  );
}

function Done() {
  return (
    <div className="bg-[#0076ff] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Done">
      <p className="[word-break:break-word] font-['SF_Pro:Medium','Noto_Sans_KR:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        변경
      </p>
    </div>
  );
}

function Name() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center p-[8px] relative size-full">
          <Username />
          <Done />
        </div>
      </div>
    </div>
  );
}

function Password() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Password">
      <Title />
      <Name />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['SF_Pro:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#808080] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        기타 사용자
      </p>
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

function Name1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Name">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Username1 />
      </div>
    </div>
  );
}

function Username2() {
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

function Name2() {
  return (
    <div className="bg-[#eaeaea] relative rounded-[8px] shrink-0 w-full" data-name="Name">
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Username2 />
      </div>
    </div>
  );
}

function Messages() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Messages">
      <Name1 />
      <Name2 />
    </div>
  );
}

function Password1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Password">
      <Title1 />
      <Messages />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[8px] relative size-full">
        <Password />
        <Password1 />
      </div>
    </div>
  );
}

export default function UserInfoModal() {
  return (
    <div className="bg-[#f6f6f6] content-stretch drop-shadow-[0px_10px_20px_rgba(0,0,0,0.4)] flex flex-col gap-[10px] items-start relative rounded-[14px] size-full" data-name="UserInfoModal">
      <div aria-hidden className="absolute border-[#b0b0b0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Top />
      <Main />
    </div>
  );
}