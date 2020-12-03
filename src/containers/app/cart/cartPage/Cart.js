import React from "react";
import ReservedItem from "../../../../components/reservedItem/ReservedItem";
import {
  CartContainer,
  TitleStyled,
  TotalPriceSyled,
  ButtonOnCart,
  Footer,
} from "./Cart.styled";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  let history = useHistory();
  const select = useSelector((state) => state);

  console.log(select.orders);
  const handleClick = () => {
    console.log(select);
  };

  return (
    <CartContainer>
      <TitleStyled>Shopping Cart</TitleStyled>
      {Object.keys(select.orders).map((key) => {
        return <ReservedItem value={select.orders[key]} />;
      })}

      <TotalPriceSyled>Total Price: {select.totalPrice} UAH</TotalPriceSyled>
      <Footer>
        <ButtonOnCart onClick={history.goBack}>Go Back</ButtonOnCart>
        <ButtonOnCart onClick={handleClick}>Continue</ButtonOnCart>
      </Footer>
    </CartContainer>
  );
};

export default Cart;