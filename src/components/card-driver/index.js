import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Wrapper } from './style';

class CardDriver extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <div className="card">
          <div className="card_head">
            <div className="card_head-info">
              <span>Driver ID </span>
              <span>88728</span>
            </div>
            <FontAwesomeIcon icon="ellipsis-h" />
          </div>
          <div className="card_body">
            <FontAwesomeIcon icon="user-circle" className="card_body-icon" />
            <div className="card_body-list">
              <p>Nama Driver</p>
              <p>First Name, Last Name</p>
            </div>
            <div className="card_body-list">
              <p>Telepon</p>
              <p>First Name, Last Name</p>
            </div>
            <div className="card_body-list">
              <p>Email</p>
              <p>First Name, Last Name</p>
            </div>
            <div className="card_body-list">
              <p>Tanggal Lahir</p>
              <p>First Name, Last Name</p>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

CardDriver.propTypes = {
  driver: PropTypes.object.isRequired,
}

export default CardDriver