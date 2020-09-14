import React from 'react';
import { Wrapper } from './style'
import Header from 'components/header'

class DefaultLayout extends React.PureComponent {
  render() {
    return (
      <>
        <Wrapper>
          <Header/>
          {this.props.children}
        </Wrapper>
      </>
    )
  }
}

export default DefaultLayout