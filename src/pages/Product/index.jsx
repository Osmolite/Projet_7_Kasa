//Components : Header, Slideshow, Tag, Owner, Presentation, Collapse, Footer
import GlobalFonts from '../../fonts/fonts';
import Header from '../../components/Header/index.jsx'
import Banner from '../../components/Banner/index.jsx'

function Product() {
  return (
    <div >
      <GlobalFonts/>
      <Header/>
      <Banner/>
      {/* <Banner/>
      <Cards/>
      <Footer/> */}
    </div>
  );
}

export default Product;