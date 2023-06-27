import GlobalFonts from '../../fonts/fonts';
import Header from '../../components/Header/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import Error from '../../components/Error/index.jsx'

//Page affiché lorsque l'url est erroné ou que le logement a affiché n'a pas été trouvé

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