import styled from "styled-components";

//"styled-components" den  Image = styled.img` img den Image componenti türettik.
// Header componentinde kullandık. style li bir şekilde resim ürettik. <Image src="./images/hero.jpg" />

const Image = styled.img`
  width: 300px;
  flex: 1;
`;
export const Logo = styled.img`
  width: 300px;
  padding: 2rem 0px;
`;
export default Image;
