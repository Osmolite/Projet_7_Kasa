import styled from 'styled-components'
import Info from '../logement_information';
import logements from '../../datas/logements.json'
import { useParams } from "react-router-dom";
//import image from './image.png'
//import logements from './data/logements.json'
//Contient Slideshow, Tag ainsi que le titre, la localisation du logement et Owner dans la page Product

const PresentationStyle = styled.span`
    font-size: 22px;
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

//Utilisation de la méthode map pour connecter le fichier json 
 function Presentation () {
    let {id} = useParams();
    console.log(id)  
   const found = logements.find((element)=>(element.id === id));
   const logementCourant = [found];
   console.log(logementCourant)
    return (
        <ul>
            {logementCourant.map(({ title, location, description, host, tags, rating, equipments}) =>
							<Info
								title={title}
								location={location}
                                description={description}
                                host={host}
                                tags={tags}
                                rating={rating}
                                equipments={equipments}>
                            </Info>
            )}
        </ul>
    )
}
export default Presentation;