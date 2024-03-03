import React from 'react';
import styled from 'styled-components';
import { Text, Img } from '@nfeng037/react-component-library';
import { setups } from '../data';

const SetupSection = styled.section`
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

const SetupGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`;

const SetupCard = styled.div`
  width: 48%;
  padding-bottom: 1rem;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SetupInner = styled.div`
  position: relative;
  display: flex;
`;

const SetupImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cantian;
`;

const SetupInfo = styled.div`
  position: relative;
  z-index: 9;
  padding: 1rem;
  width: 100%;
  height: 240px;
  background-color: #EB5552;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;


const SetupTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: medium;
  color: #a220e8;
  margin-bottom: 0.75rem;
`;

export default function DeveloperSetup() {
  return (
    <SetupSection id="setup">
      <Container>
        <Header>
          <Img src="./setting.svg" width="30px" height="30px" />
          <br/>
          <Text types="header" bold text="My Developer Setup" />
        </Header>
        <SetupGrid>
          {setups.map((setup) => (
            <SetupCard href="#" key={setup.image} style={{textDecoration: 'none'}}>
              <SetupInner>
                <SetupImage alt={setup.name} src={setup.image} />
                <SetupInfo>
                  <SetupTitle>{setup.name}</SetupTitle>
                  <Text types="paragraph" text={setup.description} bold style={{color:'#f3f3f3'}} />
                </SetupInfo>
              </SetupInner>
            </SetupCard>
          ))}
        </SetupGrid>
      </Container>
    </SetupSection>
  );
}
