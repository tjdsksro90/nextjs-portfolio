import Head from "next/head";

const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{`${title} | 윤호준 포트폴리오`}</title>
      {/* 검색 결과·링크 미리보기에 보이는 설명 */}
      <meta
        name="description"
        content="디자인에서 코드로. 시각디자인을 전공하고 디자인 회사에서 4년을 일한 뒤, 7년째 웹 프론트엔드를 만들고 있는 윤호준의 포트폴리오입니다."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
