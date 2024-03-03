import React from 'react';
import styled from 'styled-components';
import { Text, Img } from '@nfeng037/react-component-library';
import { projects } from '../data';

const ProjectsSection = styled.section`
  color: #3f3f3f;
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

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`;

const ProjectCard = styled.a`
  width: 48%;
  padding-bottom:a1rem;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ProjectInner = styled.div`
  position: relative;
  display: flex;
`;

const ProjectImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cantian;
`;

const ProjectInfo = styled.div`
  position: relative;
  z-index: 9;
  padding: 1rem;
  width: 100%;
  height: 260px;
  background-color: #EB5552;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const ProjectTech = styled.h2`
  font-size: 0.875rem;
  font-weight: medium;
  color: #a220e8;
  margin-bottom: 0.25rem;
`;

const ProjectTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: medium;
  color: #fff;
  margin-bottom: 0.75rem;
`;

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Header>
          <Img src="./code-slash.svg" width="30px" height="30px" />
          <br/>
          <Text types="header" bold text="Apps I've Built" />
        </Header>
        <ProjectsGrid >
          {projects.map((project) => (
            <ProjectCard href={project.link} key={project.image} style={{textDecoration: 'none'}}>
              <ProjectInner>
                <ProjectImage alt="gallery" src={project.image} />
                <ProjectInfo>
                  <ProjectTech>{project.tech}</ProjectTech>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <Text types="paragraph" text={project.description} bold style={{color:'#f3f3f3'}} />
                </ProjectInfo>
              </ProjectInner>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}