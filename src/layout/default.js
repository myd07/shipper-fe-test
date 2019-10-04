import React from 'react';
import { Link } from 'react-router-dom';

const DefaultLayout = (WrappedComponent) => {
  class DefaultLayoutWrapper extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className="main-frame">
            <header className="header">
              <Link to="/list">
                List
              </Link>
              <Link to="/new-post">
                New Post
              </Link>
              <Link to="/generate-password">
                Generate Password
              </Link>
            </header>
            <WrappedComponent/>
          </div>
        </React.Fragment>
      )
    }
  }
  return DefaultLayoutWrapper
}

export default DefaultLayout