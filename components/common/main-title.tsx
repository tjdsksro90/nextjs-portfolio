interface Props {
  main: string;
  sub?: string | React.ReactNode; // html 형태로 그대로 넘기고 싶을 때 필요
}

const MainTitle = ({ main, sub }: Props) => {
  return (
    <div className="container mx-auto mb-10 space-y-2 pb-8 pt-6 md:space-y-5 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl md:text-6xl sm:text-4xl font-extrabold">{main}</h2>
      {sub && <p className="md:text-lg text-base">{sub}</p>}
    </div>
  );
};

export default MainTitle;
