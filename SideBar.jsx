import React from "react";
import styled from "styled-components";

const SideBar = styled.div`
  margin: 20px;
  padding: 0;
  width: 300px;
  background-color: #f1f1f1;
  overflow: auto;
  border-radius: 20px;
  text-align: center;
  margin-left: 30px;
`;

const Active = styled.a`
  background-color: #007bff;
  color: white;
  font-weight: bold;
  display: block;
  padding: 16px;
`;

const Text = styled.a`
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
`;

function StkSideBar() {
  return (
    <SideBar>
      <Active>Components</Active>
      <Text>Side Bar</Text>
      <Text>Navbar</Text>
      <Text>Button</Text>
      <Text>Image</Text>
      <Text>Input</Text>
      <Text>Link</Text>
    </SideBar>
  );
}

export default StkSideBar;
