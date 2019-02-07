import styled from "styled-components";

export const ReviewFormContainer = styled.div`
  margin: 200px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 10px;
  background: #fff;

  .review-form-header {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
  }

  .review-form-header img {
    width: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    width: 50%;
    justify-content: space-between;
  }

  input {
    padding: 10px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid lightgrey;
  }

  textarea {
    padding: 10px;
    height: 100px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid lightgrey;
  }
`;
