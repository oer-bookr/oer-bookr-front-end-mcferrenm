import styled from "styled-components";

export const BookDetailsContainer = styled.div`
  margin: 10px auto;
  padding: 0 30px 10px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  .buttons {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    background: rgb(251, 251, 251);
  }
  .book-details-body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }

  .book-details-text {
    width: 48%;
    margin-left: 10px;
  }

  img {
    width: 300px;
    height: 400px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;
