import { colors } from 'assets/styles/variables';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  .layout_body-wrapper {
    display: flex;
    padding: 100px 0px 0px 20px;
    height: calc(100% - 100px);
  }
  .layout_body {
    padding: 30px;
    background-color: ${colors.grey60};
    flex: 1;
    overflow-y: scroll;
  }
`;