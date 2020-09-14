import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'

import { Wrapper } from './style'

const Drawer = () => {
  const location = useLocation()
  return (
    <>
      <Wrapper>
        <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>
          <div><FontAwesomeIcon icon="home" /></div>
          Beranda
        </Link>
        <Link to="/driver-management" className={location.pathname === '/driver-management' ? 'selected' : ''}>
          <div><FontAwesomeIcon icon="user-circle" /></div>
          Driver Management
        </Link>
        <Link to="/calendar">
          <div><FontAwesomeIcon icon="calendar-alt" className={location.pathname === '/calendar' ? 'selected' : ''} /></div>
          Pickup
        </Link>
      </Wrapper>
    </>
  )
}

export default React.memo(Drawer)