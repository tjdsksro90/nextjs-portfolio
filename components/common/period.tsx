import { calculatedPeriod } from '@/utils/period-mapping';
import React from 'react';

interface Props {
  start: string;
  end: string | null;
}

const CommonPeriod = ({ start, end }: Props) => {
  return (
    <p className="my-1 ">
      {end ? (
        <>
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)})
        </>
      ) : (
        <>작업기간 : {start} ~ (진행 중)</>
      )}
    </p>
  );
};

export default CommonPeriod;
