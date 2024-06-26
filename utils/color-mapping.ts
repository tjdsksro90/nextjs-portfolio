// 색상 매핑 객체
const colorMap: { [key: string]: string } = {
  red: 'text-custom-text-red',
  orange: 'text-custom-text-orange',
  yellow: 'text-custom-text-yellow',
  green: 'text-custom-text-green',
  blue: 'text-custom-text-blue',
  purple: 'text-custom-text-purple',
  pink: 'text-custom-text-pink',
  brown: 'text-custom-text-brown',
  gray: 'text-custom-text-gray',
};

// 클래스 네임 설정 함수
export const getColorClassName = (color: string) => {
  return colorMap[color] || 'text-custom-text-red'; // 기본값 설정 가능
};
