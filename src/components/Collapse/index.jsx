import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function Collapse({ data, verticale }) {
const [selected, setSelected] = useState(false)

  return (
    <div className={verticale ? 'itemV' : 'itemH'}>
      <div className="title" onClick={() => setSelected(!selected)}>
        <h2>{data.title}</h2>
        <span>
          {selected ? (
            <FontAwesomeIcon icon="fa-solid fa-angle-up" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
          )}
        </span>
      </div>
      <div className={selected ? 'content show' : 'content'}>
        {data.content}
      </div>
    </div>
  )
}
export default Collapse