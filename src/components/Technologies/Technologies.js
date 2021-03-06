import React from "react";
import { DiFirebase, DiReact, DiPython } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of modern web technologies.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js and Angular
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and MongoDB
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
          <ListContainer>
            <ListTitle>Scraping</ListTitle>
            <ListParagraph>
              Experience with <br />
              Python Scraping with Beautiful Soup
            </ListParagraph>
          </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
