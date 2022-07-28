import {
  SmileTopLeft,
  SmileCenterYellow,
  SmileCenterPink,
  BackgroundImage,
  Moon,
  CloudOne,
  CloudTwo,
  CloudThree,
  CloudFour,
  CloudFive,
  CloudSix,
  CloudSeven,
  CloudEight,
  MapImg,
} from './Background.styled';

export const Background = () => {
  return (
    <BackgroundImage>
      <SmileTopLeft />
      <SmileCenterYellow />
      <SmileCenterPink />
      <Moon />
      <CloudOne />
      <CloudTwo />
      <CloudThree />
      <CloudFour />
      <CloudFive />
      <CloudSix />
      <CloudSeven />
      <CloudEight />
      <MapImg />
    </BackgroundImage>
  );
};
