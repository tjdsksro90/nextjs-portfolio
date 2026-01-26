interface Props {
  text: string;
  className?: string;
}

const CommonText = ({ text, className = '' }: Props) => {
  return <div className={className}>{text}</div>;
};

export default CommonText;

