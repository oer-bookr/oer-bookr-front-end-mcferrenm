import styled from "styled-components";

export const Jumbo = styled.div`
  background-image: url(${props => props.bg});
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BigSearchInput = styled.input`
  width: 450px;
  padding: 10px;
  border-radius: 5px;
  margin: 0 10px 80px 0;
`;

export const BigSearchButton = styled.button`
  padding: 10px 60px;
  border-radius: 5px;
  margin-bottom: 80px;
  cursor: pointer;
`;
