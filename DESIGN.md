# Portfolio Design System

## 1. Atmosphere & Identity

이 포트폴리오는 게임 클라이언트 개발자의 출시 이력을 정리한 기술 문서처럼 보여야 한다. 분위기는 어두운 그래파이트 작업대 위에 정돈된 릴리스 레코드를 올려둔 모습이며, 장식적인 게임 HUD보다 실제 프로젝트명, 플랫폼, 스토어 링크, 담당 경력이 먼저 읽혀야 한다. 시그니처는 밝은 라임 신호색이다. 라임은 출시 플랫폼, 현재 선택, 링크와 포커스처럼 의미가 있는 지점에만 사용한다. NVIDIA 계열의 기술적 밀도와 신호색 규율을 참고하되 브랜드 색상과 구성은 복제하지 않는다.

정보 순서는 방문자의 판단 흐름을 따른다.

1. Hero: 개발자 이름과 방향을 빠르게 파악한다.
2. Projects: 출시 게임, 플랫폼, 스토어와 상세 기여를 확인한다.
3. Career: 프로젝트를 뒷받침하는 실무와 학업 이력을 확인한다.
4. Stack: 사용 기술 범위를 확인한다.
5. Contact: 채용·협업 연락으로 전환한다.

## 2. Color

### Palette

| Role | Token | Value | Usage |
|---|---|---:|---|
| Canvas | `--color-canvas` | `#070907` | 페이지 배경 |
| Canvas raised | `--color-canvas-raised` | `#0a0d0b` | 상단 내비게이션 배경 |
| Surface | `--color-surface` | `#0e120f` | 주요 섹션 |
| Surface alternate | `--color-surface-alt` | `#131914` | 카드와 보조 영역 |
| Surface elevated | `--color-surface-elevated` | `#19211a` | 모달과 선택 상태 |
| Text primary | `--color-text` | `#f2f6f1` | 제목과 핵심 정보 |
| Text secondary | `--color-muted` | `#b5c0b6` | 본문과 설명 |
| Text tertiary | `--color-subtle` | `#7f8d81` | 보조 메타데이터 |
| Line | `--color-line` | `#273128` | 기본 구분선 |
| Line strong | `--color-line-strong` | `#3e5140` | 선택·강조 경계 |
| Accent deep | `--color-accent-deep` | `#5f8e35` | 눌림 상태 |
| Accent | `--color-accent` | `#9ddf62` | 플랫폼, 링크, 선택 상태 |
| Accent bright | `--color-accent-bright` | `#c9f6a4` | 포커스와 hover |
| Accent soft | `--color-accent-soft` | `rgba(157, 223, 98, 0.11)` | 선택 영역의 낮은 채도 배경 |
| Scrim | `--color-scrim` | `rgba(3, 5, 3, 0.82)` | 모달 배경 |

### Rules

- 라임은 상호작용, 선택, 출시 플랫폼에만 사용한다. 넓은 면적을 채우는 장식색으로 사용하지 않는다.
- 모든 표면은 같은 녹색 기운의 중성 계열을 사용한다.
- 프로젝트별 테마 색상은 제거하고 콘텐츠 계층과 이미지로 프로젝트를 구분한다.
- 원시 색상값은 `base.css`의 토큰 선언 외부에서 사용하지 않는다.

## 3. Typography

### Scale

| Level | Token | Size | Weight | Line height | Usage |
|---|---|---:|---:|---:|---|
| Display | `--type-display` | `clamp(3rem, 7vw, 5.5rem)` | 800 | 0.98 | 이름 |
| H1 | `--type-h1` | `clamp(2.25rem, 4.5vw, 3.75rem)` | 800 | 1.02 | 섹션 제목 |
| H2 | `--type-h2` | `clamp(1.65rem, 3vw, 2.5rem)` | 700 | 1.12 | 카드 제목 |
| H3 | `--type-h3` | `1.25rem` | 700 | 1.3 | 경력 제목 |
| Body large | `--type-body-lg` | `1.0625rem` | 400 | 1.75 | Hero 소개 |
| Body | `--type-body` | `1rem` | 400 | 기본 본문 |
| Body small | `--type-body-sm` | `0.875rem` | 400 | 설명과 메타데이터 |
| Caption | `--type-caption` | `0.75rem` | 700 | 태그와 플랫폼 |
| Overline | `--type-overline` | `0.6875rem` | 800 | 섹션 레이블 |

