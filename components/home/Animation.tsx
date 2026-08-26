import dynamic from 'next/dynamic';
import lottieJson from '../../public/animaion.json';

// react-lottie-player를 서버(SSR)가 아닌 브라우저(클라이언트)에서만 로드
const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

const Animation = () => {
  return <Lottie loop={false} animationData={lottieJson} play />;
};

export default Animation;
