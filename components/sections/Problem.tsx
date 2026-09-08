import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

/** Norcross & Vangarelli (1988) — bar heights are the artboard's, in px. */
const BARS = [
  { label: "1주", value: "77%", height: 151, color: "#6c5ce7", danger: false },
  { label: "1개월", value: "55%", height: 108, color: "#8b7cf0", danger: false },
  { label: "3개월", value: "43%", height: 84, color: "#a89df0", danger: false },
  { label: "6개월", value: "40%", height: 78, color: "#c0b8f5", danger: false },
  { label: "2년", value: "19%", height: 37, color: "#ef4444", danger: true },
];

const STATS = [
  {
    value: "91.4%",
    label: "성인 중 자기 관리에 관심이 있다고 응답",
    source: "엠브레인 트렌드모니터 · 만 19~59세 1,000명",
  },
  {
    value: "21.3%",
    label: "이미 챌린지·루틴 형성 앱을 이용 중",
    source: "관심에 그치지 않는 실질 수요",
  },
  {
    value: "70%",
    label: "자기관리 앱 이용자가 100일 안에 이탈",
    source: "Kidman et al.(2024) · 18개 연구 525,824명",
  },
  {
    value: "3지점",
    label: "시작·수행·유지 모두에서 부담이 발생",
    source: "챌린지를 ① 만들고 ② 인증하고 ③ 유지하는 지점",
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-canvas py-20 md:py-[110px]">
      <Container>
        <SectionHeading
          eyebrow="PROBLEM"
          title="결심은 쉽고, 지속은 어렵습니다"
          lead={
            <>
              루틴이 끊기는 원인은 의지가 아니라, 생성·인증 과정의 부담과
              <br className="hidden md:inline" /> 수행 결과가 신뢰 가능한 기록으로
              남지 않는 구조에 있습니다.
            </>
          }
        />

        <div className="mt-10 flex flex-col gap-10 rounded-3xl border border-line bg-surface p-7 shadow-card md:mt-[52px] md:gap-14 md:px-[52px] md:py-11 lg:flex-row">
          {/* 결심 이후 경과 시간에 따른 습관 지속률 */}
          <figure className="min-w-0 flex-1">
            <figcaption>
              <p className="text-[15px] leading-none font-bold tracking-[-0.015em] text-ink">
                결심 이후 경과 시간에 따른 습관 지속률
              </p>
              <p className="mt-1.5 text-[11.5px] leading-[1.5] tracking-[-0.015em] text-faint">
                Norcross &amp; Vangarelli (1988), Journal of Substance Abuse 1(2)
                · n=200
              </p>
            </figcaption>

            <div className="mt-[30px] flex h-[268px] items-end justify-between gap-2">
              {BARS.map((bar) => (
                <div
                  key={bar.label}
                  className="flex h-full w-[84px] max-w-[84px] min-w-0 flex-1 flex-col items-center justify-end gap-2.5"
                >
                  <p
                    className={`text-[19px] leading-none font-black tracking-[-0.02em] ${
                      bar.danger ? "text-danger" : "text-ink"
                    }`}
                  >
                    {bar.value}
                  </p>
                  <div
                    className="w-full max-w-[58px] rounded-[10px]"
                    style={{ height: bar.height, backgroundColor: bar.color }}
                  />
                  <p className="text-[12.5px] leading-none font-medium tracking-[-0.015em] text-faint">
                    {bar.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-[22px] rounded-xl bg-danger-bg px-4 py-3 text-[13.5px] leading-none font-bold tracking-[-0.015em] text-danger">
              결심한 5명 중 4명이 2년 안에 이탈합니다.
            </p>
          </figure>

          <dl className="flex w-full shrink-0 flex-col gap-3 lg:w-[400px]">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col gap-1.5 rounded-2xl bg-canvas px-[22px] py-[18px]"
              >
                <dt className="text-[26px] leading-none font-black tracking-[-0.025em] text-primary">
                  {stat.value}
                </dt>
                <dd>
                  <p className="break-keep-ko text-[14px] leading-[1.5] font-bold tracking-[-0.015em] text-ink">
                    {stat.label}
                  </p>
                  <p className="break-keep-ko mt-1.5 text-[11.5px] leading-[1.5] tracking-[-0.015em] text-faint">
                    {stat.source}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
