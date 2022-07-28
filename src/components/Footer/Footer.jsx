import { React } from 'react';

import {
  FooterBox,
  SmileGreen,
  SFR,
  SocialList,
  SocialItem,
  ImageStyled,
} from './Footer.styled';

import LinkedinIcon from '../icons/1.svg';
import Twitter from '../icons/2.svg';
import Facebook from '../icons/3.svg';
import Pinterest from '../icons/4.svg';

export const Footer = () => {
  return (
    <>
      <FooterBox>
        <SocialList>
          <SocialItem>
            <ImageStyled src={LinkedinIcon} alt="LinkedinIcon"></ImageStyled>
          </SocialItem>

          <SocialItem>
            <ImageStyled src={Twitter} alt="Twitter"></ImageStyled>
            {/* <Link href="https://www.linkedin.com/uas/login?session_redirect=http://www.linkedin.com/help/linkedin"></Link> */}
          </SocialItem>

          <SocialItem>
            <ImageStyled src={Facebook} alt="Facebook"></ImageStyled>
            {/* <Link href="https://www.linkedin.com/uas/login?session_redirect=http://www.linkedin.com/help/linkedin"></Link> */}
          </SocialItem>

          <SocialItem>
            <ImageStyled src={Pinterest} alt="Pinterest"></ImageStyled>
            {/* <Link href="https://www.linkedin.com/uas/login?session_redirect=http://www.linkedin.com/help/linkedin"></Link> */}
          </SocialItem>
        </SocialList>
        <SmileGreen />
        <SFR />
      </FooterBox>
    </>
  );
};
