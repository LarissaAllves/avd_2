import styled from "styled-components";

export const Container = styled.header`
  background: var(--green);

  h2 {
    align-items: left;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: auto;
    height: 40px;
  }

  .react-modal-include {
    background: transparent;
    border: 0;
  }
`;
