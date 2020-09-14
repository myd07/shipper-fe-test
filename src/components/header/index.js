import React from 'react';
import { Wrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ShipperLogo from 'assets/images/shipper_logo.png'

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <Wrapper>
          <div className="header_logo">
            <img src={ShipperLogo} alt="Shipper Logo" />
          </div>
          <div className="header_user">
            <p>Hello, <span className="header_user-name"> Shipper User</span></p>
            <FontAwesomeIcon className="header_user-logo" icon="user-circle" />
          </div>
        </Wrapper>
      </>
    )
  }
}

export default Header