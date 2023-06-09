//Components : Header, Slideshow, Tag, Owner, Presentation, Collapse, Footer
import GlobalFonts from '../../fonts/fonts';
import Header from '../../components/Header/index.jsx'
import { useParams } from 'react-router';
import Presentation from '../../components/Presentation';

// const containerStyles = {
//   width: "500px",
//   height: "280px",
//   margin: "0 auto",
// };

function Logement() {
  const {id} = useParams();
  return (
    <div >
      <GlobalFonts/>
      <Header/>
      <Presentation/>
      {/* <div style={containerStyles}>
      <Slideshow _id={id}/>
      </div> */}
    </div>
  );
}

export default Logement;