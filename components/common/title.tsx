import classNames from 'classnames';

interface Props {
  title: string;
  className?: string;
}

const CommonTitle = ({ title, className }: Props) => {
  return <h1 className={classNames('text-xl font-semibold', className)}>{title}</h1>;
};

export default CommonTitle;
