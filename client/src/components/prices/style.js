import styled from "styled-components";

export const MainDiv = styled.div`
  #sheet {
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 40rem;

    text-align: center;

    table {
      border-radius: 1rem;
      background-color: #111;
    }
    td {
      overflow: hidden;
    }
    input {
      padding-left: 1rem;
      height: 1.3rem;
      width: 90%;
      border: none;
      border-radius: 0.5rem;
    }

    .gain {
      color: #6dff57;
    }

    .spent {
      color: #ff5757;
    }

    button {
      align-self: flex-end;
    }
  }
`;
