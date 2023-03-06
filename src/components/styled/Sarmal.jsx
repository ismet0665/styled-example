import styled from "styled-components";
// import Flex from "./styled/Flex";

// .card class ismi ile çözüldü.

const Sarmal = styled.div`
  /* flex-wrap: wrap; */
  & .card:nth-child(odd) {
    flex-direction: row;
  }
  & .card:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export default Sarmal;
