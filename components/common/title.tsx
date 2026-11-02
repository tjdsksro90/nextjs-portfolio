import classNames from 'classnames';

interface Props {
  title: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3'; // 놓이는 자리에 맞는 제목 단계
}

const CommonTitle = ({ title, className, as: Tag = 'h2' }: Props) => {
  return <Tag className={classNames('text-xl font-semibold', className)}>{title}</Tag>;
};

export default CommonTitle;
