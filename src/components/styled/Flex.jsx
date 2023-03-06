import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
  /* @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
  } */

  /* <ThemeProvider theme={styles}> kullanarak da yapılabilir. tepede yaz değiştirceğin vakit tek yerden değiştir. */
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    text-align: center;
  }

  /* &=Flex i temsil ediyor Flex in altındaki div 2 birim , image de de flex 1 dedik 1 birim yer kaplayacak  */
  & div {
    flex: 2;
  }
`;
export default Flex;

export const Flex2 = styled(Flex)`
  /* flex-direction: column;
  text-align: center; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 1rem;
`;
