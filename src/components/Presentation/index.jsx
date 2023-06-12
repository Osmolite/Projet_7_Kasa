import styled from 'styled-components'
import Info from '../logement_information'
import logements from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
//import image from './image.png'
//import logements from './data/logements.json'
//Contient Slideshow, Tag ainsi que le titre, la localisation du logement et Owner dans la page Product

const PresentationStyle = styled.span`
  font-size: 22px;
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

//Utilisation de la méthode map pour connecter le fichier json
function Presentation() {
  let { id } = useParams()
  const logementCourant = logements.find((element) => element.id === id)
  return (
    <Info
      title={logementCourant.title}
      location={logementCourant.location}
      description={logementCourant.description}
      host={logementCourant.host}
      tags={logementCourant.tags}
      rating={logementCourant.rating}
      equipments={logementCourant.equipments.join("\n")}
    ></Info>
  )
}
export default Presentation
