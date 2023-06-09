import styled from 'styled-components'
import banner from '../../assets/banner.png'

//Bannière de la page Accueil

const BannerStyle = styled.div`
    
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
        br{
            display:none;
        }
    }
    @media (max-width: 768px) {
        img{
            width:335px;
            height:111px;
            border-radius: 10px;
            object-fit:cover;
        }
        .titre_banner{
            font-size:24px;
            color: #FFFFFF;
            margin-top: -80px;
            margin-left: 20px;
            white-space: nowrap;
            width:335px;
            height:111px;
            br {
                display:block;
            }
        }
      }
`

function Banner () {
    return (
        <BannerStyle>
        <img src={banner} alt="La mer"/>
        <h3 className="titre_banner">Chez vous,<br/> partout et ailleurs</h3>
        </BannerStyle>
    )
}
export default Banner;