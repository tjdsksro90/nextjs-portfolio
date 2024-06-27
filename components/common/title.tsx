interface Props {
  title: string;
}

const CommonTitle = ({ title }: Props) => {
  return <h1 className="text-2xl font-bold">{title}</h1>;
};

export default CommonTitle;
