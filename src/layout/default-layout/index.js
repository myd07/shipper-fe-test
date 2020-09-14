import React from 'react';
import { Wrapper } from './style'
import Header from 'components/header'
import Drawer from 'components/drawer';

class DefaultLayout extends React.PureComponent {
  render() {
    return (
      <>
        <Wrapper>
          <Header/>
          <div className="layout_body-wrapper">
            <Drawer/>
            <div className="layout_body">{this.props.children}</div>
          </div>
        </Wrapper>
      </>
    )
  }
}

export default DefaultLayout