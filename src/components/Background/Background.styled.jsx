import styled from 'styled-components';
import TopLeft from './bg-images/smilelettop.png';
import CenterYellow from './bg-images/smile-center-yellow.png';
import CenterPink from './bg-images/smile-center-ping.png';
import Elipse from './bg-images/elipse.png';
import One from './bg-images/cloud1.png';
import Two from './bg-images/cloud2.png';
import Three from './bg-images/cloud3.png';
import Four from './bg-images/cloud5.png';
import Five from './bg-images/cloud4.png';
import Six from './bg-images/cloud6.png';
import Seven from './bg-images/cloud7.png';
import Eight from './bg-images/cloud8.png';
import Map from './bg-images/map.png';

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
  width: 1280px;
  height: 100%;
  overflow: hidden;
`;

export const SmileTopLeft = styled.div`
  background-image: url(${TopLeft});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  top: 23px;
  left: 29px;
  width: 88px;
  height: 86px;
`;

export const SmileCenterYellow = styled.div`
  background-image: url(${CenterYellow});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 127px;
  width: 127px;
  left: 763px;
  top: 516px;
  border-radius: 0px;
`;

export const SmileCenterPink = styled.div`
  background-image: url(${CenterPink});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 258px;
  width: 264px;
  left: 762px;
  top: 558px;
  border-radius: 0px;
  z-index: -1;
`;

export const Moon = styled.div`
  background-image: url(${Elipse});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 104px;
  width: 138px;
  left: 714px;
  top: 21px;
  border-radius: 0px;
  z-index: -1;
  color: #fad34f;
`;

export const CloudOne = styled.div`
  background-image: url(${One});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 87px;
  width: 87px;
  left: 620px;
  top: 131px;
  border-radius: 0px;
  z-index: 2;
  color: #c6c6c6;
`;

export const CloudTwo = styled.div`
  background-image: url(${Two});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 164px;
  width: 219px;
  left: 775px;
  top: 101px;
  border-radius: 0px;

  z-index: -1;
  color: #c6c6c6;
`;

export const CloudThree = styled.div`
  background-image: url(${Three});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 184px;
  width: 245px;
  left: -69px;
  top: 185px;
  border-radius: 0px;
  z-index: -1;
  color: #c6c6c6;
`;

export const CloudFour = styled.div`
  background-image: url(${Four});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 129px;
  width: 172px;
  left: 693px;
  top: 256px;
  border-radius: 0px;

  z-index: -1;
  color: #c6c6c6;
`;

export const CloudFive = styled.div`
  background-image: url(${Five});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 164px;
  width: 218px;
  left: -92px;
  top: 400px;
  border-radius: 0px;

  z-index: -1;
  color: #c6c6c6;
`;

export const CloudSix = styled.div`
  background-image: url(${Six});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 164px;
  width: 219px;
  left: 343px;
  top: 626px;
  border-radius: 0px;

  z-index: -1;
  color: #c6c6c6;
`;

export const CloudSeven = styled.div`
  background-image: url(${Seven});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 128px;
  width: 169px;
  left: 731px;
  top: 746px;
  border-radius: 0px;

  z-index: -1;
  color: #c6c6c6;
`;

export const CloudEight = styled.div`
  background-image: url(${Eight});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  height: 216px;
  width: 288px;
  left: 141px;
  top: 761px;
  border-radius: 0px;

  z-index: -1;
  color: #c6c6c6;
`;

export const MapImg = styled.div`
  background-image: url(${Map});
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  width: 976px;
  height: 976px;
  left: 814px;
  top: -52px;
  border-radius: 0px;

  z-index: -2;
`;
