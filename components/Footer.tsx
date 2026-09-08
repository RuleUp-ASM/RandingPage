import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

const LINK_GROUPS = [
  {
    heading: "서비스",
    links: [
      { label: "기능 소개", href: "#features" },
      { label: "평판 시스템", href: "#reputation" },
      { label: "로드맵", href: "#cta" },
      { label: "앱 다운로드", href: "#cta" },
    ],
  },
  {
    heading: "정보",
    links: [
      { label: "이용약관", href: "#" },
      { label: "개인정보처리방침", href: "#" },
      { label: "문의하기", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#101422] pt-16 pb-14">
      <Container>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <Logo markSize={30} markRadius={9} glyphSize={16} wordSize={19} wordClassName="text-white" />
            <p className="mt-3.5 text-[13.5px] leading-[1.6] font-medium tracking-[-0.015em] text-[#9aa2ba]">
              꾸준함이 자산이 되는 루틴 평판 플랫폼
            </p>
            <p className="break-keep-ko mt-1.5 text-[12.5px] leading-[1.7] tracking-[-0.015em] text-[#6b7386]">
              2026년도 AI·SW 마에스트로 제17기 서울센터 · 이씨삼형제 (이준혁,
              이성은)
            </p>
          </div>

          <div className="flex gap-14">
            {LINK_GROUPS.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <p className="text-[12.5px] leading-none font-bold tracking-[-0.015em] text-white">
                  {group.heading}
                </p>
                <ul className="mt-3 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[12.5px] leading-none tracking-[-0.015em] text-[#6b7386] transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <hr className="mt-11 border-0 border-t border-[#262c40]" />

        <h2 className="mt-7 text-[11.5px] leading-none font-bold tracking-[0.02em] text-[#6b7386]">
          출처
        </h2>
        <p className="break-keep-ko mt-3 text-[11.5px] leading-[1.9] tracking-[-0.015em] text-[#5b6274]">
          엠브레인 트렌드모니터, 「일상생활 루틴(습관) 관련 인식 조사」, 전국 만
          19~59세 성인 남녀 1,000명 대상 온라인 조사 · Norcross, J. C. &amp;
          Vangarelli, D. J. (1988). Journal of Substance Abuse, 1(2), pp.127-134
          (n=200) · Matthews, G. (2015). The Impact of Commitment,
          Accountability, and Written Goals on Goal Achievement. Dominican
          University of California (n=267) · Kidman, P. G., Curtis, R. G.,
          Watson, A. &amp; Maher, C. A. (2024). Journal of Medical Internet
          Research, 26:e56897 (18개 연구·525,824명) · 리뷰 분석은 본 팀이 직접
          수집·분류한 스토어 리뷰 기준. 시장 규모(TAM 987만 / SAM 210만 / SOM
          1.68만)는 조사 비율을 만 19~59세 인구에 환산한 추정치이며, 출시 후 실제
          유입·전환 데이터로 재산정할 예정입니다.
        </p>

        <p className="mt-7 text-[12px] leading-none tracking-[-0.015em] text-[#4a5163]">
          © 2026 RuleUp. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
