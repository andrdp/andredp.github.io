import React from "react";
import styled from "styled-components";
import { Card, FlexRow } from "andre-library";
import { componentCardData } from "../models/data";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 3rem auto;
  padding: 1rem 5rem;

  @media (max-width: 768px) {
    width: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Tagline = styled.p`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.5rem;
  margin-bottom: 4.5rem;
  color: #007bff;
  text-align: center;
`;

const Title = styled.h1`
  max-width: 600px;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  max-width: 500px;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 2.5rem;
`;

const ComponentSection = () => {
  return (
    <Container>
      <Tagline>Components</Tagline>
      {/* <Title>
        Beautifully crafted UI components, ready for your next project.
      </Title> */}
      {/* <Subtitle>Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Styled Components projects and customize to your heart’s content.</Subtitle> */}
      <FlexRow justify="center" gap="2rem">
        {componentCardData.map((item, index) => (
          <Card
            width="20rem"
            key={index}
            href={`/components/${item.slug}`}
            // src={item.src}
            // alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </FlexRow>
    </Container>
  );
};

export default ComponentSection;
