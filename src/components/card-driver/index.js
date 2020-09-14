import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Wrapper } from './style';

class CardDriver extends React.PureComponent {
  render() {
    const { driver } = this.props
    return (
      <Wrapper>
        <div className="card">
          <div className="card_head">
            <div className="card_head-info">
              <span>Driver ID </span>
              <span>{driver.id}</span>
            </div>
            <FontAwesomeIcon icon="ellipsis-h" />
          </div>
          <div className="card_body">
            <FontAwesomeIcon icon="user-circle" className="card_body-icon" />
            <div className="card_body-list">
              <p>Nama Driver</p>
              <p>{driver.fullname}</p>
            </div>
            <div className="card_body-list">
              <p>Telepon</p>
              <p>{driver.cell}</p>
            </div>
            <div className="card_body-list">
              <p>Email</p>
              <p>{driver.email}</p>
            </div>
            <div className="card_body-list">
              <p>Tanggal Lahir</p>
              <p>{driver.registeredDate}</p>
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