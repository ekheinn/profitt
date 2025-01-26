import styled from "styled-components";

export const MainDiv = styled.div`
  text-align: center;
  color: #bf4f74;
  font-size: 0.8em;

  display: flex;
  gap: 1rem;
  justify-content: space-evenly;

  #personList {
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style: none;
      margin: 1rem 0;
      padding: 0;
    }

    li {
      background-color: rgb(54, 54, 54);
      padding: 0.5rem;
      border-radius: 1rem;

      display: flex;
      gap: 0.5rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }

    p {
      display: flex;
      gap: 1rem;
      margin: 0;
    }
  }

  #proxyList {
    div {
      display: flex;
      flex-direction: row-reverse;

      textarea {
        height: 3rem;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style: none;
      margin: 1rem 0;
      padding: 0;

      li {
        background-color: rgb(54, 54, 54);
        padding: 0.5rem;
        border-radius: 1rem;

        display: flex;
        gap: 0.5rem;
      }

      p {
        display: flex;
        gap: 1rem;
        margin: 0;
      }
    }
  }

  label {
    display: flex;
    align-items: center;
  }

  .customCheckbox {
    display: none;
  }

  .customLabel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 2px solid #999;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s, border-color 0.3s;
  }

  .customCheckbox:checked + .customLabel {
    background-color: #bf4f74;
    border-color: #a14060;
  }

  .customCheckbox:checked + .customLabel::before {
    content: "✔";
    color: white;
    font-size: 16px;
    position: absolute;
  }
`;
