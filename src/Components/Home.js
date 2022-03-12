import React from "react";
import styled from "styled-components";
import "./Home.scss";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        bgImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        bgImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        bgImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        bgImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Low cost Solar Panels"
        desc="Money back Guarantee"
        bgImg="solar-panel.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar for new Roofs"
        desc="Solar roof costs less than a new Roof plus Solar panles"
        bgImg="solar-roof.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Accessories"
        desc=""
        bgImg="accessories.jpg"
        leftBtnText=" Order Know"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: 100vh;
`;
