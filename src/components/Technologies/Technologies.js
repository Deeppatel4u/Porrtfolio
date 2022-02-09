import React from 'react';
import { DiDatabase, DiFirebase, DiGoogleAnalytics, DiMysql, DiPython, DiReact, DiSqllite, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of Machine Learning and Artificial Ingtelligence tools.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="4rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br />
            Machine Learning and Data science Library and Algorithm.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <DiGoogleAnalytics size="4rem"/>
        <ListContainer>
          <ListTitle>Google Spreadsheet</ListTitle>
          <ListParagraph>
            Hands on <br />
            Experience with google analytics.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <List>
      <ListItem>
        <DiDatabase size="4rem"/>
        <ListContainer>
          <ListTitle>SQL</ListTitle>
          <ListParagraph>
            Hands on <br />
            Experience with SQL Database.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
  
);

export default Technologies;
