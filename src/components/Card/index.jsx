import styled from 'styled-components'

//Crée une carte logement en superposant le titre, la photo et un dégradé 

const CardStyle = styled.section`
    font-size: 18px;
    font-family: 'Montserrat';
    height:340px;
    width:340px;
    .nom_logement {
        margin-left: 10px;
        word-wrap: break-word;
        width:310px;
        height:50px;
        color: #FFFFFF;
    }
    img {
    height:340px;
    width:340px;
    object-fit: cover;
    border-radius: 25px;
    }
    .positionCard {
        position: relative;
    }
    .positionTitle {
        position: absolute;
        z-index:2;
        margin-top: 240px;
    }
    .positionImage{
        position: absolute;
        z-index:0;
    }
    .degrade {
        position absolute
        z-index:3;
        height:340px;
        width:340px;
        background: linear-gradient(white, 70%, black);
        opacity: 0.4;
        border-radius: 25px;
    }
    @media (max-width: 768px) {
        img{
            border-radius:10px;
        }
        .degrade{
            border-radius:10px;
        }
      }
`

function Card ({ title, cover }) {
    return (
        <CardStyle className='card_item'>
            <div className='positionCard'>
            <div className='positionTitle'>
            <h3 className='nom_logement'>{title}</h3>
            </div>
            <div className='positionImage'>
            <img src={cover} alt='logement'></img>
            </div> 
            <div className='degrade'></div>
            </div>           
        </CardStyle>
    )
}
export default Card;