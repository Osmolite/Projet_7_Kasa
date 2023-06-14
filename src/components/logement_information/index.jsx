import styled from "styled-components";
import Collapse from "../Collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageSlider from "../Slideshow";

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
    @media (max-width: 768px) {
        margin 0px;
        width: 400px;
        .descriptionEtOwner{
            flex-direction:column;
        }
    }
`

function Info ({ title, location, description, host, tags, rating, equipments, pictures }) {
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
      console.log(infoCollapse)
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
        const containerStyles = {
            width: "500px",
            height: "280px",
            margin: "0 auto",
          };
    return (
        <InfoStyle>
        <div style={containerStyles}>
        <ImageSlider slides={pictures}/>
        </div>
        <div className="descriptionEtOwner">
        <div className="information">
        <h1>{title}</h1>
        <h3>{location}</h3>
        <div className="tags">
        {tags.map((tag,i)=>(
            <p className="tag" key={i}>{tag}</p>
            ))}
        </div>
        </div>
        <div className="owner">
            <div className="ownerIn">
            <h3>{host.name}</h3>
            <img src={host.picture} alt='Propriétaire du logement'></img>
            </div>
            <div className="rating">
            {rows.map((row,i)=>(
                <div key={i}>{row}</div>
                ))}
            </div>
            </div>
            </div>
            <Collapse data = {infoCollapse} verticale = {false} />
        </InfoStyle>
    )
}
export default Info;
