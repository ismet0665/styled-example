import Header from "./components/Header";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
// ThemeProvider global state alanı oluyor. arka tarafta contex api kullanıyor.
// ThemeProvider temayla ilgili ayarlarımızı en üsten en alta kadar bütün componentler arasında paylaşmayı saglayan global state yönetim sistemi. aşagıdaki styles bir obje ve içerisinde sistem ayarlarımı saklıyorum.
//! styles ismi değişebilir. styles harici bir component olabilir import ederek kullanabiliriz.
// styles i nasıl kullanacagız ThemeProvider sarmal şekilde oldugu için
// ThemeProvider nasıl kullanacagız theme props u var bu zorunlu. theme verecegimiz deger bize kalmıs biz styles dedik obje olusturduk. <ThemeProvider theme={styles}>...componentler </ThemeProvider> aşagıdaki gibi sarmalladıgımız için styles i bütün alt componentlere dagıtmıs oluyoruz.bütün componentler dogrudan props kullanmadan styles de bulunan degerlere erişebiliyor.Contex api da yapısı bu contex olustur sarmalla ve herkese aç.
// Kullanırken /* background-color: ${({ theme }) => theme.colors.primary}; */  tepede yaz değiştirceğin vakit tek yerden değiştir.
const styles = {
  colors: {
    primary: "#444",
    secondary: "#666",
    footer: "#8A1C4A",
  },
  margins: {},

  paddings: {},
  breakpoints: { xs: "300px", sm: "500px", md: "700px" },
};

const App = () => {
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Container>
        <Header />
        <Card />
        <Footer/>
      </Container>
    </ThemeProvider>
  );
};

export default App;
