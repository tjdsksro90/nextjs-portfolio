interface Props {
  main: string;
  sub?: string | React.ReactNode; // html 형태로 그대로 넘기고 싶을 때 필요
}

// 페이지 제목 (페이지마다 h1 하나)
const MainTitle = ({ main, sub }: Props) => {
  return (
    <div className="w-full pt-16 pb-10 mb-10 border-b md:pt-24 border-zinc-200 dark:border-zinc-800 animate-fade-in">
      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">{main}</h1>
      {sub && <div className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400">{sub}</div>}
    </div>
  );
};

export default MainTitle;
