import GlobalFonts from '../../fonts/fonts';
import Header from '../../components/Header/index.jsx'
import Banner from '../../components/Banner/index.jsx'
import Cards from '../../components/Cards/index.jsx'

function Home() {
  return (
    <div className="App">
      <GlobalFonts/>
      <Header/>
      <Banner/>
      <Cards/>
      {/* <Banner/>
      <Cards/>
      <Footer/> */}
    </div>
  );
}

export default Home;
//Components : Header, Banner, Cards, Card, Footer