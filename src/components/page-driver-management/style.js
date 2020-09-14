import styled from 'styled-components';
import { colors } from 'assets/styles/variables';

export const Wrapper = styled.div`
  .page-driver_body {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    > div {
      width: calc(33% - 16px);
      box-sizing: border-box;
      margin-right: 16px;
      @media screen and (max-width: 1000px) {
        width: calc(50% - 16px);
      }
      @media screen and (max-width: 700px) {
        width: calc(100%);
        margin-right: 0px;
      }
    }
  }
  .page-driver_navigation {
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      cursor: pointer;
      svg {
        margin: 0px 10px;
      }
      &.disabled {
        color: ${colors.grey80}
      }
    }
  }
`;