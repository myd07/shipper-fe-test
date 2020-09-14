import styled from 'styled-components';
import { colors } from 'assets/styles/variables';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  @media screen and (max-width: 700px) {
    display: none;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    color: ${colors.black100};
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    position: relative;
    div {
      width: 20px;
      margin-right: 15px;
    }
    &.selected {
      color: ${colors.mainColor};
    }
  }
`;