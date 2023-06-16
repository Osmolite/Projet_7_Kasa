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
        margin-top: 10px;
        display:flex;
        justify-content: space-between;
        width: 1240px;
    }
    h1{
        font-size:36px;
        margin-bottom: 0px;
    }
    h3 {
        font-size: 18px;
        font-weight: 300;
        white-space: pre-line;
    }
    .location{
        margin-block: 4px;
    }
    .name{
        margin-right: 25px;
    }
    .owner {
        display:flex;
        flex-direction:column;
        margin-top: 10px;
    }
    .ownerIn {
        display:flex;
        text-align: right;
        margin-left : 30px;
        margin-bottom: 10px;
    }
    img{
        object-fit:cover;
        margin-top: 10px;
        border-radius: 100%;
        width: 64px;
        height: 64px;
    }
    .tags{
        display:flex;
        
    }
    .tag{
        font-size: 14px;
        width: 115px;
        height: 25px;
        margin-inline: 5px;
        padding-top: 5px;
        background-color: #FF6060;
        color: #FFFFFF;
        border-radius: 25px;
        text-align: center;
    }
    .rating{
        display:flex;
        font-size: 26px;
    }
    .star {
        margin-inline: 5px;
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
            width: "1240px",
            height: "415px",
            margin: "0 auto",
          };
          const name = host.name.replace(' ', '\n')
    return (
        <InfoStyle>
        <div style={containerStyles}>
        <ImageSlider slides={pictures}/>
        </div>
        <div className="descriptionEtOwner">
        <div className="information">
        <h1>{title}</h1>
        <h3 className="location">{location}</h3>
        <div className="tags">
        {tags.map((tag,i)=>(
            <p className="tag" key={i}>{tag}</p>
            ))}
        </div>
        </div>
        <div className="owner">
            <div className="ownerIn">
            <h3 className="name">{name}</h3>
            <img src={host.picture} alt='Propriétaire du logement'></img>
            </div>
            <div className="rating">
            {rows.map((row,i)=>(
                <div className="star" key={i}>{row}</div>
                ))}
            </div>
            </div>
            </div>
            
            <Collapse data = {infoCollapse} verticale = {false} />
        </InfoStyle>
    )
}
export default Info;
