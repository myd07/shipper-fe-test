import React from 'react';
import { bindActionCreators } from 'redux';
import { fetchDrivers } from 'store/driver/actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import ActionBar from 'components/action-bar-driver-management';
import { Wrapper } from './style';
import { makeGetDrivers } from 'store/driver/selector';

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
    const { drivers } = this.props;
    return (
      <Wrapper>
        <ActionBar/>
        <div className="page-driver_body">
          {
            drivers.map((driver, index) => (
              <LoadableCardProduct driver={driver} key={`card-driver-${index}`} />
            ))
          }
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  const getDriver = makeGetDrivers();
  return {
    drivers: getDriver(state),
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDrivers
}, dispatch)

PageDriverManagement.propTypes = {
  fetchDrivers: PropTypes.func,
  drivers: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDriverManagement)