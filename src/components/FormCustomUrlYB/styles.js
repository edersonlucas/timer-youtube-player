import styled, { css } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  max-height: 180px;
  width: 95%;
  height: 100%;
  margin: 10px;
  background-color: rgba(0,0,0, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  position: absolute;
  transition: all 0.7s;
  transform: translateY(-100vh);
  z-index: 4;

  >label {
    width: 95%;
  }

  > label input {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    padding: 5px;
    border-radius: 5px;
  }

  > button {
    border: none;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    color: white;
    height: 40px;
    width: 95%;
    margin-top: 10px;
  }

  > button:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    margin: -5px;
  }

  > button:hover {
    opacity: 0.8;
  }

  > button:active {
    opacity: 0.7;
  }

  > button:last-child {
    margin-top: 5px;
  }

  > label p {
    margin-right: 25px;
  }

  ${({ open }) => open && css`
    transform: translateY(50px);
  `}
`
export default Form