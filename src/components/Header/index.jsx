import * as React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Logo from '../../assets/Logo.PNG'
//Header présent sur toutes les pages composé du logo et du menu

const HeaderStyle = styled.div`
    font-size: 24px;
    font-family: Montserrat;
    display: flex;
    justify-content: space-between;
    margin-block: 50px;
    margin-inline:17%;
    img {
        height: 87px;
        width:228px;
    }
    .liens_Menu{
    display: inline flex;
    padding-top: 30px;
    margin-inline: 55px;
    color: #FF6060;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }}
    @media (max-width: 768px) {
        width: 335px;
        margin-inline: 10%;
        .logo {
            height:60px;
            width:157px;
        }
        .nav{
            display: flex;
            flex-direction: row;
        }
        .liens_Menu {
            margin-inline: 5px;
        }
        font-size: 12px;
        flex-wrap:nowrap;
      }
    



`

//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Header () {
    return (
        <HeaderStyle className='header'>
        <img className="logo" src={Logo} alt="Logo de l'application"></img>
        <div className="nav">
            <Link className="liens_Menu" to="/">Accueil</Link>
            <Link className="liens_Menu" to="/About">A Propos</Link>
        </div>
        </HeaderStyle>
    )
}
export default Header;