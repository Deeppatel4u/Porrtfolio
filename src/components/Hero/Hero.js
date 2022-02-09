import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey I'm Deep and Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Actively involved in learning about data and manipulating it and building the right model/algorithm to gain insights. 
Main areas of interest: Data Science, Machine Learning, Deep Learning & Artificial Intelligence. Please click on Learn more to know about my academic achievements at UT Austin and Great Lakes.
      </SectionText>
      <Button onClick={() => window.location = 'https://eportfolio.mygreatlearning.com/deepkumar-patel'}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;