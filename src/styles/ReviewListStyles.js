import styled from "styled-components";

export const ReviewListContainer = styled.div`
  .review-item {
    border-top: 1px solid lightgrey;

    :first-of-type {
      border-top: none;
    }
    padding: 10px 0;
    .review-header {
      display: flex;
      align-items: baseline;

      h4 {
        font-size: 1.4rem;
        margin: 0;
        margin-right: 15px;
      }

      p {
        margin: 0;
      }
    }
  }
`;
