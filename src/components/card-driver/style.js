import styled from 'styled-components';
import { colors } from 'assets/styles/variables';

export const Wrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 30px;
  }
  .card_head {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      color: ${colors.grey80};
    }
    border-bottom: 1px solid ${colors.grey80}
  }
  .card_head-info {
    span {
      &:nth-child(1) {
        color: ${colors.grey80};
      }
      &:nth-child(2) {
        color: ${colors.mainColor};
      }
    }
  }
  .card_body {
    padding: 15px;
  }
  .card_body-icon {
    font-size: 5rem;
    margin-bottom: 30px;
    color: ${colors.grey60};
  }
  .card_body-list {
    margin-bottom: 10px;
    p {
      margin: 0px;
      &:nth-child(1) {
        color: ${colors.grey80};
        font-size: 0.9rem;
      }
    }
  }
`;