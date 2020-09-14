import React from 'react';
import { bindActionCreators } from 'redux';
import { fetchDrivers } from 'store/driver/actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import ActionBar from 'components/action-bar-driver-management';
import { Wrapper } from './style';

const LoadableCardProduct = Loadable({
  loader: () => import('../card-driver'),
  loading: () => (
    <div>Loading</div>
  )
});

class PageDriverManagement extends React.PureComponent {
  componentDidMount() {
    this.props.fetchDrivers();
  }

  render() {
    return (
      <Wrapper>
        <ActionBar/>
        <div className="page-driver_body">
          <LoadableCardProduct driver={{}} />
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    drivers: state.driver.data
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDrivers
}, dispatch)

PageDriverManagement.propTypes = {
  fetchDrivers: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDriverManagement)