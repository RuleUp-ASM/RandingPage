# RuleUp 랜딩 페이지

Figma 디자인 [RuleUp 디자인 — 랜딩 페이지](https://www.figma.com/design/JDWCrvnTlAyrtzMI2MtpcC/RuleUp-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=1322-2)
(node `1322:2`, 1440 × 7588)를 Next.js로 구현한 랜딩 페이지입니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 정적 프리렌더
```

## 스택

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 — 디자인 토큰은 `app/globals.css`의 `@theme`에 정의
- Noto Sans KR (Google Fonts, 400/500/700/900)

## 구조

```
app/
  layout.tsx          메타데이터 · 폰트
  globals.css         디자인 토큰 (Figma 변수와 이름 동일)
  page.tsx            섹션 조립
components/
  Nav.tsx             상단 내비게이션 (sticky)
  Footer.tsx
  sections/
    Hero.tsx          꾸준함이 자산이 되는 루틴 평판 플랫폼
    Problem.tsx       PROBLEM · 습관 지속률 차트 + 통계
    Solution.tsx      SOLUTION · 시작/수행/유지 세 가지 부담
    Features.tsx      FEATURES · 4개 기능 행
    Reputation.tsx    REPUTATION SYSTEM · 5단계 티어
    Cta.tsx
  ui/                 Container · SectionHeading · Logo · icons
public/
  mockups/            Figma에서 3× PNG로 내보낸 앱 목업
  icons/              Figma에서 내보낸 SVG (컴포넌트 원본)
```

## 디자인 대비 결정 사항

- **앱 목업**은 Figma의 기기 프레임을 3× PNG로 내보내 `public/mockups/`에 커밋했습니다.
  마케팅용 스크린샷이라 DOM으로 재구성하지 않았습니다.
- **반응형**: 아트보드는 1440 데스크톱만 있어, 그 아래는 직접 설계했습니다.
  본문 폭은 xl에서 정확히 1200px(120px 거터), 그 아래에서는 거터가 줄어듭니다.
  기능 행은 lg 미만에서 세로로 쌓이고, 티어 카드는 2열로 접힙니다.
- **내비게이션**은 sticky로 처리했고, md 미만에서는 섹션 링크가 두 번째 줄에
  가로 스크롤로 남습니다. (아트보드에는 모바일 정의가 없습니다.)
- 아트보드의 수동 줄바꿈은 데스크톱에서만 유지되고(`<br className="hidden md:inline" />`),
  좁은 화면에서는 자연스럽게 흐릅니다.

## 남은 작업

- 내비게이션의 **로드맵** 링크는 대응 섹션이 디자인에 없어 `#cta`를 가리킵니다.
  로드맵 섹션이 생기면 `components/Nav.tsx`의 `MENU`에서 앵커를 바꿔주세요.
- 푸터의 이용약관 · 개인정보처리방침 · 문의하기는 아직 `#` 플레이스홀더입니다.
- 앱 다운로드 버튼은 현재 CTA 섹션으로 스크롤합니다. 스토어 URL로 교체 필요.
