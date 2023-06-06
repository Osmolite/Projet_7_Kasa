import * as React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import logements from '../../datas/logements.json'
import Card from '../Card/index.jsx'
//import image from './image.png'
//import logements from './data/logements.json'
//Liste des cartes logement

const CardsStyle = styled.span`
    display:flex;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    background-color: #F6F6F6;
    width: 80%;
    margin-inline: 17%;
    border-radius: 25px;
    max-width: 1240px;
    .Card{
        height:340px;
        width:340px;
        margin: 15px;
        text-decoration: none;
    }
`

//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

//Utilisation de la méthode map pour connecter le fichier json 
function Cards () {
    return (
        <CardsStyle>
            {logements.map(({ id, title, cover}) =>
						<Link to={'./logement/'+ id} className='Card' key={id}>
							<Card
								title={title}
								cover={cover}>
                            </Card>
						</Link>
            )}
        </CardsStyle>
    )
}
export default Cards;