/**
 * Shared centred section header: eyebrow / title / lead paragraph.
 * Used by 문제, 세 가지 부담, 핵심 기능 and 평판 시스템.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  leadWidth = 640,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  /** Figma pins the lead paragraph to a fixed width so it breaks predictably. */
  leadWidth?: number;
}) {
  return (
    <header className="flex flex-col items-center text-center">
      <p className="text-[12.5px] leading-none font-black tracking-[0.06em] text-primary">
        {eyebrow}
      </p>
      <h2 className="break-keep-ko mt-4 text-[28px] leading-[1.4] font-black tracking-[-0.03em] text-ink md:text-[38px]">
        {title}
      </h2>
      <p
        className="break-keep-ko mt-3.5 w-full text-[15px] leading-[1.8] tracking-[-0.015em] text-sub md:text-[16px]"
        style={{ maxWidth: leadWidth }}
      >
        {lead}
      </p>
    </header>
  );
}
