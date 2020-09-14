import React from 'react';
import { bindActionCreators } from 'redux';
import { fetchDrivers, setPage } from 'store/driver/actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import ActionBar from 'components/action-bar-driver-management';
import { Wrapper } from './style';
import { makeGetDrivers } from 'store/driver/selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoadableCardProduct = Loadable({
  loader: () => import('../card-driver'),
  loading: () => (
    <div>Loading</div>
  )
});

class PageDriverManagement extends React.PureComponent {

  _onPreviousClick() {
    const { page } = this.props
    this.props.setPage(page - 1)
  }

  _onNextClick() {
    const { page } = this.props
    this.props.setPage(page + 1)
  }

  componentDidMount() {
    this.props.fetchDrivers();
  }

  render() {
    const { drivers, page, limit, ids } = this.props;
    const isNextDisabled = (page * limit) === ids.length ? true : false;
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
        {
          drivers.length > 0 && (
            <div className="page-driver_navigation">
              {
                page === 1 ? (
                  <span className="disabled"><FontAwesomeIcon icon="angle-left" />Previous Page</span>
                ) : (
                  <span onClick={() => this._onPreviousClick()}><FontAwesomeIcon icon="angle-left" />Previous Page</span>
                )
              }
              {
                isNextDisabled ? (
                  <span className="disabled">Next Page <FontAwesomeIcon icon="angle-right" /></span>
                ) : (
                  <span onClick={() => this._onNextClick()}>Next Page <FontAwesomeIcon icon="angle-right" /></span>
                )
              }
            </div>
          )
        }
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  const getDriver = makeGetDrivers();
  return {
    drivers: getDriver(state),
    page: state.driver.page,
    limit: state.driver.limit,
    ids: state.driver.ids,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDrivers,
  setPage,
}, dispatch)

PageDriverManagement.propTypes = {
  fetchDrivers: PropTypes.func,
  drivers: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDriverManagement)