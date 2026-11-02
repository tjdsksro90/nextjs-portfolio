interface Props {
  main: string;
  sub?: string | React.ReactNode; // html 형태로 그대로 넘기고 싶을 때 필요
  eyebrow?: string;
}

const MainTitle = ({ main, sub, eyebrow }: Props) => {
  return (
    <div className="w-full pt-16 pb-10 mb-10 border-b md:pt-24 border-zinc-200 dark:border-zinc-800 animate-fade-in">
      {eyebrow && <p className="mb-3 eyebrow">{eyebrow}</p>}
      <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">{main}</h2>
      {sub && <div className="mt-4 text-base md:text-lg text-zinc-500 dark:text-zinc-400">{sub}</div>}
    </div>
  );
};

export default MainTitle;
