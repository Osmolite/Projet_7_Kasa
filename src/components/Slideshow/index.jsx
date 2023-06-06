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

function Slideshow (id) {
   const found = logements.find(element => element.id = id);
    return (
        <div>
        <img src={found.cover} alt='Logement'></img>
        </div>
    )
}
export default Slideshow;