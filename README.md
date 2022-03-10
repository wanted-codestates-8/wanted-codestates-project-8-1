## 📑 프로젝트 소개

WANTED & CODESTATES 프리온보딩 코스

TEAM 8 팀기업과제 3번 입니다.

<br>

### < 로그프레소 >

PROJECT PERIOD: 2022.03.07 ~ 2022.03.08

<br>

[배포링크](https://wanted-8-3-i7.netlify.app/)

<br>

## ✨ 주요 기능

- Available Options와 Selected Options로 나뉘어져있는 듀얼셀렉터입니다.
- 초기셋팅으로 데이터가 양쪽으로 나뉘어져있으며 사용자의 선택에 따라 Available이 될 수도 Selected가 될 수도 있습니다.
- 옵션 이동은 드래그 앤 드롭으로도 가능하고 셀렉터의 가운데 버튼메뉴로도 가능합니다.
- 버튼메뉴는 순서대로 초기화 | 전부 옮기기(>> / <<) | 선택된 항목 옮기기(> / <) 입니다.
- 아이템 선택은 Ctrl버튼, Shift버튼 모두 적용됩니다.
- 아이템 순서 변경도 드래그 앤 드롭으로 가능합니다.
- 소메뉴에서는 타이틀 및 아이템 폰트 사이즈, 가로세로 크기 변경이 가능하며 검색창, 선택된 아이템 갯수 창을 켜고 끌 수 있습니다.
- 소메뉴에서 하나씩만 옮기기 옵션을 ON 했을 시에는 Ctrl, Shift 버튼이 적용되지 않습니다.
- 검색기능은 각각의 옵션에서 적용됩니다.

<br>

### 🧔 메인

<br>

- 소메뉴: 크기 / 타이틀 변경

<img src="https://user-images.githubusercontent.com/85816029/157239566-d1c81750-371e-4004-854f-68185c72a4b4.gif" width="700px" height="450px">

<br>

- 소메뉴: 타이틀, 검색창, 선택된 아이템 갯수 ON / OFF 및 글자 크기 변경

<img src="https://user-images.githubusercontent.com/85816029/157239504-378dbcb4-b68e-42a3-bba9-e4c353a8cd79.gif" width="700px" height="450px">

<br>

- 중앙 버튼

<img src="https://user-images.githubusercontent.com/85816029/157239546-ed02f8c4-ee94-4099-a43c-6195cdaa3e92.gif" width="700px" height="450px">

<br>

- 검색 기능

<img src="https://user-images.githubusercontent.com/85816029/157239883-31ff13d5-3721-4fd3-a4c5-04bb37c4656f.gif" width="700px" height="450px">

<br>

- Ctrl 기능 시연

<img src="https://user-images.githubusercontent.com/85816029/157239529-5f21c62e-d0d9-4da5-8731-51b6ebcf31c7.gif" width="700px" height="450px">

<br>

- Shift 기능 시연

<img src="https://user-images.githubusercontent.com/85816029/157239536-2cd3325b-8251-4f80-a34b-e3e1a60eb070.gif" width="700px" height="450px">

<br>

- Ctrl / Shift 기능 시연

<img src="https://user-images.githubusercontent.com/85816029/157239542-1bd30a98-064c-42e1-83dd-0aca5ee35667.gif" width="700px" height="450px">

<br>

### 구현한 기능 목록 및 어려웠던 점

<br>

1. 리덕스

[ 김진기 ]

- 구현 내용 & 방법
  - 리덕스 데이터 구조 구현
  - 검색창 필터링 기능 구현
- 구현하면서 어려웠던 점
  - redux-persist와 redux-toolkit을 처음 사용해봐서 익히는 데 시간이 조금 걸렸습니다.
  - 한 파일에서 여러 명이 작업을 하다보니 머지할 때 쉽지 않았습니다.

<br>

2. 셀렉터

[ 이승우 ]

- 구현 내용 & 방법
  - 드래그 앤 드롭 기능 구현
  - 버튼 기능 구현
  - shift + 클릭 기능 구현
- 구현하면서 어려웠던 점
  - 단일 클릭, ctrl + 클릭, shift + 클릭이 각각 적용될 때와 혼합되어 적용될 경우의 수가 많아서 적절한 동작을 하도록 로직을 분리하는 것에서 시행착오를 겪었습니다.

[ 변건오 ]

- 구현 내용 & 방법
  - 단일 클릭, ctrl + 클릭 기능, CSS 구현
- 구현하면서 어려웠던 점
  - styled-components에 원하는 데이터를 보내는 것이 어려웠는데 배열도 보내는게 가능한 것을 알고 원하는 데이터를 보내 조건에 따라 css 스타일 변화를 주었다.
  - 클릭 이벤트에 많은 일을 처리해야 해서 좋은 코드로 짜기 어려웠다.

[ 김혜영 ]

- 구현 내용 & 방법
  - Header / Selected Option / Footer 컴포넌트 작성
- 구현하면서 어려웠던 점
  - next.js에서 이미지 로드할 때는 next image를 따로 깔아야 한다는 것을 배웠습니다.
  - hover 같은 css는 이제 무리없이 다룰 수 있지만 상태와 연동시키는 부분에서 아직 미흡하여 추가 공부가 필요한 것 같습니다.

<br>

3. 소메뉴

[ 김희진 ]

- 구현 내용 & 방법
  - option list component 제작했습니다.
- 구현하면서 어려웠던 점
  - redux와의 연동을 위해 컴포넌트의 아톰화의 중요성을 배웠습니다.

[ 박성현 ]

- 구현 내용 & 방법
  - radio 컴포넌트 구현.
- 구현하면서 어려웠던 점
  - redux의 사용법과 타입스크립트 설정하는것이 어려웠습니다.

[ 최우철 ]

- 구현 내용 & 방법
  - 옵션 컴포넌트 제작 및 리덕스에 해당 상태 반영 로직을 구현하였습니다.
  - 이번 기능의 메인 핵심이었던 shift와 click으로 블록처리하는 기능은 담당이 아니었지만 공부를 위해 구현해보았습니다.
- 구현하면서 어려웠던 점
  - 옵션 컴포넌트의 상태내용을 업데이트하는 도중 width와 height에 따라 컴포넌트가 변경되는 내용이 있었는데, 1px일 경우 크기가 단번에 줄어드는 모습을 보여 UX적으로 좋지 않았기 때문에 해당 데이터가 리덕스에 디스패치되는것을 디바운스를 통해 적용되도록 하였습니다
  - 리스트 블록 처리기능에 있어서 일반클릭, ctrl+클릭, shift+클릭에 따른 블록로직의 구현에 있어 모든 케이스의 경우의 수가 상당히 많아졌기 때문에 제대로 분리해서 작성하지 않을 경우 로직이 충돌할 가능성이 매우 높았습니다. 때문에 많은 집중을 요하는 작업이 되었습니다.

<br>

## 🗂 프로젝트 구조

```
├── README.md
├── components
│   ├── Buttons.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── OptionInput.tsx
│   ├── OptionLists.tsx
│   ├── Options.tsx
│   ├── Radio.tsx
│   ├── SearchBar.tsx
│   └── Setting.tsx
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── public
│   ├── favicon.ico
│   ├── logo-default.svg
│   └── vercel.svg
├── redux
│   ├── sample_data.js
│   ├── slice.ts
│   └── store.ts
├── tsconfig.json
├── utils
│   └── debounce.ts
└── yarn.lock
```

<br>

## 🛠 사용 기술

front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

dev-ops

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

community

![Discord](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Apple](https://img.shields.io/badge/-APPLE-black?style=for-the-badge&logo=apple)
![Ubuntu](https://img.shields.io/badge/-UBUNTU-gray?style=for-the-badge&logo=Ubuntu)

## 팀원소개

|     이름     | 포지션 |                                                                  깃헙                                                                   |
| :----------: | :----: | :-------------------------------------------------------------------------------------------------------------------------------------: |
| 박성현(팀장) | Front  |   [![github](https://img.shields.io/badge/박성현-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/psh9408p)    |
| 김희진(팀원) | Front  |  [![github](https://img.shields.io/badge/김희진-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chloe41297)   |
| 김혜영(팀원) | Front  | [![github](https://img.shields.io/badge/김혜영-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hit-that-drum) |
| 김진기(팀원) | Front  |   [![github](https://img.shields.io/badge/김진기-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hatoba29)    |
| 최우철(팀원) | Front  | [![github](https://img.shields.io/badge/최우철-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chltjdrhd777/) |
| 변건오(팀원) | Front  |    [![github](https://img.shields.io/badge/변건오-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/guno517)    |
| 이승우(팀원) | Front  |   [![github](https://img.shields.io/badge/이승우-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/starhn87)    |
