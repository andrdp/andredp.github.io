import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-top: 80px;
`;

const Layout = () => {
  return (
    <SiteContainer>
      <Navbar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </SiteContainer>
  );
};

export default Layout;
