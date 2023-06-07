import styled from 'styled-components'
import logements from '../../datas/logements.json'
//import image from './image.png'
//import logements from './data/logements.json'
//Contient le déroulement des photos du logement avec les flèches
//https://github.com/harakisgeorge/carouselreact/blob/master/src/Carousel.jsx

const SlideshowStyle = styled.span`
    font-size: 22px;
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

// function findElementById(logements, _id) {
//     return logements.find((element) => {
//       return element.id === _id;
//     })
//   }

function Slideshow (_id) {
    console.log(_id);
    const idRecherche = JSON.stringify(_id);
   const found = logements.find((element)=>(element.id === idRecherche));
   console.log(found);
    return (
        <div>
        {/* <img src={found.cover} alt='Logement'></img> */}
        </div>
    )
}
export default Slideshow;