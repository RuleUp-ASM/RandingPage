import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

const MENU = [
  { label: "문제", href: "#problem" },
  { label: "해법", href: "#solution" },
  { label: "기능", href: "#features" },
  { label: "평판", href: "#reputation" },
  // The artboard has no roadmap section yet; the closest anchor is the
  // release-date CTA. Repoint once a 로드맵 section exists.
  { label: "로드맵", href: "#cta" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface shadow-nav">
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <a href="#top" aria-label="룰업 홈">
          <Logo />
        </a>

        <nav
          aria-label="주요 섹션"
          className="hidden items-center gap-6 md:flex lg:gap-[34px]"
        >
          {MENU.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] leading-none font-medium tracking-[-0.015em] text-sub transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="shrink-0 rounded-[10px] bg-primary px-5 py-[11px] text-[14px] leading-none font-bold tracking-[-0.015em] text-white transition-opacity hover:opacity-90"
        >
          앱 다운로드
        </a>
      </Container>

      {/* The artboard is desktop-only. Below md the same anchors stay reachable
          as a scrollable row rather than disappearing behind a JS menu. */}
      <nav
        aria-label="주요 섹션"
        className="flex gap-5 overflow-x-auto border-t border-line px-6 py-2.5 md:hidden"
      >
        {MENU.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="shrink-0 text-[13px] leading-none font-medium tracking-[-0.015em] text-sub"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
