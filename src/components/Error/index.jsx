import styled from 'styled-components'
//import image from './image.png'
//Erreur 404

const ErrorStyle = styled.span`
    font-size: 22px;
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Error () {
    return (
        <React.Fragment>
        <img src={image} alt="Erreur 404"/>
        <h1 className="messageErreur">Oups! La page que vous demandez n'existe pas.</h1>
        <link to='./Home'>Retourner sur la page d'accueil</link>
        </React.Fragment>
    )
}
export default Error;