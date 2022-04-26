import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;

  @media (min-width: 400px) {
    margin-top: -5px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19); */
`;

export const MutedLink = styled.a`
  font-size: 16px;
  color: rgb(111, 114, 133);
  font-weight: 500;
  text-decoration: none;
  cursor: default;
`;

export const BoldLink = styled.a`
  font-size: 16px;
  // color: rgb(241, 196, 15);
  color: #5e4d9b;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  font-family: inherit;
  direction: rtl;
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 14px;
  border-radius: 10px;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);

  &::placeholder {
    color: rgb(111, 114, 133);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #5e4d9b;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  // background: rgb(241, 196, 15);
  // background: linear-gradient(
  //   58deg,
  //   rgba(241, 196, 15, 1) 20%,
  //   rgba(243, 172, 18, 1) 100%
  // );
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #9389bd 0%, #5e4d9b 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;
