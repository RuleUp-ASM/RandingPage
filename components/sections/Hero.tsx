import Image from "next/image";
import { Container } from "../ui/Container";
import { INSTAGRAM_URL } from "../../lib/links";

export function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(160deg, #f2f0fe 0%, #ffffff 37.931%, #faf9ff 68.966%)",
      }}
    >
      <Container className="flex flex-col items-center gap-12 py-16 md:py-[88px] lg:flex-row lg:items-center">
        <div className="w-full max-w-[600px] shrink-0 pt-0 lg:pt-[26px]">
          <h1 className="break-keep-ko text-[36px] leading-[1.32] font-black tracking-[-0.032em] text-ink md:text-[46px] lg:text-[54px]">
            꾸준함이 <span className="text-primary">자산</span>이 되는
            <br />
            루틴 평판 플랫폼
          </h1>

          {/* The artboard breaks these lines by hand; keep that only where the
              column is wide enough for it, and let the text wrap below that. */}
          <p className="break-keep-ko mt-[22px] max-w-[560px] text-[15px] leading-[1.8] tracking-[-0.015em] text-sub md:text-[17px]">
            매일의 인증은 스마트폰이 대신하고, 쌓인 기록은 사라지지 않습니다.
            <br className="hidden lg:inline" /> 위치·걸음·수면·앱 사용 시간 신호로
            루틴 수행을 자동 검증하고,
            <br className="hidden lg:inline" /> 그 결과를 티어·점수로 축적해
            꾸준함을 신뢰 가능한 자산으로 만듭니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-r from-[#6b5ce8] to-[#946bf5] px-[30px] py-[17px] text-[15px] leading-none font-bold tracking-[-0.015em] text-white shadow-cta transition-opacity hover:opacity-95"
            >
              인스타 구경하기
            </a>
            <a
              href="#features"
              className="rounded-xl border border-line bg-surface px-[30px] py-[17px] text-[15px] leading-none font-bold tracking-[-0.015em] text-ink transition-colors hover:bg-canvas"
            >
              서비스 살펴보기
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-center lg:h-[660px]">
          <Image
            src="/mockups/hero-devices.png"
            alt="룰업 앱의 홈 화면과 챌린지 피드 화면"
            width={1831}
            height={2153}
            priority
            sizes="(max-width: 1023px) 90vw, 610px"
            className="h-auto w-full max-w-[610px]"
          />
        </div>
      </Container>
    </section>
  );
}
