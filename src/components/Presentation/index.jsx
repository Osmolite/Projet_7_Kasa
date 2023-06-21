import Info from '../logement_information'
import logements from '../../datas/logements.json'
import { json, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
//Contient Slideshow, Tag ainsi que le titre, la localisation du logement et Owner dans la page Product

function Presentation() {
  let { id } = useParams()
  const [logementCourant, setLogementCourant] = useState(null)
  useEffect(()=> {
    const monLogement = logements.find((element) => element.id === id)
    setLogementCourant(monLogement)
  },[])
  // const logementCourant = logements.find((element) => element.id === id)
  if (typeof logementCourant==='undefined') {
    window.location.href='/ErrorPage'
  }
  if (logementCourant==null) {
    return <div></div>
  } else {
  return (
    <Info
      title={logementCourant.title}
      location={logementCourant.location}
      description={logementCourant.description}
      host={logementCourant.host}
      tags={logementCourant.tags}
      rating={logementCourant.rating}
      equipments={logementCourant.equipments.join("\n")}
      pictures={logementCourant.pictures}
    ></Info>
  )}
}
export default Presentation
