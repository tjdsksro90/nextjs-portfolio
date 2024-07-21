import Lottie from 'react-lottie-player';
import lottieJson from '../../public/animaion.json';

const Animation = () => {
  return <Lottie loop={false} animationData={lottieJson} play />;
};

export default Animation;
