# pre-onboarding-12th-2-5
- 프리온보딩 프론트엔드 12차 5조의 2주차 과제입니다.
- 특정 깃헙 레포지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트를 구축하였습니다.
- 같은 기능을 어떻게 구현했는지 팀원들과 토의를 통해 도출된 Best Practice를 합친 결과물입니다.

<br />

### 기술 스택

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
</div>

<br />

## 🗓️ 프로젝트 기간

### 2023.8.29 ~ 2023.9.1 (4일)

<br />

## 📌 프로젝트 실행 방법

1. Clone the repo

```javascript
$ git clone https://github.com/wanted-pre-onboarding-12th-team-5/pre-onboarding-12th-2-5.git
```

2. Install NPM packages

```javascript
$ npm install
```

3. Getting Started

```javascript
$ npm start
```

<br/>

## 🚀 배포
### [원티드 프리온보딩 인턴십 2차 과제 - 5팀 배포 링크](http://preonboarding-week2-team.s3-website-ap-southeast-2.amazonaws.com/)

<br />

## ⭐️ 팀 구성원 및 역할

|                          최지윤                           |                           유지혜                           |                           김태근                           |                          최선호                           |                          이효식                           |                 김형일(팀장)                 |
| :-------------------------------------------------------: | :--------------------------------------------------------: | :--------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: | :------------------------------------------: |
|          [chichoon](https://github.com/chichoon)          |        [dbwlgp1yng](https://github.com/dbwlgp1yng)         |       [taegeun1111](https://github.com/taegeun1111)        |        [preferchoi](https://github.com/preferchoi)        |           [teetee6](https://github.com/teetee6)           | [brother1](https://github.com/brother1-4752) |
| ![](https://avatars.githubusercontent.com/u/37893979?v=4) | ![](https://avatars.githubusercontent.com/u/126330595?v=4) | ![](https://avatars.githubusercontent.com/u/122959190?v=4) | ![](https://avatars.githubusercontent.com/u/74041004?v=4) | ![](https://avatars.githubusercontent.com/u/17748068?v=4) |  ![](https://avatars.githubusercontent.com/u/60454376?v=4)            |
|                        인피니트 스크롤                         |                           디자인, 리드미              |                   이슈 목록, 로딩                            |               이슈 상세                          |                        프로젝트 세팅, 배포           |                라우팅, 에러 처리                 |

<br />

## [📋 협업 컨벤션](https://www.notion.so/brotherone/5-fd85a49386724f34abe49a309e9b9e3e)

### 1. Husky && lint-staged (commitlint 적용)

### 2. Commit message

| Tag Name | Explanation                                                            |
| -------- | ---------------------------------------------------------------------- |
| build    | 시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm, yarn 레벨)      |
| chore    | 코드나 기능 변경 없는 단순 수정                                        |
| docs     | documentation 변경                                                     |
| feat     | 새로운 기능                                                            |
| fix      | 버그 수정                                                              |
| refactor | 버그를 수정하거나 기능을 추가하지 않는 코드 변경, 리팩토링             |
| style    | 코드 의미에 영향을 주지 않는 변경사항(formatting, colons, white space) |

### 3. Issue && PR 템플릿 통일

### 4. Git-flow branch전략(feat/세부기능 -> main)

<br />

### 🗂️ 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.tsx 
 ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┗ 📜Layout.tsx 
 ┃ ┃ ┣ 📂Suspense
 ┃ ┃ ┃ ┗ 📜CustomSuspense.tsx
 ┃ ┗ 📜issueDetail.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useIntersect.ts
 ┣ 📂pages
 ┃ ┣ 📂errorBoundary
 ┃ ┃ ┗ 📜errorBoundary.tsx
 ┃ ┣ 📂issueDetail
 ┃ ┃ ┗ 📜issueDetail.tsx
 ┃ ┣ 📂issueDetail
 ┃ ┃ ┣ 📜AdvertiseElement.tsx
 ┃ ┃ ┣ 📜IssueElement.tsx
 ┃ ┃ ┗ 📜IssueList.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂router
 ┃ ┗ 📜Router.tsx
 ┣ 📂types
 ┃ ┣ 📜issue.d.ts
 ┃ ┗ 📜type.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```
<br />

## 💡 상세 기능

### 1. 공통 헤더
- 공통 컴포넌트 헤더와 레이아웃 세팅했습니다.
<br />

### 2. 라우팅
- createBrowserRouter를 이용해 라우팅을 구현했습니다. 이를 선택한 이유는 다음과 같습니다.
- 초기 데이터를 효율적으로 패칭할 수 있는 loader기능을 사용할 수 있다.
- 라우터 객체배열을 만들어 관리하기 쉽다.
![image](https://github.com/wanted-pre-onboarding-12th-team-5/pre-onboarding-12th-2-5/assets/60454376/5886b6f9-8e58-4f25-8448-882c3c99bae3)

<br />

### 3. 데이터 패칭과 에러화면 처리
- octokit를 이용해 github REST API 데이터 패칭을 하였고, request 옵션의 겹치는 부분은 재사용성이 높이고자 공통 옵션과 개별 옵션으로 나눠 처리했습니다.<br/>
![image](https://github.com/wanted-pre-onboarding-12th-team-5/pre-onboarding-12th-2-5/assets/60454376/092a4a42-f49f-4e92-8cdb-675cda5ea73e)
- octokit 호출로 받은 결과값의 http상태코드 보관하여, 이후 에러 발생시 각 코드에 따라 에러화면을 출력할 수 있게 했습니다.
![image](https://github.com/wanted-pre-onboarding-12th-team-5/pre-onboarding-12th-2-5/assets/60454376/2d256811-a854-4bb5-acc1-b3c6fe86b426)
- github REST API 문서에 나와 있는 status 코드와 설명을 참고하였습니다. 
- 이를 반영하여 ErrorBoundary 화면을 구현했습니다.
![image](https://github.com/wanted-pre-onboarding-12th-team-5/pre-onboarding-12th-2-5/assets/60454376/a18839d7-a58d-48ba-85ad-127e475b59ec)

<br />

### 4. Loading 화면
- 데이터 요청 중 로딩 표시를 개선하여 사용자 경험을 향상시켰습니다.
- 로딩 표시에는 react-spinners 라이브러리를 활용했습니다.
<br />

### 5. IntersectionObserver와 무한스크롤
- Intersection Observer 는 특정 요소간 얼마나 교차되었는지 감시하고 일정 threshold를 넘어설 때마다 콜백 함수를 실행시키는 API입니다.
- 이러한 특성을 이용해서 스크롤의 최하단에 있는 요소가 뷰포트와 얼마나 교차되었는지 감시하는 방식으로 스크롤이 최하단까지 내려왔는지 체크할 수 있으며, 콜백 함수에서 새로운 데이터를 받아오는 방식으로 무한 스크롤을 구현하였습니다.
- 타겟 옵저빙이 상당히 빠른 시간동안 여러 번 일어나기 때문에, 한 번에 수십 번의 요청을 보내지 않도록 (옵저빙이 한 번만 이루어질 수 있도록) setTimeout을 이용하여 옵저빙 시간 간격을 조절해 주었습니다.

<br />

### 6. 이슈 상세
- issue detail page : 일정한 양식에 맞춰 api 호출을 통해 불러온 데이터를 출력했습니다.
- markdown 출력을 위해 prism.js 라이브러리 사용 : data 중 본문인 body 데이터가 markdown 형식으로 제공되었기 때문에, 최대한 원형에 가깝게 출력하기 위해 markdown출력을 용이하게 해 주는 prism.js 라이브러리를 사용했습니다.
- 처음에는 기본으로 제공되는 react-markdown만을 사용하려 하였으나, 코드 블록의 출력 문제로 인해 prism.js을 사용했습니다.
- 와이어프레임을 확인해 보니, 이슈 번호, 제목, 작성자, 작성일, 댓글 수를 출력하는 부분이 리스트 셀 컴포넌트와 내용이 같다는 걸 볼 수 있었습니다. 이를 확인하고 컴포넌트를 재사용했습니다.<br>
- 추가로, list요소와 detail 요소의 데이터의 크기가 다르기 때문에, 필요한 데이터만 전송해야 할 것 같다는 생각을 했고, ts의 타입 선언을 통해 처리하려고 합니다.

  <br />

### 7. 배포
- eslint, prettier, husky 를 이용하여 프로젝트 초기 세팅을 하였습니다.
- AWS S3 배포 및 Github Action을 통해 Repository Push(merge) 시 main 브랜치에 배포 자동화를 하였습니다.
- (세부 정보)
빌드하기전 react-create-app은 .env.local에 process.env로 환경변수를 설정하므로 해당 파일에 echo명령어로 출력해줍니다.
```
(... 중략)
      - run: echo "REACT_APP_GITHUB_TOKEN=${{ secrets.REACT_APP_GITHUB_TOKEN }}" >> .env.local
      - run: npm run build
(... 중략)
```
