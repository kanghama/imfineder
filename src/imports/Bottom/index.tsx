import svgPaths from "./svg-sfapvvb8dk";
import imgBottom from "./08e0bde4dbc287a302dcb1bcad6c019fe1003692.png";

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

function Function() {
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

function Function1() {
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
      <Function />
      <Function1 />
    </div>
  );
}

export default function Bottom() {
  return (
    <div className="content-stretch flex items-start p-[14px] relative size-full" data-name="Bottom">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBottom} />
      <Inputarea />
    </div>
  );
}