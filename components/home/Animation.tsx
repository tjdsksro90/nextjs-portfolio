import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import lottieJson from '../../public/animaion.json';

// react-lottie-player를 서버(SSR)가 아닌 브라우저(클라이언트)에서만 로드
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

const Animation = () => {
  // 움직임 줄이기 설정이면 재생하지 않고 마지막 장면만 보여준다
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <Lottie
      loop={false}
      animationData={lottieJson}
      play={!reduceMotion}
      goTo={reduceMotion ? lottieJson.op - 1 : undefined}
    />
  );
};

export default Animation;
