import React from 'react';

class DefaultLayout extends React.PureComponent {
  render() {
    return (
      <>
        <div className="main-frame">
          <div>laol</div>
          {this.props.children}
        </div>
      </>
    )
  }
}

export default DefaultLayout