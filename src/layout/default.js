import React from 'react';

const DefaultLayout = (WrappedComponent) => {
  class DefaultLayoutWrapper extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className="main-frame">
            <WrappedComponent/>
          </div>
        </React.Fragment>
      )
    }
  }
  return DefaultLayoutWrapper
}

export default DefaultLayout