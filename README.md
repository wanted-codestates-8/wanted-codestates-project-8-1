## 📑 프로젝트 소개

WANTED & CODESTATES 프리온보딩 코스

TEAM 8 팀기업과제 1번 입니다.

<br>

### < 페이히어 >

PROJECT PERIOD: 2022.03.10 ~ 2022.03.11

<br>

[배포링크](https://wanted-8-1-i7.netlify.app/)

<br>

## ✨ 주요 기능

- 사용자가 자주 찾는 GitHub의 Public Repository의 Issue들을 모아서 볼 수 있습니다.
- 검색창에 Repository 명을 입력해서 Repository를 검색할 수 있습니다.
- 검색 된 Public Repository를 즐겨찾기로 등록할 수 있습니다. 즐겨찾기는 최대 4개까지 가능하며 이를 초과시 모달창이 나타납니다.
- 즐겨찾기에 등록한 Public Repository를 즐겨찾기에서 삭제할 수 있으며 이는 검색창에서 나타나는 Repository 상태와도 연동됩니다.
- 등록된 각각의 Public Repository의 Issue를 한 페이지에서 모아 볼 수 있습니다.
- 각 Issue의 Repository 명이 표시되며 해당 issue를 클릭하면 GitHub의 상세페이지로 이동할 수 있습니다.
- 검색과 Issue는 페이지네이션으로 구분되어 계속해서 탐색할 수 있습니다.
- 모바일 반응형으로 제작되어 웹페이지와 모바일 기기에 구현받지 않아 긍정적인 UX에 기여합니다.

<br>

### 🧔 메인

<br>

- GitHub 검색 및 즐겨찾기 등록/해제

<img src="https://user-images.githubusercontent.com/85816029/157882128-3e8d8a46-a497-4b41-89de-c6e4ab84d0a6.gif" width="850px" height="450px">
<img src="https://user-images.githubusercontent.com/85816029/157882638-3ac0d386-0f3f-4f64-839b-abec378400e1.gif" width="850px" height="450px">
<img src="https://user-images.githubusercontent.com/85816029/157882103-c79733e5-cf2e-4c03-bb9c-410484c94ffe.png" width="850px" height="450px">

<br>

- Issue 페이지 모아보기 및 상세페이지 이동

<img src="https://user-images.githubusercontent.com/85816029/157883881-69127015-3733-433d-bc9c-4421c583257a.gif" width="850px" height="450px">

<br>

- 페이지네이션

<img src="https://user-images.githubusercontent.com/85816029/157881054-71e919b2-d186-4709-9433-e36141aaced2.png" width="850px" height="450px">
<img src="https://user-images.githubusercontent.com/85816029/157881069-2dc8f6f9-dfbe-4b6e-9e76-bf633e1611c8.png" width="850px" height="450px">

<br>

- 모바일 반응형

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/85816029/157886839-f8030494-c80e-411a-a19a-0e858661628c.gif)

<br>

### 구현한 기능 목록 및 어려웠던 점

<br>

1. Header 및 Card 컴포넌트 제작

[ 박성현 ] 

- 구현 내용 & 방법
    - Card 컴포넌트 제작
- 구현하면서 어려웠던 점
    - 레포지토리 정보가 담긴 Card UI를 제작하였습니다.

<br>

[ 김혜영 ] 

- 구현 내용 & 방법
  - Header 부분 및 Card 컴포넌트 별점 부분 작성
  - Local Storaged 데이터 저장 부분 작성
- 구현하면서 어려웠던 점
  - Header의 로고 부분을 작성할 때 svg로 직접 그리는 부분에서 간단한 부분인데도 익숙치 않아 시간이 많이 걸렸습니다.
  - 즐겨찾기를 한 Repository의 별점 상태와 Local Storage에 정보가 저장되고 이를 다른 컴포넌트 들에 props로 내려주어 연동해주면서 계속 Card 컴포넌트를 리렌더링 하게 만드는 부분을 작성하는 것이 어려웠습니다. 

<br>

2. 모바일 반응형 및 컴포넌트 별 transition 전환

[ 변건오 ]

- 구현 내용 & 방법
    - 초기 반응형 레이아웃 구현
    - Repository component & LocalStorage 데이터 연동
- 구현하면서 어려웠던 점
    - 한 화면에 여러 컴포넌트를 어떻게 보여줄지, Tab을 이용해서 보여줄지 고민이 되었습니다.
    - 전역 상태 관리가 필요하지 않을 것 같아 redux를 쓰지 않고 props를 전달하여 상태를 변경하니 컴포넌트 별로 상태 관리를 한 것과 충돌을 하여 제대로 동작하지 않아 하나의 전역 상태를 통해 상태 관리를 하도록 변경하였습니다.

