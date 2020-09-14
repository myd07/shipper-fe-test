import { colors, zindex } from 'assets/styles/variables';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: ${zindex.level10};
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .header_burger {
    display: none;
    font-size: 2rem;
    @media screen and (max-width: 700px) {
      display: block;
    }
  }
  .header_logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 150px;
      object-fit: contain;
    }
  }
  .header_user {
    display: flex;
    align-items: center;
    p {
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
  }
  .header_user-name {
    color: ${colors.mainColor}
  }
  .header_user-logo {
    color: ${colors.grey80};
    font-size: 2rem;
    margin-left: 15px
  }
`;