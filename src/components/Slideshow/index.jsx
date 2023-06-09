import styled from 'styled-components'
import logements from '../../datas/logements.json'
import { useState } from 'react'
//Contient le déroulement des photos du logement avec les flèches
//https://github.com/harakisgeorge/carouselreact/blob/master/src/Carousel.jsx


//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

// function findElementById(logements, _id) {
//     return logements.find((element) => {
//       return element.id === _id;
//     })
//   }

function Slideshow (_id) {
    console.log(typeof(_id),_id);
    const idRecherche = Object.values(_id).toString();
    console.log(idRecherche);
   const found = logements.find((element)=>(element.id === idRecherche));
   console.log(found);
   const slides = [found.pictures]
   console.log(slides)
   const [currentIndex, setCurrentUser] = useState(0);
   const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
    return (
            <div style= {slideStyles}>
            <div style={slideStylesWidthBackground}></div>
            </div>
    )
}
export default Slideshow;