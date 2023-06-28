import Info from '../logement_information'
import logements from '../../datas/logements.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

//Composant qui gère l'affichage des informations sur la page logement, soit avec l'envoi des informations du logement, un loader ou une redirection vers la page erreur

const Loader = styled.div`
  margin-inline: 48%;
  margin-block: 250px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #FF6060;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
  @media (max-width: 768px) {
    margin-inline : 38%;
    margin-block: 275px;
  }
`

function Presentation() {
  let { id } = useParams()
  const [logementCourant, setLogementCourant] = useState(null)
  const navigate= useNavigate();
  useEffect(() => {
    const monLogement = logements.find((element) => element.id === id)
    setLogementCourant(monLogement)
  }, [])
  if (logementCourant === undefined) {
    navigate("/ErrorPage");
  }
  if (logementCourant == null) {
    return <Loader></Loader>
  } else {
    return (
      <Info
        title={logementCourant.title}
        location={logementCourant.location}
        description={logementCourant.description}
        host={logementCourant.host}
        tags={logementCourant.tags}
        rating={logementCourant.rating}
        equipments={logementCourant.equipments.join('\n')}
        pictures={logementCourant.pictures}
      ></Info>
    )
  }
}
export default Presentation
