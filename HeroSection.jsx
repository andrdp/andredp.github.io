import React from "react";
import styled from "styled-components";
import { Button } from "andre-library";

const HeroSection = () => {
  return (
    <Container>
      <Content>
        <Title>Build your next idea even faster.</Title>
        <Subtitle>
          Beautifully designed, expertly crafted components and templates, built
          by the makers of Styled Components. The perfect starting point for
          your next project.
        </Subtitle>
        <Button primary={true}>Browse Components</Button>
      </Content>
      <Image
        src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Image"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 1rem 5rem;

  @media (max-width: 768px) {
    width: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export default HeroSection;
