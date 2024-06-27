import Lottie from 'react-lottie-player';

import lottieJson from '../../public/animaion.json';

export default function Animation() {
  return <Lottie loop={false} animationData={lottieJson} play />;
}
