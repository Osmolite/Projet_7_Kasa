import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
//import image from './image.png'
//import logements from './data/logements.json'
//Carrousel (Texte déroulant sur la page product et about)
//https://codepen.io/kunukn/pen/ebMryW
//https://codepen.io/diabloo/pen/bGdVgbP

const CollapseStyle = styled.span`
    display:flex;
    justify-content: center;
    align-items:center;
    margin-block:200px;

    .accordion{
        width:1023px;
    }

    .item{
        background-color: #F6F6F6;
        margin-bottom: 15px;
    }

    .title{
        font-weight: medium;
        font-size: 24px;
        font-family: Montserrat;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        background-color: #FF6060;
        border-radius: 25px;
        height: 80px;
        padding-inline: 10px;
        color: #FFFFFF;
    }
    .content {
        font-size: 24px;
        font-family: Montserrat;
        color: #FF6060;
        max-height:0;
        overflow:hidden;
        transition: all 0.5s cubic-bezier(0,1,0,1);
    }
    .content.show{
        padding-top: 25px;
        font-size: 24px;
        font-family: Montserrat;
        color: #FF6060;
        height: auto;
        max-height: 9999px;
        transition: all 0.5s cubic-bezier(1,0,1,0);

    }
`
//Couleurs : FF6060 FFFFFF F6F6F6 000000
//Police : Montserrat regular, medium

function Collapse ({data}) {
    const [selected, setSelected] = useState(null)
   const toggle = (i)=>{
    if (selected === i){
        return setSelected(null)
    }

    setSelected(i)
   }
    return (
        <CollapseStyle>
        <div className='accordion'>
            {data.map((item,i)=>(
            <div className='item'>
                <div className='title' onClick={()=> toggle(i)}>
                    <h2>{item.title}</h2>
                    <span>{selected === i ? <FontAwesomeIcon icon="fa-solid fa-angle-up" /> :<FontAwesomeIcon icon="fa-solid fa-chevron-down" /> }</span>
                </div>
                <div className={selected === i ? 'content show':'content'}>{item.content}</div>
            </div>
            ))}
        </div>
        </CollapseStyle>
    )
}
export default Collapse;
