import { Container } from "../ui/Container";
import { INSTAGRAM_URL } from "../../lib/links";

export function Cta() {
  return (
    <section
      id="cta"
      className="py-20 md:py-[104px]"
      style={{
        backgroundImage:
          "linear-gradient(151deg, #6b5ce8 0%, #9e66f2 74.074%)",
      }}
    >
      <Container className="flex flex-col items-center text-center">
        <h2 className="break-keep-ko text-[32px] leading-[1.4] font-black tracking-[-0.032em] text-white md:text-[44px]">
          오늘의 인증은 앱이 합니다
        </h2>

        <p className="break-keep-ko mt-[18px] max-w-[720px] text-[15px] leading-[1.8] font-medium tracking-[-0.015em] text-white/90 md:text-[17px]">
          만들기 쉬우니 시작하고, 인증할 일이 없으니 계속하고, 남는 것이 있으니
          지속됩니다.
          <br className="hidden md:inline" /> 지금 룰업에서 첫 챌린지를 만들어
          보세요.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-8 py-[18px] text-[15px] leading-none font-bold tracking-[-0.015em] text-primary shadow-on-brand transition-opacity hover:opacity-90"
          >
            인스타 구경하기
          </a>
          <a
            href="#features"
            className="rounded-xl border border-white/45 bg-white/15 px-8 py-[18px] text-[15px] leading-none font-bold tracking-[-0.015em] text-white transition-colors hover:bg-white/25"
          >
            앱 설명 보기
          </a>
        </div>

        <p className="mt-[22px] text-[12.5px] leading-none font-medium tracking-[-0.015em] text-white/75">
          1차 출시 2026. 10. 01. · Android 8.0 이상
        </p>
      </Container>
    </section>
  );
}
