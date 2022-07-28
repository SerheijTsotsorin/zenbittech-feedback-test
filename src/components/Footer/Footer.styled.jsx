import styled from 'styled-components';
import SLFooter from '../Background/bg-images/smile-left-footer.png';
import GreenSmile from '../Background/bg-images/smile-green.png';
import YellowSmile from '../Background/bg-images/smile-right-footer.png';

export const FooterBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  margin-top: 174px;
  width: 100%;
  height: 200px;
  background-color: #e4e4e4;
  background-image: url(${SLFooter});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const SmileGreen = styled.div`
  background-image: url(${GreenSmile});
  position: absolute;
  display: block;

  background-repeat: no-repeat;
  background-size: contain;
  width: 78px;
  height: 97px;
  top: 0px;
  right: 124px;
  border-radius: 0px;
`;

export const SFR = styled.div`
  background-image: url(${YellowSmile});
  position: absolute;
  display: block;

  background-repeat: no-repeat;
  background-size: contain;
  height: 85px;
  width: 88px;
  right: -27px;
  bottom: 28px;
  border-radius: 0px;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 343px;
`;

export const SocialItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const ImageStyled = styled.img`
  height: 16px;
  width: 16px;
`;
