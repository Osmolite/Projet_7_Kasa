import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
//import image from './image.png'
//import logements from './data/logements.json'
//Carrousel (Texte déroulant sur la page product et about)
//https://codepen.io/kunukn/pen/ebMryW
//https://codepen.io/diabloo/pen/bGdVgbP

const CollapseStyle = styled.span`
  .accordionV {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-block: 200px;
  }
  .accordionH {
    display: flex;
    justify-content: space-between;
    margin-block: 20px;
  }
  .itemV {
    width: 1023px;
    margin-bottom: 15px;
  }
  .itemH {
    width: 582px;
    margin-bottom: 15px;
  }
  h2{
    font-size: 18px;
    font-weight: 300;
  }
  .title {
    font-weight: medium;
    font-size: 18px;
    font-family: Montserrat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: #ff6060;
    border-radius: 10px;
    height: 52px;
    padding-inline: 10px;
    color: #ffffff;
  }
  .content {
    font-size: 18px;
    font-family: Montserrat;
    color: #ff6060;
    max-height: 0;
    overflow: hidden;
    border-radius: 0px 0px 10px 10px;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  }
  .content.show {
    background-color: #f6f6f6;
    border-radius: 0px 0px 10px 10px;
    font-size: 18px;
    font-family: Montserrat;
    color: #ff6060;
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1, 0, 0, 0);
    white-space: pre-line;
    padding: 10px;
  }
  @media (max-width: 768px) {
    margin-block: 0px;
    width:333px;
    .accordionV{
      margin-block: 90px;
    }
    .itemV {
      width: 335px;
      margin-bottom: 15px;
    }
    .accordionH {
      margin-block: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .itemH {
      width: 335px;
      margin-bottom: 15px;}
    .title {
      height: 30px;
      font-size: 13px;
      border-radius:5px;
    }
    .content{
      font-size: 12px;
    }
    .content.show{
      font-size: 12px;
    }
  }
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Collapse({ data, verticale }) {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <CollapseStyle>
      <div className={verticale ? 'accordionV' : 'accordionH'}>
        {data.map((item, i) => (
          <div className={verticale ? 'itemV' : 'itemH'} key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>
                {selected === i ? (
                  <FontAwesomeIcon icon="fa-solid fa-angle-up" />
                ) : (
                  <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                )}
              </span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </CollapseStyle>
  )
}
export default Collapse
