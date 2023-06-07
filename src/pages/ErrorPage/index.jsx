import GlobalFonts from '../../fonts/fonts';
import Header from '../../components/Header/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import Error from '../../components/Error/index.jsx'

function ErrorPage() {
  return (
    <div>
      <GlobalFonts/>
      <Header/>
      <Error/>
      <Footer/>
    </div>
  );
}

export default ErrorPage;