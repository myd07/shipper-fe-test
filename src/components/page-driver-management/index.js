import React from 'react';
import ActionBar from 'components/action-bar-driver-management'
import { bindActionCreators } from 'redux';
import { fetchDrivers } from 'store/driver/actions'
import { connect } from 'react-redux';

class PageDriverManagement extends React.PureComponent {
  componentDidMount() {
    this.props.fetchDrivers();
  }

  render() {
    return (
      <>
        <ActionBar/>
        <div className="page-driver_body"></div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageDriverManagement)