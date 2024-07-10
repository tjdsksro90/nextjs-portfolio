# NextJS Portfolio

기술 스택 : Next.js TypeScript TailwindCSS Tailblock next-themes react-lottie-player hero-icons lottie-files notion api

깃허브 링크: https://github.com/tjdsksro90/nextjs-portfolio

배포 링크: nextjs-portfolio-jet-mu.vercel.app

주제: SEO에 최적화된 웹 애플리케이션으로 NEXT.js와 TypeScript를 사용하여 개발 한 포트폴리오입니다.

진행 기간: 2024년 6월 20일 → 2023년 6월 26일

프로젝트 종류: 개인프로젝트

## 실행방법

- 해당 프로젝트는 `yarn`으로 설치 되있습니다.
- 실행 방법
  - 해당 프로젝트 `clone`
  - node module 설치 `yarn install`
  - dev 모드 실행 `yarn dev`

## 프로젝트 소개

포트폴리오 프로젝트는 SEO에 최적화된 웹 애플리케이션으로, NEXT.js와 TypeScript를 사용하여 개발하였습니다.

TypeScript를 도입하여 정적 타입 검사를 수행하여 코드의 안정성과 가독성을 높였습니다.

이 프로젝트를 통해 저는 최신의 웹 개발 동향에 대한 이해와 SEO에 대한 경험을 쌓았습니다.

또한, NEXT.js와 TypeScript와 같은 인기 있는 기술 스택을 활용하여 효율적이고 유지보수가 용이한 코드를 작성하는 방법을 익혔습니다.

추후에 프로젝트가 쌓여도 유지 및 관리를 용이하게 하기 위해서 Notion API를 사용해서 프로젝트 목록을 가져왔습니다

## 기능 구현

### Light / Dark 테마

- 기능 소개 : Header의 Theme 버튼(아이콘)을 통해서 Light 또는 Dark 테마를 적용할 수 있습니다.
- 기능 구현 : MyApp 컴포넌트는 AppProps를 매개변수로 받고, ThemeProvider 컴포넌트로 감싸져 있습니다. ThemeProvider는 "class"라는 속성을 가지며, 클래스를 사용하여 테마를 전환할 수 있게 합니다. 헤더에는 themeToggleButton 컴포넌트가 있습니다. 이 컴포넌트는 버튼을 렌더링하며, 버튼을 클릭하면 useTheme 함수를 사용하여 테마를 토글할 수 있습니다. 만약 현재 테마가 "light"이면 "dark"로, "dark"이면 "light"로 테마가 전환됩니다.

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/a3a52682-7855-4ef4-b0b3-e40dee45884c)

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/a5d312f1-8407-4bce-bc8f-c80741ed3f2a)

### Notion API를 사용한 프로젝트 목록 가져오기 기능

- 기능 소개 : Notion API를 사용하여 데이터를 파싱하고 프로젝트 목록을 표시하는 기능을 구현했습니다
- 기능 구현 : postman을 통해 API 통신을 확인한 후, 초기에는 getServerSideProps()를 사용하여 데이터 통신을 구현하였으나 배포 후 페이지 변경이 많지 않을 것으로 판단하여 성능 향상을 위해 getStaticProps()를 사용하였습니다. 데이터는 types 폴더에 따로 정의된 Repo와 ProjectItem 타입을 사용하여 파싱하였고, Projects 컴포넌트에서는 받아온 데이터를 랜더링하는 로직을 구현하였습니다.

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/68069e95-4c43-4abd-9ccc-44eab95ab114)

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/6945472c-3962-425d-b0ba-4755cb967c58)

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/d05d7272-495f-4e9d-a7ec-0f0c85b38939)

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/d5169c75-a77e-4fc8-8216-c7185853da87)

## 트러블 슈팅

### 이슈 1

- 이슈 : React 프레임워크에서는 일반적으로 <img> 태그를 사용할 때 문제가 없었지만 Next.js에서는 다른 방식으로 이미지 처리를 해야 했습니다.
- 해결 : Next.js에서는 내장된 Image 컴포넌트를 사용하여 이미지를 처리하기 때문에 next.config.js 파일에 이미지 도메인 출처를 등록하니 오류가 발생하지 않았습니다. 이때 왜 Next.js의 Image 컴포넌트를 사용할까라는 의문이 생겼는데 그 이유는 이미지의 출처(도메인)를 next.config.js 파일의 images 설정에 등록함으로써 보안 및 성능 측면에서 더욱 안전하고 최적화된 이미지를 제공하기 때문이란 걸 알게 되었습니다.

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/23cac314-6a2c-44b4-8c84-b98b332bdd7f)

### 이슈 2

- 이슈 : Notion API로 리스트로 가져오는데 디테일 페이지도 보여주고 싶은데 databases로 불러올 땐 디테일 내용이 가져오지 못했습니다.
- 해결 : blocks, pages로 가져오는 api를 찾아서 해당 databases의 id값을 찾아서 클릭할 때 SSR로 해당 데이터를 가져와서 뿌려줬습니다. 노션의 텍스들은 block 개념이어서 받아온 데이터의 타입이나 색상들을 모두 가져와서 경우에 notion에 작성된 형태와 똑같이 화면에 보여주게 작업했습니다.

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/1226c4df-4ca3-4da6-ac28-453c33cd1b9e)

![image](https://github.com/tjdsksro90/nextjs-portfolio/assets/74041149/7e85fe4c-2837-4695-b6d3-6f8137e3f7fa)
