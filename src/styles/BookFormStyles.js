import styled from "styled-components";

export const BookFormContainer = styled.div`
  margin: 10px auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 10px;
  background: #fff;

  .book-form-header {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
  }

  .book-form-header img {
    width: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;
    width: 75%;
    justify-content: space-between;
  }

  input {
    padding: 10px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid lightgrey;
  }
`;
