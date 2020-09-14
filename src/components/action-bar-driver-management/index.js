import React from 'react';
import { bindActionCreators } from 'redux';
import { Wrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';

import { setDriverQuery } from 'store/driver/actions'

class ActionBar extends React.PureComponent {

  _onType(query) {
    this.props.setDriverQuery(query);
  }

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
              <input type="text" placeholder="Cari Driver" onChange={(e) => this._onType(e.target.value)} />
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

const mapDispatchToProps = dispatch => bindActionCreators({
  setDriverQuery
}, dispatch)

export default connect(null, mapDispatchToProps)(ActionBar)