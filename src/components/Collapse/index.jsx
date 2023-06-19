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
    margin-top: 60px;
    margin-bottom: 30px;
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
    padding: 20px;
  }
  @media (max-width: 768px) {
    margin-block: 0px;
    width:333px;
    .accordionV{
      margin-top: 30px;
      margin-bottom: 175px;
    }
    .itemV {
      width: 335px;
      margin-bottom: 15px;
    }
    .accordionH {
      margin-block: 12px;
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
  const lengthData = data.length
  const dataTab = new Array(lengthData).fill(false)
  const [folded, setFolded] = useState(dataTab)
  const toggle = (i) => {
      const majFolded = folded.map((item, k) => (i===k ? !item : item))
      setFolded(majFolded)
      console.log(folded)
  }
  return (
    <CollapseStyle>
      <div className={verticale ? 'accordionV' : 'accordionH'}>
        {data.map((item, i) => (
          <div className={verticale ? 'itemV' : 'itemH'} key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>
                {folded[i] ? (
                  <FontAwesomeIcon icon="fa-solid fa-angle-up" />
                ) : (
                  <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                )}
              </span>
            </div>
            <div className={folded[i] ? 'content show' : 'content'}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </CollapseStyle>
  )
}
export default Collapse
