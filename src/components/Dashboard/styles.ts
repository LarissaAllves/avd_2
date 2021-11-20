import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 0px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1rem;

  display: grid;
  grid-gap: 28px;

  .event {
    width: 100%;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;

    .like-box {
      margin-top: 15px;
    }

    .button-container {
      margin-top: 15px;
    }

    button + button {
      margin-left: 10px;
    }

    button {
      padding: 4px;
      img {
        width: 24px;
      }
    }
  }
`;
