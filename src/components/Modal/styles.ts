import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  label {
    color: var(--text-title);
    font-size: 1rem;
    margin-bottom: 0.5rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  input {
    width: 100%;
    padding: 1rem 1rem;
    margin: 0.5rem;

    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    grid-column: 1 / span 2;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
