import React from 'react';
import styled from 'styled-components';
import { Text, Img } from '@nfeng037/react-component-library';
import {skills, tools } from '../data';

const SkillsSection = styled.section`
  color: #3f3f3f;
  margin-top: 3rem;
`;

const Container = styled.div`
  max-width: 60%;
  margin: auto;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`;

const SkillsCard = styled.div`
  background-color: #EB5552;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  width: calc(25%);
  margin: 0.25rem;
  @media (max-width: 640px) {
    width: 37%;
  }
`;


const SkillText = styled.span`
  color: #fff;
  font-size: 1rem;
`;

export default function Skills() {
  return(
    <SkillsSection id="skills">
      <Container>
        <Header>
          <Img src='cpu-fill.svg' width="30px" height="30px"/>
          <br />
          <Text types='header' bold text='Skills & Technologies'/>
          <br />
          <Text types='paragraph' text='As a passionate and dedicated web developer, I specialize in crafting dynamic and responsive web applications that provide seamless user experiences. With a keen eye for detail and a relentless pursuit of excellence, I continuously seek to leverage the latest technologies to solve complex problems and deliver value to users and businesses alike.'/>
        </Header>
        <SkillsGrid>
          {skills.map((skill) => (
            <SkillsCard key={skill}>
              <Img src='./patch-check-fill.svg' width="40px" height="20px" style={{padding:'2rem'}} alt='skil icon'/>
              <SkillText>{skill}</SkillText>
            </SkillsCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  )
}
