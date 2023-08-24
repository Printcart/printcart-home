import styled from "styled-components";

export const Row = styled.div`
  margin: 0px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  > div {
    width: calc(100% / 4 - 34px);
    margin: 30px 17px 10px;

    @media only screen and (max-width: 1400px) {
      width: calc(100% / 4 - 34px);
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% / 3 - 34px);
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 594px) {
      width: calc(100% / 1 - 34px);
    }
  }
`;

export const FormControl = styled.div`
  display: flex;
  align-items: flex-end;
  width: 470px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  @media (max-width: 1220px) {
    width: 420px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }

  .email_input,
  .password_input {
    flex-grow: 1;
    margin-right: 20px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #626266;
          font-weight: 600;
        }
        .highlight {
          background: #626266;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 17px;
      font-weight: 300;
      color: #000;
      padding: 10px 15px;
      border-color: #cbd5e1;
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 16px;
      color: #626266;
      font-weight: 500;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
`;

export const Button = styled.button`
  padding: calc(0.5rem - 1px) calc(1.5rem - 1px);
  height: 40px;
  color: #fff;
  background-color: #424dc6;
  width: 100%;
  display: inline-block;
  position: relative;
  border: 1px solid transparent;
  text-align: center;
  border-radius: 3px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: 0.15s;
  vertical-align: top;
  line-height: 1.5rem;
  font-family: inherit;
  white-space: nowrap;
  outline: none;
  :disabled {
    pointer-events: none;
    opacity: 0.65;
    box-shadow: none;
  }
  :hover {
    color: #f9fafb;
    background-color: #2869d3;
    border-color: #2662c6;
  }
`;

export const StyleLoginForm = styled.div`
  margin-bottom: 24px;
  padding: 24px 0;
`;

export const StyleCreateAccount = styled.div`
  margin-top: 32px;
`;

export const StyleAlertForm = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  &.alert-success {
    background-color: #d1e7dd;
    color: #0a3622;
    border-color: #a3cfbb;
  }
  &.alert-danger {
    background-color: #f8d7da;
    color: #58151c;
    border-color: #f1aeb5;
  }
  &.alert-warning {
    background-color: #fff3cd;
    color: #052c65;
    border-color: #ffe69c;
  }
`;
