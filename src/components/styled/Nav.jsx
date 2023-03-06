import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  /* theme yazınca global temadan çekmiş oluyoruz. */
  /* background-color: ${({ theme }) => theme.colors.primary}; */

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  }
  /* @media (max-width: 357px) {
    text-align: center;
  } */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export default Nav;
