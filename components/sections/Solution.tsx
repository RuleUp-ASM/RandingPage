import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowDownIcon } from "../ui/icons";

const CARDS = [
  {
    no: "01",
    title: "시작 부담",
    now: "챌린지를 만드는 것 자체가 일입니다. 무엇을, 얼마나, 어떤 방식으로 인증할지 전부 직접 정해야 하고, 함께할 사람도 스스로 구해야 합니다.",
    ruleup:
      "한 문장만 쓰면 AI가 카테고리·인증 방법·목표값·일정까지 초안을 만들어 줍니다. 추천 챌린지를 누르면 LLM 호출 없이 즉시 완성되고, 초대 링크로 지인을 바로 부릅니다.",
  },
  {
    no: "02",
    title: "수행 부담",
    now: "인증이 또 다른 부담이 됩니다. 매일 사진을 찍어 올려야 하고, 그 기준마저 모호합니다. 지켰는데 인증 때문에 실패하는 일이 반복됩니다.",
    ruleup:
      "위치·걸음·앱 사용 시간·기상·수면 신호를 스마트폰이 스스로 수집해 판정합니다. 사진을 찍거나 체크박스를 누르는 인증 행동 자체가 없어집니다.",
  },
  {
    no: "03",
    title: "유지 부담",
    now: "계속할 이유가 남지 않습니다. 챌린지가 끝나면 기록도 함께 사라지고, 남는 것이 없으니 다음 챌린지를 시작할 동기도 없습니다.",
    ruleup:
      "누적 인증 결과가 티어·점수와 통계로 환산되어 꾸준함을 증명하는 자산으로 남고, 다른 챌린지에 참여할 때 신뢰의 근거가 됩니다.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-surface py-20 md:py-[110px]">
      <Container>
        <SectionHeading
          eyebrow="SOLUTION"
          title="룰업은 세 곳을 하나씩 막습니다"
          lead={
            <>
              이탈은 시작·수행·유지 세 지점에서 발생합니다.
              <br className="hidden md:inline" /> 룰업은 각 지점의 부담을
              제거하되, 함께한다는 동기는 그대로 둡니다.
            </>
          }
        />

        <div className="mt-10 grid gap-6 md:mt-[52px] lg:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.no}
              className="flex flex-col rounded-[22px] border border-line bg-surface p-[30px] shadow-card"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-[30px] items-center justify-center rounded-[9px] bg-primary text-[13px] leading-none font-black text-white">
                  {card.no}
                </span>
                <h3 className="text-[21px] leading-none font-black tracking-[-0.025em] text-ink">
                  {card.title}
                </h3>
              </div>

              <div className="mt-[22px] rounded-[14px] bg-canvas px-[18px] py-4">
                <p className="text-[11px] leading-none font-black tracking-[0.02em] text-faint">
                  지금
                </p>
                <p className="break-keep-ko mt-2 text-[13.5px] leading-[1.75] tracking-[-0.015em] text-sub">
                  {card.now}
                </p>
              </div>

              <div className="flex justify-center py-3">
                <ArrowDownIcon />
              </div>

              <div className="rounded-[14px] border border-primary-border bg-primary-50 px-[18px] py-4">
                <p className="text-[11px] leading-none font-black tracking-[0.02em] text-primary">
                  룰업
                </p>
                <p className="break-keep-ko mt-2 text-[13.5px] leading-[1.75] font-medium tracking-[-0.015em] text-ink">
                  {card.ruleup}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="break-keep-ko mx-auto mt-9 w-fit rounded-2xl bg-ink px-5 py-4 text-center text-[15px] leading-[1.5] font-bold tracking-[-0.015em] text-white md:px-8 md:py-[22px] md:text-[16px]">
          만들기 쉬우니 시작하고, 인증할 일이 없으니 계속하고, 남는 것이 있으니
          지속됩니다.
        </p>
      </Container>
    </section>
  );
}
