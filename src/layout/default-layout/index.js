import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper } from './style'

class DefaultLayout extends React.PureComponent {
  render() {
    return (
      <>
        <Wrapper>
          <div>laol</div>
          <FontAwesomeIcon icon="search" />
          {this.props.children}
        </Wrapper>
      </>
    )
  }
}

export default DefaultLayout