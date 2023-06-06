import styled from 'styled-components'
import banner from '../../assets/banner.png'
//Bannière de l'image pour la page Home et About

const BannerStyle = styled.span`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 25px;
    }
    .titre_banner{
        font-size: 48px;
        font-family: Montserrat;
        font-weight: 300;
        margin-top: -130px;
        color: #FFFFFF;
    }
    @media (max-width: 768px) {
        img{
            width:90%;
            height:90%;
        }
        .titre_banner{
            font-size:16px;
            color: #000000;
            margin-top: -35px;
        }
      }
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Banner () {
    return (
        <BannerStyle>
        <img src={banner} alt="La mer"/>
        <h3 className="titre_banner">Chez vous, partout et ailleurs</h3>
        </BannerStyle>
    )
}
export default Banner;