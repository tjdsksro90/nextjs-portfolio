import { calculatedPeriod } from '@/utils/period-mapping';
import classNames from 'classnames';

interface Props {
  start: string;
  end: string | null;
  className?: string;
}

const CommonPeriod = ({ start, end, className }: Props) => {
  if (!start && !end) return null;

  return (
    <p className={classNames('font-mono text-xs text-zinc-500 dark:text-zinc-400', className)}>
      {end ? (
        <>
          {start} ~ {end} <span>· {calculatedPeriod(start, end)}</span>
        </>
      ) : (
        <>
          {start} ~ <span className="text-main">진행 중</span>
        </>
      )}
    </p>
  );
};

export default CommonPeriod;
