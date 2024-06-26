// 색상 매핑 객체
const colorMap: { [key: string]: string } = {
  red: 'bg-custom-red dark:bg-custom-red-dark',
  orange: 'bg-custom-orange dark:bg-custom-orange-dark',
  yellow: 'bg-custom-yellow dark:bg-custom-yellow-dark',
  green: 'bg-custom-green dark:bg-custom-green-dark',
  blue: 'bg-custom-blue dark:bg-custom-blue-dark',
  purple: 'bg-custom-purple dark:bg-custom-purple-dark',
  pink: 'bg-custom-pink dark:bg-custom-pink-dark',
  brown: 'bg-custom-brown dark:bg-custom-brown-dark',
  gray: 'bg-custom-gray dark:bg-custom-gray-dark',
};

// 클래스 네임 설정 함수
export const getBgColorClassName = (color: string) => {
  return colorMap[color] || 'bg-custom-default dark:bg-custom-default-dark'; // 기본값 설정 가능
};
