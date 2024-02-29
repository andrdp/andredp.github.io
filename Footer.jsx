import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: transparent;
`;

const FooterText = styled.p`
  color: #333333;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>YUHUU</FooterText>
    </FooterContainer>
  );
};

export default Footer;
