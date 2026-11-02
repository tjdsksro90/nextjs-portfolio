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
          {start} ~ {end} <span className="text-zinc-400 dark:text-zinc-500">· {calculatedPeriod(start, end)}</span>
        </>
      ) : (
        <>
          {start} ~ <span className="text-emerald-600 dark:text-emerald-400">진행 중</span>
        </>
      )}
    </p>
  );
};

export default CommonPeriod;
