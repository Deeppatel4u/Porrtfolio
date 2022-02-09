import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:416-825-3102">416-825-3102</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:daptl1604@outlook.com.au">daptl1604@outlook.com.au</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Transforming your business with Data!</Slogan>
        </CompanyContainer>
        <SocialIcons href= "https://github.com">
         <AiFillGithub size = "3rem" />
        </SocialIcons>
        <SocialIcons href= "https://linkedin.com/in/deepkumarpat0006">
          <AiFillLinkedin size = "3rem" />
        </SocialIcons>
        <SocialIcons href= "https://instagram.com/deeppatel4u">
          <AiFillInstagram size = "3rem" />
        </SocialIcons>
        <SocialIcons href= "https://www.youtube.com/channel/UCFbm5Y7eAmshDOTauoWoj_A/featured">
          <AiFillYoutube size = "3rem" />
        </SocialIcons> 
      </SocialIconsContainer>
    </FooterWrapper>
    
  );
};

export default Footer;
