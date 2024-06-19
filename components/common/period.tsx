import { calculatedPeriod } from "@/utils/period-mapping";
import React from "react";

interface Props {
  start: string;
  end: string;
}

const CommonPeriod = ({ start, end }: Props) => {
  return (
    <p className="my-1 ">
      작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
    </p>
  );
};

export default CommonPeriod;
