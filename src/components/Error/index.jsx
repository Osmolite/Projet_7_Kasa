import styled from 'styled-components'
import ErrorImage from '../../assets/ErrorImage.png'
import { Link, useRouteError } from "react-router-dom"
//import image from './image.png'
//Erreur 404

const ErrorStyle = styled.main`
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
        margin-block: 70px;
        font-size: 18px;
        color: #FF6060;
    }
    br{
        display:none;
    }
    @media (max-width: 768px) {
        margin-block:180px;
        text-align:center;
        img{
            width: 198px;
            height:99px;
        }
        .messageErreur{
            font-size: 18px;
        }
        br{
            display:block;
        }
        .retourAccueil {
            margin-block: 55px;
            font-size: 14px;
        }
    }
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Error () {
    const error= useRouteError();
    return (
        <ErrorStyle>
        <img src={ErrorImage} alt="Erreur 404"/>
        <p>{error.message}</p>
        <h1 className="messageErreur">Oups! La page que<br/> vous demandez n'existe pas.</h1>
        <Link to='/' className='retourAccueil'>Retourner sur la page d'accueil</Link>
        </ErrorStyle>
    )
}
export default Error;