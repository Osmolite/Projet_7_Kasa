import styled from 'styled-components'
import ErrorImage from '../../assets/ErrorImage.png'
import { Link } from "react-router-dom"
//import image from './image.png'
//Erreur 404

const ErrorStyle = styled.span`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    font-family: Montserrat;
    color: #FF6060;
    margin-block:100px;
    .messageErreur {
        font-size: 36px;
    }
    .retourAccueil {
        font-size: 18px;
        color: #FF6060;
    }
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Error () {
    return (
        <ErrorStyle>
        <img src={ErrorImage} alt="Erreur 404"/>
        <h1 className="messageErreur">Oups! La page que vous demandez n'existe pas.</h1>
        <Link to='/' className='retourAccueil'>Retourner sur la page d'accueil</Link>
        </ErrorStyle>
    )
}
export default Error;