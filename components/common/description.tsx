import classNames from 'classnames';

interface Props {
  description: string;
  className?: string;
}

const CommonDescription = ({ description, className }: Props) => {
  if (!description) return null;

  return (
    <p className={classNames('text-sm leading-relaxed text-zinc-600 dark:text-zinc-400', className)}>{description}</p>
  );
};

export default CommonDescription;
