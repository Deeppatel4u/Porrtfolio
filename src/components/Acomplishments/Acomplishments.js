import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 12, text: 'AIML Real World Projects'},
  { text: 'IBM Certified Applied Data Scientist - Level 2', },
  { text: 'Monash University & UT Austin Alumni', },
  { text: 'Brain Tumor Prediction at IIT Kanpur ', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievement</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
 
);

export default Acomplishments;
