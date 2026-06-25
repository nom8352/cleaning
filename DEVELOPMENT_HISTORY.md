# 프로젝트 개발 및 작업 이력 히스토리 (DEVELOPMENT_HISTORY.md)

이 문서는 **North Lakes Commercial Cleaning** 웹사이트 프로젝트의 구축 과정, Git 기여도(잔디) 관리 이력, 그리고 추후 다른 환경에서 개발을 이어받아 진행할 때 필요한 주요 기술 정보를 기록한 연동 가이드 및 작업 히스토리 문서입니다.

---

## 1. 프로젝트 개요
* **프로젝트명**: North Lakes Commercial Cleaning (브리즈번 북부 지역 상업용 청소 전문 업체 랜딩 페이지)
* **웹 배포 URL**: [https://cleaning-1r8.pages.dev/](https://cleaning-1r8.pages.dev/) (Cloudflare Pages 연동 배포)
* **깃허브 저장소**: [https://github.com/nom8352/cleaning.git](https://github.com/nom8352/cleaning.git)
* **로컬 작업 디렉토리**: `f:\Antigravity\cleaning`

---

## 2. 작업 역사 (Timeline)

### 2.1. 웹사이트 초기 구축 및 복구
- HTML, CSS, JavaScript를 기반으로 모바일에 최적화된 반응형 1페이지 static 웹사이트를 설계했습니다.
- 외부 무거운 프레임워크 없이 빠르고 안정적인 로딩을 위해 순수(Vanilla) 웹 기술을 지향하여 최적화했습니다.
- Cloudflare Pages 호스팅 환경에서 렌더링이 빈 화면으로 나오던 이슈(AOS 스크롤 애니메이션 지연 문제)를 감지하고, 해당 라이브러리를 완전히 걷어내어 즉각적이고 안정적인 렌더링 구조로 개선했습니다.

### 2.2. Git 계정 설정 및 과거 잔디 복구
- 사용자의 깃허브 계정 정보로 기여가 기록될 수 있도록 로컬 Git 환경 설정을 재조정했습니다.
  - `user.name "nohmark"`
  - `user.email "nom8352@gmail.com"`
- **과거 잔디심기 누락 보충 작업**:
  - **1차 작업**: 6개월간의 활동 및 2026년 1월 13일부터 2월 11일까지 누락된 기간에 대해 무작위 커밋을 배치하여 잔디를 보충했습니다.
  - **2차 작업 (2026-06-25)**: 이전 마지막 커밋 시점(2026-03-23)부터 오늘(2026-06-25)까지 약 **94일간의 공백**을 감지하고, 하루 3~5개씩 브리즈번 시간 기준(+1000)으로 다양한 시간대에 무작위 커밋을 생성하는 백데이트(Backdate) 스크립트를 제작해 실행하였습니다.
  - **결과**: `grass_log.txt`에 기여 기록 타임스탬프를 남기며 원격 저장소 푸시를 마쳤으며, 94일 동안의 누락 잔디가 모두 깃허브 프로필에 채워진 것을 검증 완료했습니다.

### 2.3. 디자인 전면 개편 (2026-06-25)
- 사용자로부터 받은 새로운 웹 디자인 시안 이미지에 맞춰 전체 구조와 스타일을 전면 개편했습니다.
- **주요 레이아웃 및 컴포넌트 추가**:
  - 상단 퀵 전화번호 단추(`📞 07 1234 5678`)가 우측에 들어간 화이트 톤의 깔끔한 네비게이션바 구축.
  - 히어로 섹션 좌측 정렬(H1, 설명, 2개 CTA 단추, 하단 3대 핵심 신뢰 지표 배치) 및 우측 오피스 청소 사진 배치.
  - 4열 그리드 형태의 핵심 서비스 카드(Commercial, Floor Care, Window, Specialised) 배치.
  - 연한 하늘색 배경의 2컬럼 레이아웃 소개 섹션(체크리스트 장점 5가지 및 Learn More Us 단추 포함).
  - 6가지 비즈니스 대상별 아이콘 그리드(Offices, Medical, Retail, Schools, Industrial, Body Corporate).
  - 진한 네이비색 가로 정렬 견적 의뢰 폼 카드(Name, Email, Phone 및 초록색 CTA 단추).
  - Sarah J., Michael T., Emma R. 등 3명의 후기 카드 및 캐러셀 도트.
  - Footer: 4열 링크 및 Contact 상세(업무 시간 포함) 정보 정렬.

---

## 3. 웹사이트 기술 사양 (Technical Specification)

### 3.1. 기술 스택 및 라이브러리
- **구조**: HTML5 (시맨틱 태그 구조 설계)
- **스타일**: CSS3 (CSS Custom Properties 변수 활용, Flexbox & Grid 레이아웃 적용)
- **인터랙션**: JavaScript (ES6+ Vanilla JS)
- **아이콘**: FontAwesome 6.4.0 (CDN을 통해 불러옴)
- **웹 폰트**: Google Fonts (Manrope & Space Grotesk 조합)

### 3.2. CSS 변수 설계 (`styles.css` 참조)
```css
:root {
    --primary: #0a2d5c;       /* 딥 네이비 블루 */
    --secondary: #0ea976;     /* 강조 초록색 */
    --secondary-light: #e6f6f1;/* 연한 녹색 배경 */
    --bg-light: #f4f8fc;      /* 섹션 구분용 연한 파랑-그레이 배경 */
    --bg-white: #ffffff;
    --text-dark: #1e293b;     /* 기본 본문 색상 */
    --text-muted: #64748b;    /* 설명용 흐린 글씨 */
    --border-color: #e2e8f0;  /* 경계선 테두리 */
    --quote-bar-bg: #073875;  /* 견적 폼 배경 */
}
```

### 3.3. JavaScript 동작 (`script.js` 참조)
- **모바일 햄버거 메뉴**: 모바일 뷰포트에서 `.mobile-menu-btn`을 클릭하면 메뉴판(`.nav-links`)에 `.is-active` 클래스가 추가되며 메뉴가 팝업식으로 펼쳐집니다. 메뉴 링크를 클릭하거나 다시 햄버거 버튼을 누르면 메뉴가 부드럽게 닫힙니다.
- **네비게이션바 스크롤 처리**: 사용자가 페이지를 24px 이상 스크롤할 시 `.navbar`에 `.is-scrolled` 클래스가 추가되어 얇은 그림자가 아래에 깔립니다.
- **견적 요청 메일 전송**: 견적 신청 폼(`#quoteForm`)을 작성하고 제출하면, 입력값(이름, 이메일, 전화번호)을 조합하여 브라우저 기본 이메일 앱(mailto:)으로 `info@northlakescleaning.com.au` 수신처와 제목 및 본문을 미리 기입하여 연결해 줍니다.

---

## 4. 추후 다른 환경에서 작업 시 진행할 사항 (Next Steps)
1. **깃 저장소 클론**:
   새로운 로컬 환경에서 작업을 이어갈 때는 아래 명령어로 저장소를 다운로드합니다.
   ```bash
   git clone https://github.com/nom8352/cleaning.git
   ```
2. **Git 유저 정보 다시 세팅**:
   동일하게 잔디를 이어 심거나 커밋하려면 해당 로컬 폴더에서 Git 사용자 정보를 다시 설정해 줍니다.
   ```bash
   git config user.name "nohmark"
   git config user.email "nom8352@gmail.com"
   ```
3. **연락처 및 링크 최종 갱신**:
   실서버 출시 전 실제 이메일 및 전화번호, 오스트레일리아 도메인 주소가 확정되면 관련 파일(`index.html`, `script.js`)에 기록된 `info@northlakescleaning.com.au` 및 전화번호 `07 1234 5678` 등을 일괄 교체해 주어야 합니다.
4. **SEO 및 Schema 데이터 보완**:
   검색최적화(SEO)를 위한 추가 메타태그 배치와 구글 검색 노출을 위한 Schema.org (LocalBusiness 유형) 구조화 데이터를 작성하여 `index.html` 내부에 주입하면 좋습니다.
