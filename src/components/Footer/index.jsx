import styled from 'styled-components'
// Footer présent sur toutes les pages constitué du Logo et des droits

const FooterStyle = styled.span`
    font-size: 22px;
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

//Dans la div Logo on met l'image vectorielle du Logo récupéré sur Figma
function Footer () {
    return (
        <React.Fragment>
        <div className="logo"></div>
        <h3 className="droits">© 2020 Kasa. All rights reserved</h3>
        </React.Fragment>
    )
}
export default Footer;