import React from "react";
import styled from "styled-components";
function Section({ title, desc, bgImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={bgImg}>
      <ItemText>
        <h1>{title}</h1>
        <p class="desc">{desc}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftButton = styled.button`
  height: 49px;
  width: 266px;
  border-radius: 50px;
  margin: 10px;
  border: none;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.7;
`;

const DownArrow = styled.img`
  height: 60px;
  animation: animateDown infinite 1.8s;
`;
const Buttons = styled.div``;
