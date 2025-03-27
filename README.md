# 🔥 리액트 도메인 구조 CRUD 레퍼런스 프로젝트 🔥

**비즈니스 도메인별로 분리를 하여 비동기 CRUD 요청, 응답 처리과정을 보여주는 레퍼런스 프로젝트입니다.**

‼️ `JSONPlaceholder`를 사용하는 관계로 PATCH, DELETE, POST 메소드는 작동되는 흉내만 낼뿐 결과물에 대해선 변동 사항이 없습니다.<br/>
⚠️ _(예: 게시물 삭제를 해도 요청과 응답만 보여주고 실제로 해당 게시물은 삭제가 되지 않음)_

#### 🔗 <a href='https://reactcrud1991.netlify.app' target='_blank'>https://reactcrud1991.netlify.app</a>

<br/>

## ✅ 주요 기능

- 게시글 목록 조회 (GET)
- 게시글 상세 조회 (GET)
- 게시글 작성 (POST)
- 게시글 수정 (PATCH)
- 게시글 삭제 (DELETE)
- 유저 목록 조회 (GET)
- 유저 상세 조회 (GET)
- 도메인 기반 구조 예시 제공
- 서버 상태 관리(TanStack Query)
- 폼 상태 관리(React Hook Form)

<br/>

## 🏗️ 구조

<pre>
react-crud/
├── public/                  
│   ├── _redirects           # Netlify 설정 파일 (모든 경로에 대해 index.html 파일로 라우팅 되도록 설정)
│   └── vite.svg 
├── src/                     
│   ├── domains/             
│   │   └── [:domain]/       # 도메인 
│   │       ├── components/  # 컴포넌트
│   │       ├── containers/  # 비즈니스 로직 컨테이너
│   │       ├── services/    # API 요청 로직
│   │       ├── index.ts     # 도메인 엔트리 포인트
│   │       └── types.ts     # 타입
│   ├── layouts/             # 레이아웃 컴포넌트
│   ├── pages/               # 라우트 페이지
│   ├── shared/              # 공유파일 (공통적으로 사용되는 컴포넌트, 컨테이너, 유틸함수 등이 위치할 수 있으면 현 프로젝트에서는 컴포넌트와 axios 인스턴스만 존재)
│   └── App.tsx              # 앱 진입
├── ...
└── README.md                # 프로젝트 설명 파일
</pre>

<br/>

## 📚 주요 라이브러리

![React](https://img.shields.io/badge/React-v19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat&logo=tailwind-css)
![React Hook Form](https://img.shields.io/badge/React--Hook--Form-v7-EC5990?style=flat&logo=react)
![React Router](https://img.shields.io/badge/React--Router-v7-CA4245?style=flat&logo=react-router)
![Sonner](https://img.shields.io/badge/Sonner-v2-333333?style=flat)
![Axios](https://img.shields.io/badge/Axios-v1-5A29E4?style=flat)
![TanStack Query](https://img.shields.io/badge/TanStack--Query-v5-FF4154?style=flat)
![JSONPlaceholder](https://img.shields.io/badge/JSONPlaceholder-Mock--API-999999?style=flat)

<br/>

## 🚀 로컬 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/SEJ1991/react-crud.git

# 2. 의존성 설치
npm install

# 3. 로컬 실행
npm run dev

# 4. 환경변수 .env 파일 설정 (환경변수 사용 예시를 보여주기 위해 사용했습니다.)
VITE_API_URL=https://jsonplaceholder.typicode.com
```
