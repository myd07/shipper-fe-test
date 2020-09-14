import styled from 'styled-components';

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
    }
  }
`;