import React, { useState } from "react";
import styled from "styled-components";
import { MenuOpen, CloseRounded } from "@mui/icons-material";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu
          fontSize="large"
          color="info"
          onClick={() => setBurgerStatus(true)}
        />
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose
            fontSize="large"
            onClick={() => setBurgerStatus(false)}
          />
        </CloseWrapper>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Used Cars</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Solar Panel</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 19px 30px;
  align-items: center;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 13px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 20px;
    padding: 0 10px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
const CustomMenu = styled(MenuOpen)`
  font-size: 40px;
  cursor: pointer;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: start;
  transition: all 0.6s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 20px 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    a {
      font-weight: bold;
    }
  }
`;
const CustomClose = styled(CloseRounded)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
