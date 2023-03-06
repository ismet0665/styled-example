import styled from "styled-components";

// bootstrap teki container mantıgı gibi div den Container isminde styled-components ürettik ve ona max-width: 1100px margin: auto; vererek aynı bootstrap teki gibi container yapısı olusturduk. yanları açık kaldı.
// <Container>     Container içine aldıgımız yerler bootstrap teki gibi container yapısı olusturur.
//   <Header />
// </Container>;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

export default Container;
