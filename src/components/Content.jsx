export default function Content({ content }) {
  return (
    <div className="content-container flex flex-col items-start gap-[5px]">
      <img src={content.img} alt={content.title} className="w-[300px] rounded-[10px] mb-[3px]"/>
      <span className="text-[12px] text-[#d7fa00] border-2 border-[#d7fa00] py-[4px] px-[5px] rounded-[3px]">모집중</span>
      <div className="font-semibold text-[18px]">{content.title}</div>
      <p className="text-[12px] text-[#a0a0a0]">{content.subtitle}</p>
    </div>
  );
}
