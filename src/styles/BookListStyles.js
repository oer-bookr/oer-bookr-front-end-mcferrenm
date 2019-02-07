import styled from "styled-components";

export const BookListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: center;
`;

export const SubNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 20px;
  background: #fff;

  button {
    margin: 0;
  }

  .left-nav {
    width: 33%;
  }

  .sub-nav-links h4 {
    margin-right: 10px;
  }

  .sub-nav-links {
    width: 500px;
    min-width: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid lightgrey;
    border-radius: 3px;
    padding: 15px 20px;
  }

  .sub-nav-links a {
    padding: 0 25px;
    border-right: 1px solid lightgrey;
  }

  .sub-nav-links a:last-of-type {
    border-right: 0;
    margin-right: 0;
  }

  .right-nav {
    width: 33%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const BookListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  padding: 0 0 10px;
  justify-content: space-between;
  align-items: flex-start;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  border: 1px solid rgb(244, 244, 244);
  margin: 0 30px 30px 0;
  border: 1px solid lightgrey;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background: #fff;

  img {
    width: 310px;
    height: 410px;
  }

  h2 {
    margin: 0;
    font-size: 1rem;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  .item-body {
    width: 100%;
    border-top: 1px solid rgb(244, 244, 244);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    height: 100px;
  }
`;
