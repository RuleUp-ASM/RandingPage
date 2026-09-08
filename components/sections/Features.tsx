import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckIcon } from "../ui/icons";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    eyebrow: "GROUP CHALLENGE",
    title: "함께하는 그룹 챌린지",
    body: "같은 루틴을 같은 규칙으로 함께 수행하는 그룹 단위 챌린지입니다. 서로의 수행 현황을 방 안에서 확인해, 앱 안에서 자연스럽게 “지켜봐 주는 사람”이 생기는 구조로 설계했습니다.",
    bullets: [
      "초대 링크로 지인을 바로 부르거나, 관심 분야에서 비슷한 목표의 사람을 찾아 참여",
      "방 스레드에 인증 성공·실패·공지가 시간순으로 쌓이고, 방 내부·외부 랭킹으로 이어짐",
      "솔로 챌린지도 지원하지만, 지속률이 높은 그룹 참여를 기본 동선으로 설계",
    ],
    image: "/mockups/feature-group-challenge.png",
    alt: "그룹 챌린지 랭킹 화면 — 멤버별 성공률과 연속 일수",
  },
  {
    eyebrow: "AI DRAFT",
    title: "한 문장이면 챌린지가 완성됩니다",
    body: "설명만 입력하면 AI가 카테고리·인증 방법·목표값(횟수·거리·요일)·일정까지 챌린지 초안을 자동 생성합니다. 사용자는 확인만 하면 됩니다.",
    bullets: [
      "추천 챌린지를 누르면 LLM 호출 없이 템플릿 기본값으로 즉시 초안 완성",
      "Gemini 3.5 Flash-Lite 기본 · 장애 시 Bedrock Nova Lite로 자동 폴백",
      "닉네임·제목·설명은 LLM이, 프로필·챌린지 이미지는 Cloud Vision SafeSearch가 사후 심사",
    ],
    image: "/mockups/feature-ai-draft.png",
    alt: "한 문장으로 챌린지 초안을 만드는 생성 화면",
  },
  {
    eyebrow: "AUTO VERIFICATION",
    title: "인증하려고 하는 일이 없습니다",
    body: "위치·걸음·거리·앱 사용 시간·기상·수면 신호를 스마트폰 표준 API(Geofence · Health Connect · UsageStats)가 스스로 수집하고, 최종 판정은 서버에서만 수행합니다.",
    bullets: [
      "판정 모델 6종 · LLM이 아닌 규칙 엔진이 판정해 같은 신호는 항상 같은 결과",
      "신호 30분 배치 전송 · 00시 판정 · 03시 확정, 실패 사유를 그대로 설명",
      "변조된 앱이라도 성공·실패를 직접 확정할 수 없는 서버 판정 구조",
    ],
    image: "/mockups/feature-auto-verification.png",
    alt: "자동 인증 결과가 날짜별로 기록된 캘린더 화면",
  },
  {
    eyebrow: "REPUTATION",
    title: "꾸준함이 기록으로 남습니다",
    body: "브론즈부터 루비까지 5단계 티어. 인증 성공·실패에 따라 일 단위로 점수가 적립·차감되고, 결과가 그때그때 반영됩니다.",
    bullets: [
      "티어별 손익분기 달성률을 다르게 설계 — 브론즈 30% → 루비 95%",
      "부정행위·신고 강퇴·중도 탈퇴에는 별도의 사건성 감점 적용",
      "누적 인증 기록을 외부 공유 가능한 평판 포트폴리오로 확장",
    ],
    image: "/mockups/feature-reputation.png",
    alt: "티어와 누적 점수를 보여주는 평판 프로필 화면",
  },
];

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  // Rows alternate: even rows put the device on the left, odd rows on the right.
  const deviceFirst = index % 2 === 0;

  return (
    // 520 : 680 device/copy split from the artboard, expressed as a ratio so
    // the row still fits when the content column is narrower than 1200px.
    <article className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card lg:grid lg:min-h-[600px] lg:grid-cols-[13fr_17fr]">
      <div
        className={`flex items-center justify-center px-6 py-10 lg:py-0 ${
          deviceFirst ? "lg:order-1" : "lg:order-2"
        }`}
        style={{
          backgroundImage: "linear-gradient(135deg, #f1effd 0%, #eae8fb 100%)",
        }}
      >
        <Image
          src={feature.image}
          alt={feature.alt}
          width={911}
          height={1712}
          sizes="(max-width: 1023px) 70vw, 304px"
          className="h-auto w-full max-w-[240px] lg:max-w-[304px]"
        />
      </div>

      <div
        className={`flex flex-col justify-center px-7 py-10 md:px-14 md:py-12 ${
          deviceFirst ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <p className="text-[11.5px] leading-none font-black tracking-[0.03em] text-primary">
          {feature.eyebrow}
        </p>
        <h3 className="break-keep-ko mt-3.5 text-[24px] leading-[1.4] font-black tracking-[-0.03em] text-ink md:text-[29px]">
          {feature.title}
        </h3>
        <p className="break-keep-ko mt-3.5 text-[15px] leading-[1.8] tracking-[-0.015em] text-sub">
          {feature.body}
        </p>

        <ul className="mt-[26px] flex flex-col gap-[13px]">
          {feature.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5">
              <CheckIcon className="mt-[3px] shrink-0" />
              <span className="break-keep-ko text-[14px] leading-[1.65] font-medium tracking-[-0.015em] text-ink">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-canvas py-20 md:py-[110px]">
      <Container>
        <SectionHeading
          eyebrow="FEATURES"
          title="만들고, 지키고, 남기는 네 가지"
          lead="그룹 챌린지 · AI 초안 생성 · 다중 신호 자동 인증 · 평판 시스템"
        />

        <div className="mt-10 flex flex-col gap-7 md:mt-14">
          {FEATURES.map((feature, index) => (
            <FeatureRow key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
