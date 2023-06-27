import GlobalFonts from '../../fonts/fonts';
import Header from '../../components/Header/index.jsx'
import Banner from '../../components/Banner/index.jsx'
import Cards from '../../components/Cards/index.jsx'
import Footer from '../../components/Footer/index.jsx'

//Page d'accueil présentant tous les logements disponibles

function Home() {
  return (
    <div className="Home">
      <GlobalFonts/>
      <Header/>
      <Banner/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default Home;
//Components : Header, Banner, Cards, Card, Footer