import * as React from "react";
import styled from "styled-components";

interface ItemProps {}

const Container = styled.div``;

const Item: React.FC<ItemProps> = () => {
  return <Container>Item</Container>;
};

export default Item;
