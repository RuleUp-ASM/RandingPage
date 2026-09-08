import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "룰업 — 꾸준함이 자산이 되는 루틴 평판 플랫폼",
  description:
    "매일의 인증은 스마트폰이 대신하고, 쌓인 기록은 사라지지 않습니다. 위치·걸음·수면·앱 사용 시간 신호로 루틴 수행을 자동 검증하고, 그 결과를 티어·점수로 축적합니다.",
  openGraph: {
    title: "룰업 — 꾸준함이 자산이 되는 루틴 평판 플랫폼",
    description:
      "만들기 쉬우니 시작하고, 인증할 일이 없으니 계속하고, 남는 것이 있으니 지속됩니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#6c5ce7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