<br>

[ 김진기 ] 

- 구현 내용 & 방법
    - 메인 페이지 레이아웃 구성
    - 메인 페이지에서 검색 페이지, 이슈 페이지 열리도록 구현
    - 반응형 레이아웃 구현
- 구현하면서 어려웠던 점
    - window.onresize 이벤트를 그냥 사용하면 CPU 사용율이 100%를 찍어서 throttling을 이용하여 해결했습니다.
    - throttling이 적용된 window.onresize 이벤트로 반응형을 구현한 컴포넌트와 media query를 사용하여 반응형을 구현한 컴포넌트 사이의 레이아웃 변화 시점이 미묘하게 차이가 나서 이를 해결하기 위해 media query를 포기하고 onresize 이벤트로만 반응형 레이아웃을 구현하였습니다.


<br>

3. Issue 컴포넌트 제작

[ 김희진 ] 

- 구현 내용 & 방법
    - issue component 제작
- 구현하면서 어려웠던 점
    - 컴포넌트를 선택하면 보이는 issue들이 보이게 제작하였습니다.
    - 각각의 issue를 선택하면 git-hub의 issue page로 이동이 가능하게 제작하였습니다.
    - API호출과 연동시 react-query를 사용하여 팀원분의 도움으로 구현이 가능하게 만들었습니다. 직접 프로젝트에 적용해 보지는 못하였지만, 별도로 공부를 해 보았습니다.
    
<br>

4. Search 컴포넌트 및 페이지네이션 구현

[ 최우철 ] 

- 구현 내용 & 방법
    - React-query를 이용한 api 통신로직 및 github 데이터 조회를 통한 필요 데이터 저장 구현
    - search 컴포넌트와 연동하여 비동기 api 요청 처리 및 컴포넌트 업데이트 구현
- 구현하면서 어려웠던 점
    - react-query가 기본적으로 제공해주는 stale의 개념과, 각종 초기 옵션(window focusing시에 자동 api 요청등을 실행하지 못하도록 끄는 등) 을 확인하는 일에 어려움이 있었습니다.
    - 해당 비동기로 얻어온 데이터 내용을 기존 다른 팀원이 작성한 컴포넌트의 내부 상태구조와 연동시키기 위해 데이터를 변경하는 과정에서 어려움이 있었습니다. 그 중간에 select라는 전처리기 미들웨어를 배울 수 있었던 것은 큰 수확이라고 생각합니다.

<br>

[ 이승우 ] 

- 구현 내용 & 방법
    - SearchBar 컴포넌트 구현
    - 검색시 API 호출한 데이터와 연동
    - 페이지네이션 모듈 공통화
    - 레포 검색, 이슈 목록 페이지네이션 구현
- 구현하면서 어려웠던 점
    - 검색한 값과 리액트 쿼리로 API 호출한 것을 연동하는 부분에서 리액트 쿼리를 처음 접하다보니 시행착오를 겪었습니다.
    - 페이지네이션 구현에서 라이브러리를 사용했는데 디자인 부분에서 rem을 사용하다보니 페이지 숫자 크기가 너무 작아졌습니다. 그것을 포함하여 추가적으로 css 커스터마이징하는 것에서 시행착오를 겪었습니다.

<br>

## 🗂 프로젝트 구조

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.tsx
│   ├── api
│   │   └── get.ts
│   ├── assets
│   │   ├── addButton.svg
│   │   └── logo.svg
│   ├── components
│   │   ├── Card.tsx
│   │   ├── Issues.tsx
│   │   ├── PaginationModule.tsx
│   │   ├── PlusButton.tsx
│   │   ├── Repositories.tsx
│   │   ├── Search.tsx
│   │   └── SearchBar.tsx
│   ├── global.ts
│   ├── index.tsx
│   └── types
│       ├── image.d.ts
│       └── interface.d.ts
└── tsconfig.json
```

<br>

## 🛠 사용 기술

front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

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
| 변건오(팀장) | Front  |    [![github](https://img.shields.io/badge/변건오-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/guno517)    |
| 박성현(팀원) | Front  |   [![github](https://img.shields.io/badge/박성현-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/psh9408p)    |
| 김희진(팀원) | Front  |  [![github](https://img.shields.io/badge/김희진-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chloe41297)   |
| 김혜영(팀원) | Front  | [![github](https://img.shields.io/badge/김혜영-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hit-that-drum) |
| 김진기(팀원) | Front  |   [![github](https://img.shields.io/badge/김진기-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hatoba29)    |
| 최우철(팀원) | Front  | [![github](https://img.shields.io/badge/최우철-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chltjdrhd777/) |
| 이승우(팀원) | Front  |   [![github](https://img.shields.io/badge/이승우-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/starhn87)    |
