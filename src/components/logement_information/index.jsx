import styled from "styled-components";
import Collapse from "../Collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoStyle = styled.span `
    font-family: Montserrat;
    color: #FF6060;
    width: 1240px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    margin: 0 auto;
    .descriptionEtOwner{
        display:flex;
        justify-content: space-around;
    }
    .owner {
        display:flex;
        flex-direction:column;
    }
    .ownerIn {
        display:flex;
    }
    img{
        border-radius: 100%;
    }
    .collapse {
        display:flex;
        flex-direction:row;
    }
    .tags{
        background-color: #FF6060;
        color: #FFFFFF;
    }
`

function Info ({ title, location, description, host, tags, rating, equipments }) {
    const infoCollapse = [
        {
            title: 'Description',
            content: `${description}`,
        },
        {
            title: 'Equipements',
            content: `${equipments}`,
        }
      ]
      console.log(typeof(infoCollapse))
    return (
        <InfoStyle>
        <div className="descriptionEtOwner">
        <div className="information">
        <h1>{title}</h1>
        <h3>{location}</h3>
        <p className="tags">{tags}</p>
        </div>
        <div className="owner">
            <div className="ownerIn">
            <h3>{host.name}</h3>
            <img src={host.picture} alt='Propriétaire du logement'></img>
            </div>
            <div>{rating}</div>
            <span><FontAwesomeIcon icon="fa-solid fa-star" /></span>
            </div>
            </div>
            <Collapse data = {infoCollapse} className='collapse'/>
        </InfoStyle>
    )
}
export default Info;
