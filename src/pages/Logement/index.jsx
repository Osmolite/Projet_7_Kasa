//Components : Header, Slideshow, Tag, Owner, Presentation, Collapse, Footer
import GlobalFonts from '../../fonts/fonts';
import Header from '../../components/Header/index.jsx'
import Banner from '../../components/Banner/index.jsx'
import { useParams } from 'react-router';
import Slideshow from '../../components/Slideshow/index'

function Logement() {
  const {id} = useParams();
  return (
    <div >
      <GlobalFonts/>
      <Header/>
      <Banner/>
      <Slideshow id={id}/>
      {/* <Banner/>
      <Cards/>
      <Footer/> */}
    </div>
  );
}

export default Logement;