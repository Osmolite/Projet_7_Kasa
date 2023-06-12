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
        display:flex;
        
    }
    .tag{
        width: 180px;
        margin-inline: 5px;
        padding-block: 5px;
        background-color: #FF6060;
        color: #FFFFFF;
        border-radius: 25px;
        text-align: center;
    }
    .rating{
        display:flex;
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
      console.log(tags)
      const rows = [];
        for (let i = 0; i < 5; i++) {
            console.log(i,rating);
            if (i<rating){
                rows.push(<FontAwesomeIcon icon="fa-solid fa-star" />)
            }else{
                rows.push(<FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#b0b0b0",}} />)
            };
        }
    return (
        <InfoStyle>
        <div className="descriptionEtOwner">
        <div className="information">
        <h1>{title}</h1>
        <h3>{location}</h3>
        <div className="tags">
        {tags.map((tag)=>(
            <p className="tag">{tag}</p>
            ))}
        </div>
        </div>
        <div className="owner">
            <div className="ownerIn">
            <h3>{host.name}</h3>
            <img src={host.picture} alt='Propriétaire du logement'></img>
            </div>
            <div className="rating">
            {rows.map((row)=>(
                <div>{row}</div>
                ))}
            </div>
            </div>
            </div>
            <Collapse data = {infoCollapse} className='collapse'/>
        </InfoStyle>
    )
}
export default Info;
