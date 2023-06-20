import styled from 'styled-components'
import CollapseList from '../CollapseList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageSlider from '../Slideshow'

const InfoStyle = styled.main`
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
        height: 25px;
        margin-inline: 5px;
        padding-top: 5px;
        padding-inline: 10px;
        background-color: #FF6060;
        color: #FFFFFF;
        border-radius: 10px;
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
        margin 0 auto;
        width: 335px;
        .descriptionEtOwner{
            flex-direction:column;
            width: 335px;
        }
        h1 {
            font-size: 18px;
            font-weight: 300;
        }
        h3 {
            font-size: 14px;
            font-weight: 300;
        }
        .name{
            font-size: 12px;
        }
        img{
            height: 32px;
            width: 32px;
        }
        .tags{
          flex-wrap:wrap;
        }
        .tag{
            font-size: 10px;
            height: 18px;
        }
        .rating{
            font-size: 18px;
            margin-top: 15px;
        }
        .owner {
            flex-direction: row-reverse;
            justify-content: space-between;
        }
    }
`
const ContainerStyles = styled.div`
        width: 1240px;
        height: 415px;
        margin: 0 auto;
        @media (max-width: 768px) {
            width: 335px;
            height: 255px;
        }
`
function Info({
  title,
  location,
  description,
  host,
  tags,
  rating,
  equipments,
  pictures,
}) {
  const infoCollapse = [
    {
      title: 'Description',
      content: `${description}`,
    },
    {
      title: 'Equipements',
      content: `${equipments}`,
    },
  ]
  console.log(infoCollapse)
  console.log(tags)
  const rows = []
  for (let i = 0; i < 5; i++) {
    console.log(i, rating)
    if (i < rating) {
      rows.push(<FontAwesomeIcon icon="fa-solid fa-star" />)
    } else {
      rows.push(
        <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: '#b0b0b0' }} />
      )
    }
  }
  const name = host.name.replace(' ', '\n')
  return (
    <InfoStyle>
      <ContainerStyles>
        <ImageSlider slides={pictures} />
      </ContainerStyles>
      <div className="descriptionEtOwner">
        <div className="information">
          <h1>{title}</h1>
          <h3 className="location">{location}</h3>
          <div className="tags">
            {tags.map((tag, i) => (
              <p className="tag" key={i}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="owner">
          <div className="ownerIn">
            <h3 className="name">{name}</h3>
            <img src={host.picture} alt="Propriétaire du logement"></img>
          </div>
          <div className="rating">
            {rows.map((row, i) => (
              <div className="star" key={i}>
                {row}
              </div>
            ))}
          </div>
        </div>
      </div>

      <CollapseList data={infoCollapse} verticale={false} />
    </InfoStyle>
  )
}
export default Info
