import styled from "styled-components";

export const LoginContainer = styled.div`
  margin: 200px auto;
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 10px;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 10px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid lightgrey;
    margin-bottom: 10px;
  }
`;
