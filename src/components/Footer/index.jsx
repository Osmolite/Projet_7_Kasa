import * as React from "react";
import styled from 'styled-components'
import blackLogo from '../../assets/blackLogo.png'

//Logo et droits du site en bas des pages

const FooterStyle = styled.footer`
    font-size: 24px;
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#000000;
    color: #FFFFFF;
    margin-top:40px;
    padding-block: 30px;
    img {
        width:200px;
    }
    .droits{
    }
    @media (max-width: 768px) {
        img {
            width:130px;
            height:45px;
            object-fit:cover;
        }
        font-size: 12px;
        
      }
      margin-top:80px;
}


`

//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Footer () {
    return (
        <FooterStyle>
        <img className="logo" src={blackLogo} alt="Logo de l'application"></img>
        <h3 className="droits">© 2020 Kasa. All rights reserved</h3>
        </FooterStyle>
    )
}
export default Footer;