### Font Stack

- Primary: `Arial, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`
- Mono: `"SFMono-Regular", Consolas, "Liberation Mono", monospace`

### Rules

- 본문 폭은 약 65자 안쪽으로 제한한다.
- 숫자, 기간, 인덱스, 레이블은 mono 계열과 tabular 숫자를 사용한다.
- 한국어 본문은 `word-break: keep-all`, `overflow-wrap: anywhere`, `text-wrap: pretty`를 사용한다.
- 큰 제목은 `text-wrap: balance`를 사용하고 네 줄 이상으로 만들지 않는다.

## 4. Spacing & Layout

### Base Unit

기본 단위는 4px이다.

| Token | Value | Usage |
|---|---:|---|
| `--space-1` | 4px | 촘촘한 내부 간격 |
| `--space-2` | 8px | 인라인 요소 |
| `--space-3` | 12px | 작은 그룹 |
| `--space-4` | 16px | 기본 패딩 |
| `--space-5` | 20px | 카드 내부 |
| `--space-6` | 24px | 넉넉한 내부 패딩 |
| `--space-8` | 32px | 섹션 내 그룹 |
| `--space-10` | 40px | 큰 카드 내부 |
| `--space-12` | 48px | 섹션 간 구분 |
| `--space-16` | 64px | 페이지 리듬 |
| `--space-20` | 80px | 대형 여백 |

### Grid

- 최대 콘텐츠 폭: 1180px
- Desktop: 12-column 개념, 24px gutter, 프로젝트 카드는 미디어 5 / 설명 7 비율
- Tablet (`<= 980px`): Hero와 프로젝트 카드는 한 열, 경력 헤더와 본문도 한 열
- Mobile (`<= 720px`): 12px page gutter, 탭은 3행 세로 목록, 모든 주요 콘텐츠는 한 열
- 375px에서 페이지 본문은 가로 스크롤이 없어야 한다.
- 200% 확대에서도 순서와 키보드 접근성이 유지되어야 한다.

## 5. Components

### Topbar

- **Structure**: brand link + primary navigation
- **Variants**: desktop sticky / mobile document-flow
- **Spacing**: `--space-3`, `--space-4`, `--space-6`
- **States**: default, hover, active press, visible focus
- **Accessibility**: nav landmark, 44px minimum target, keyboard reachable
- **Motion**: color and transform only, micro timing
- **Layout**: cluster within shell; no independent scroll owner

### Panel / Section frame

- **Structure**: section heading + content
- **Variants**: hero, projects, timeline, compact strip, contact
- **Spacing**: `--space-6` through `--space-16`
- **States**: static; no hover motion on non-interactive panels
- **Accessibility**: labelled section and logical heading order
- **Motion**: none
- **Layout**: document-flow stack

### Button / Action link

- **Structure**: text inside link or button
- **Variants**: primary outline, secondary quiet, compact store link
- **Spacing**: 44px minimum height; `--space-3`/`--space-4` inline padding
- **States**: default, hover, pressed, focus; disabled/loading are not applicable to current synchronous actions
- **Accessibility**: correct native element, visible focus, sufficient contrast
- **Motion**: transform and color only, micro timing

### Project tabs

- **Structure**: tablist + three tabs + tabpanels
- **Variants**: selected, unselected, focus; empty personal-project panel
- **Spacing**: `--space-2` to `--space-4`
- **States**: default, hover, selected, focus, empty
- **Accessibility**: ARIA tab pattern and arrow/Home/End keyboard operation
- **Motion**: color/transform only
- **Layout**: three-column grid on desktop, full-width three-row list on mobile

### Release card

