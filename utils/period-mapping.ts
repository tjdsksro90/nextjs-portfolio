export const calculatedPeriod = (start: string, end: string): string => {
  const startDateStringArray = start.split('-');
  const endDateStringArray = end.split('-');

  var startDate = new Date(
    Number(startDateStringArray[0]),
    Number(startDateStringArray[1]) - 1, // 월은 0부터 시작하므로 -1 필요
    Number(startDateStringArray[2]),
  );
  var endDate = new Date(
    Number(endDateStringArray[0]),
    Number(endDateStringArray[1]) - 1, // 월은 0부터 시작하므로 -1 필요
    Number(endDateStringArray[2]),
  );

  const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
  const days = diffInMs / (1000 * 60 * 60 * 24);
  const result = Math.floor(days / 7);

  return result === 0 ? `${days}일` : `${result}주`;
};
