import styled from 'styled-components';
import { colors } from 'assets/styles/variables';

const height = 40;

export const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .action-bar_info {
    h1 {
      color: ${colors.mainColor};
      margin: 0px;
    }
    p {
      margin: 0px;
      color: ${colors.grey80};
    }
    @media screen and (max-width: 1000px) {
      margin-bottom: 20px;
    }
  }
  .action-bar_action {
    display: flex;
    button {
      height: ${height}px;
      background-color: ${colors.mainColor};
      border-radius: 4px;
      color: white;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      padding: 0px 10px;
      cursor: pointer;
      svg {
        margin-left: 10px
      }
    }
    @media screen and (max-width: 1000px) {
      flex: 1;
      flex-direction: column;
      width: 100%;
    }
  }
  .action-bar_search {
    position: relative;
    margin-right: 20px;
    input {
      height: ${height}px;
      box-sizing: border-box;
      border-radius: 4px;
      outline: none;
      border-width: 1px;
      padding-left: 35px;
    }
    svg {
      position: absolute;
      left: 10px;
      top: 12px;
      color: ${colors.mainColor}
    }
    @media screen and (max-width: 1000px) {
      width: 100%;
      input {
        width: 100%;
      }
      margin-bottom: 20px;
    }
  }
`;