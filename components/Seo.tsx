import Head from "next/head";

const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | 포트폴리오</title>
      <meta name="description" content="포트폴리오" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
