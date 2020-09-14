import React from 'react';
import { Wrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ActionBar extends React.PureComponent {
  render() {
    return (
      <>
        <Wrapper>
          <div className="action-bar_info">
            <h1>Driver Management</h1>
            <p>Data driver yang bekerja sama dengan Anda</p>
          </div>
          <div className="action-bar_action">
            <div className="action-bar_search">
              <input type="text" placeholder="Cari Driver" />
              <FontAwesomeIcon icon="search" />
            </div>
            <button type="button">
              TAMBAH DRIVER
              <FontAwesomeIcon icon="plus" />
            </button>
          </div>
        </Wrapper>
      </>
    )
  }
}

export default ActionBar