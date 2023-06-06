import styled from 'styled-components'
//import image from './image.png'
//import logements from './data/logements.json'
//Contient Slideshow, Tag ainsi que le titre, la localisation du logement et Owner dans la page Product

const PresentationStyle = styled.span`
    font-size: 22px;
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

//Utilisation de la méthode map pour connecter le fichier json 
async function Presentation () {
    const url= new URL(window.location.href);
    const id= url.searchParams.get("id");  
    const reponse = await fetch(`http://localhost:3000/api/logements/${id}`);
    const logementCourant = await reponse.json();
    return (
        <ul>
            <Slideshow/>
            <h1>{logementCourant.title}</h1>
            <h3>{logementCourant.location}</h3>
            <p>{logementCourant.description}</p>
            <div>
                <h3>{logementCourant.host.name}</h3>
                <img src={logementCourant.host.picture} alt='Propriétaire du logement'></img>
            </div>
            <p>{logementCourant.tags}</p>
            <div>{logementCourant.rating}</div>
        </ul>
    )
}
export default Presentation;