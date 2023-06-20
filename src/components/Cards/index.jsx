import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logements from '../../datas/logements.json'
import Card from '../Card/index.jsx'


const CardsStyle = styled.main`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  max-width: 1240px;
  .Card {
    height: 340px;
    width: 340px;
    margin: 15px;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    background-color: #FFFFFF;
    margin-top: -40px;
  }
`
function Cards() {
  
    return (
      <CardsStyle>
        {logements.map(({ id, title, cover }) => (
          <Link to={'./logement/' + id} className="Card" key={id}>
            <Card title={title} cover={cover}></Card>
          </Link>
        ))}
      </CardsStyle>
    )
  }
export default Cards
