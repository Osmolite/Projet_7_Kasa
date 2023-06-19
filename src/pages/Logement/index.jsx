//Components : Header, Slideshow, Tag, Owner, Presentation, Collapse, Footer
import GlobalFonts from '../../fonts/fonts';
import Header from '../../components/Header/index.jsx'
import Presentation from '../../components/Presentation';
import Footer from '../../components/Footer';


function Logement() { 
  return (
    <div >
      <GlobalFonts/>
      <Header/>
      <Presentation/>
      <Footer/>
    </div>
  );
}

export default Logement;