- **Structure**: media + index/title + platform-first tags + description + store links + detail action
- **Variants**: image, placeholder, platform-rich, detail-dialog trigger
- **Spacing**: `--space-4` through `--space-10`
- **States**: default, targeted anchor, action hover/focus/press
- **Accessibility**: meaningful alt text, semantic article, native links/buttons
- **Motion**: interactive children only; the card itself does not float decoratively
- **Layout**: sidebar split on desktop, one-column stack on tablet/mobile

### Tag / Chip

- **Structure**: text label
- **Variants**: platform accent, technology neutral, stack chip
- **States**: static; no false affordance
- **Accessibility**: contrast does not rely on color alone; border and weight reinforce platform state
- **Motion**: none

### Career timeline

- **Structure**: ordered list, year, role, metadata, highlights
- **Variants**: work, education, linked project
- **Spacing**: `--space-3` through `--space-8`
- **States**: link hover/focus where present
- **Accessibility**: semantic ordered list and definition lists
- **Motion**: none
- **Layout**: section-heading sidebar + readable content column; one column at tablet/mobile

### Project dialog

- **Structure**: backdrop + labelled dialog + close button + detail content + links
- **Variants**: closed/open; optional subtitle/overview/highlights/links
- **Spacing**: `--space-4` through `--space-10`
- **States**: open, close hover/focus/press, internal link states
- **Accessibility**: modal semantics, focus trap, Escape, backdrop close, background inert, trigger focus restore
- **Motion**: no decorative entry animation; reduced motion safe
- **Layout**: viewport-centered scroll owner inside the dialog

실제 페이지가 primitive showcase의 역할을 한다. Topbar, 버튼, 탭, 카드, 태그, 타임라인, 빈 탭, 모달의 모든 현재 적용 상태를 375/768/1280px에서 검증한다.

## 6. Motion & Interaction

| Type | Token | Duration | Easing | Usage |
|---|---|---:|---|---|
| Micro | `--motion-micro` | 140ms | ease-out | hover, press, focus-adjacent state |
| Standard | `--motion-standard` | 220ms | cubic-bezier(0.2, 0.7, 0.2, 1) | tab state transition |

- 애니메이션은 `transform`, `opacity`, `filter`만 사용한다.
- 정적 카드와 섹션에는 hover 이동을 적용하지 않는다.
- 누를 수 있는 요소만 hover/pressed 피드백을 가진다.
- `prefers-reduced-motion: reduce`에서는 비필수 transition과 smooth scroll을 제거한다.

## 7. Depth & Surface

전략은 tonal-shift와 얇은 경계를 결합한 mixed 방식이다.

| Level | Token / treatment | Usage |
|---|---|---|
| Base | `--color-canvas` | 문서 배경 |
| Section | `--color-surface` + `--color-line` | 주요 섹션 |
| Nested | `--color-surface-alt` | 카드와 메타 블록 |
| Selected | `--color-accent-soft` + accent edge | 탭과 플랫폼 |
| Floating | `--shadow-floating` | sticky topbar와 dialog만 |

- 모든 표면은 2px, 4px, 8px의 작은 radius만 사용한다.
- 그림자는 떠 있어야 하는 요소에만 사용한다.
- 배경 격자는 낮은 대비로 제한해 텍스트와 경쟁하지 않게 한다.

## 8. Accessibility Constraints & Accepted Debt

### Constraints

- WCAG 2.2 AA: 일반 텍스트 4.5:1, 큰 텍스트와 UI 경계 3:1 이상을 목표로 한다.
- 모든 링크, 탭, 버튼은 눈에 보이는 `:focus-visible` 상태와 44px 이상의 터치 영역을 가진다.
- 문서 순서와 시각 순서는 일치한다.
- 프로젝트 탭과 모달은 키보드로 완전히 조작 가능해야 한다.
- 375px, 200% 확대, 한국어 긴 문장에서도 콘텐츠가 잘리거나 음절 중간에 끊기지 않아야 한다.
- `prefers-reduced-motion`을 존중한다.
- Skip link로 주요 콘텐츠로 바로 이동할 수 있어야 한다.

### Accepted Debt

없음. Critical, Major 접근성 또는 가독성 문제는 수용하지 않고 수정 후 재검증한다.
