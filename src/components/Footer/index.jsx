import * as React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import blackLogo from '../../assets/blackLogo.png'

const FooterStyle = styled.span`
    font-size: 24px;
    font-family: Montserrat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#000000;
    color: #FFFFFF;
    width: 100%;
    margin-top:40px;
    padding-block: 30px;
    img {
        width:200px;
    }
    .droits{
    }
    @media (max-width: 768px) {
        img {
            width:50%;
            height:50%;
        }
        
      }
    
}


`

//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Footer () {
    return (
        <FooterStyle className='header'>
        <img className="logo" src={blackLogo} alt="Logo de l'application"></img>
        <h3 className="droits">© 2020 Kasa. All rights reserved</h3>
        </FooterStyle>
    )
}
export default Footer;


