import React from "react";
import { Card, Img, Text } from "@nfeng037/react-component-library";
import { resources } from '../data';
import styled from 'styled-components';


const ResourcesSection = styled.section`
  color: #3f3f3f;
  margin-top: 2rem;
`;

const Container = styled.div`
  max-width: 60%;
  margin: auto;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const ResourcesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`;

const CustomCard = styled.div`
  width: 30%;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export default function Resources() {
  return (
    <ResourcesSection id="resources">
      <Container>
      <Header>
          <Img src='info-square-fill.svg' width="30px" height="30px"/>
          <br />
          <Text types='header' bold text='Resources'/>
        </Header>
        <ResourcesGrid>
        {resources.map((resource, index) => (
          <CustomCard>
            <Card
              key={index}
              imageurl={resource.image}
              title={resource.title}
              content={resource.summary}
              buttonText="Learn More"
              onButtonClick={() => window.open(resource.link, '_blank')}
              style={{marginBottom:'2rem'}}
            />
          </CustomCard>

        ))}
        </ResourcesGrid>
      </Container>
    </ResourcesSection>
  );
};
