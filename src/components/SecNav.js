import React from 'react'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
function SecNav() {
  return (
    <div style={{ textAlign: 'center', paddingBottom: '50px' }}>
      <div>
        <NavLink to="/groundwatersupply">
          <FontAwesomeIcon icon={faRandom} size="x.5" /> Groundwater Supply
        </NavLink>
        <NavLink to="/environmentalinvestigations">
          <FontAwesomeIcon icon={faRandom} size="x.5" /> Environmental
          Investigations
        </NavLink>
        <NavLink to="/groundwaterdewatering">
          {' '}
          <FontAwesomeIcon icon={faRandom} size="x.5" /> Groundwater Dewatering
        </NavLink>
        <NavLink to="/groundwatermodelling">
          {' '}
          <FontAwesomeIcon icon={faRandom} size="x.5" /> Groundwater Modelling
        </NavLink>
        <NavLink to="/landstability">
          <FontAwesomeIcon icon={faRandom} size="x.5" /> Land Stability
          Investigations
        </NavLink>
      </div>
    </div>
  )
}

export default SecNav
