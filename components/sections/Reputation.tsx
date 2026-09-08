import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const TIERS = [
  { n: 1, name: "브론즈", en: "BRONZE", color: "#c08552", desc: "시작 티어 · 가입 시 부여" },
  { n: 2, name: "실버", en: "SILVER", color: "#9aa5b1", desc: "기준이 조금씩 올라갑니다" },
  { n: 3, name: "골드", en: "GOLD", color: "#e0a800", desc: "중간 구간" },
  { n: 4, name: "다이아", en: "DIAMOND", color: "#4fb3f7", desc: "상위 구간" },
  { n: 5, name: "루비", en: "RUBY", color: "#e0245e", desc: "최상위 티어" },
];

const POINTS = [
  {
    title: "일 단위 정산",
    body: "인증 성공·실패에 따라 점수가 그때그때 적립·차감되고, 결과가 바로 반영됩니다. 이의가 인용되면 차감된 점수를 복원합니다.",
  },
  {
    title: "사건성 감점",
    body: "부정행위·신고 강퇴·중도 탈퇴에는 일반 실패와 다른 별도의 감점을 적용합니다.",
  },
  {
    title: "평판 포트폴리오",
    body: "누적 인증 기록을 외부에 공유 가능한 포트폴리오로 확장해, 꾸준함이 앱 안에서만 소비되지 않고 자기 PR에 쓰이는 자산이 되도록 설계했습니다.",
  },
];

export function Reputation() {
  return (
    <section id="reputation" className="bg-surface py-20 md:py-[110px]">
      <Container>
        <SectionHeading
          eyebrow="REPUTATION SYSTEM"
          title="상위 티어일수록 꾸준함 없이는 유지가 어렵습니다"
          leadWidth={700}
          lead={
            <>
              브론즈부터 루비까지 5단계. 인증 성공·실패에 따라 일 단위로 점수가
              적립·차감되고,
              <br className="hidden md:inline" /> 티어별 손익분기 달성률을 다르게
              설계했습니다.
            </>
          }
        />

        <div className="mt-10 rounded-3xl border border-line bg-canvas p-6 md:mt-[52px] md:px-12 md:py-11">
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {TIERS.map((tier) => {
              const isTop = tier.n === TIERS.length;
              return (
                <li
                  key={tier.name}
                  className="flex flex-col items-center rounded-[18px] bg-surface px-5 pt-6 pb-[22px] text-center"
                  style={{
                    border: isTop
                      ? `2px solid ${tier.color}`
                      : "1px solid var(--color-line)",
                  }}
                >
                  <span
                    className="flex size-[46px] items-center justify-center rounded-full text-[17px] leading-none font-black"
                    style={{
                      color: tier.color,
                      backgroundColor: `color-mix(in srgb, ${tier.color} 14%, transparent)`,
                      border: `1.5px solid color-mix(in srgb, ${tier.color} 45%, transparent)`,
                    }}
                  >
                    {tier.n}
                  </span>
                  <p className="mt-3.5 text-[18px] leading-none font-black tracking-[-0.02em] text-ink">
                    {tier.name}
                  </p>
                  <p
                    className="mt-[7px] text-[10px] leading-none font-bold tracking-[0.03em]"
                    style={{ color: tier.color }}
                  >
                    {tier.en}
                  </p>
                  <p className="break-keep-ko mt-3 text-[11.5px] leading-[1.5] tracking-[-0.015em] text-faint">
                    {tier.desc}
                  </p>
                </li>
              );
            })}
          </ol>

          <div
            className="mt-[30px] h-3 rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #c08552 0%, #9aa5b1 25%, #e0a800 50%, #4fb3f7 75%, #e0245e 100%)",
            }}
          />

          <div className="mt-3 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-[13px] leading-none font-bold tracking-[-0.015em] text-bronze">
              손익분기 달성률 30%
            </p>
            <p className="text-[12.5px] leading-none font-medium tracking-[-0.015em] text-faint">
              티어가 오를수록 유지 기준이 높아집니다
            </p>
            <p className="text-[13px] leading-none font-bold tracking-[-0.015em] text-ruby">
              손익분기 달성률 95%
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {POINTS.map((point) => (
            <article
              key={point.title}
              className="rounded-[18px] border border-primary-border bg-primary-50 px-[26px] py-6"
            >
              <h3 className="text-[17px] leading-[1.45] font-black tracking-[-0.02em] text-ink">
                {point.title}
              </h3>
              <p className="break-keep-ko mt-2.5 text-[13.5px] leading-[1.75] tracking-[-0.015em] text-sub">
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
