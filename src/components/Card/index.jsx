import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CardStyle = styled.span`
    font-size: 18px;
    font-family: 'Montserrat';
    height:340px;
    width:340px;
    .nom_logement {
        margin-left: 10px;
        word-wrap: break-word;
        width:310px;
        height:50px;
        color: #FFFFFF;
    }
    img {
    height:340px;
    width:340px;
    object-fit: cover;
    border-radius: 25px;
    }
    .positionCard {
        position: relative;
    }
    .positionTitle {
        position: absolute;
        z-index:2;
        margin-top: 240px;
    }
    .positionImage{
        position: absolute;
        z-index:0;
    }
    .degrade {
        position absolute
        z-index:3;
        height:340px;
        width:340px;
        background: linear-gradient(white, 70%, black);
        opacity: 0.4;
        border-radius: 25px;
    }
`
// .shadow {
//     height:340px;
//     width:340px;
//     background: linear-gradient(white, black);
//     opacity: 0.1;
//     border-radius: 25px;
// }
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

//Utilisation de la méthode map pour connecter le fichier json 
function Card ({ title, cover }) {
    return (
        <CardStyle className='card_item'>
            <div className='positionCard'>
            <div className='positionTitle'>
            <h3 className='nom_logement'>{title}</h3>
            </div>
            <div className='positionImage'>
            <img src={cover} alt='logement'></img>
            </div> 
            <div className='degrade'></div>
            </div>           
        </CardStyle>
    )
}
export default Card;