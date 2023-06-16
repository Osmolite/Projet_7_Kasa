import styled from 'styled-components'
import bannerAbout from '../../assets/bannerAbout.png'
//Bannière de l'image pour la page Home et About

const BannerStyle = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 25px;
        object-fit: cover;
        width: 1240px;
        height: 223px;
    }
    
    @media (max-width: 768px) {
        img{
            width:335px;
            height:223px;
            border-radius: 10px;
        }
      }
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function BannerAbout () {
    return (
        <BannerStyle>
        <img src={bannerAbout} alt="La montagne"/>
        </BannerStyle>
    )
}
export default BannerAbout;