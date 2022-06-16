import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  max-width: 350px;
  width: 95%;
  height: 250px;
  border-radius: 10px;
  margin: 7px;
  box-shadow: 4px 5px black;
  transition: all 0.8s;
  transform: rotateY(360deg);

  > button {
    border: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    color: white;
    height: 50px;
    width: 150px;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
  }

  > button:hover {
    opacity: 0.8;
  }

  > button:active {
    opacity: 0.7;
  }

  ${({ changedScreen }) => changedScreen && css`
    transform: rotateY(0deg);
  `}
`

export const ContainerButtons = styled.div`
  display: flex;

  > button {
    border: none;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    color: white;
    height: 50px;
    width: 80px;
    margin: 10px 5px 0 5px;
  }

  > button:hover {
    opacity: 0.8;
  }

  > button:active {
    opacity: 0.7;
  }
`
export const ContainerSetTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;

  > button {
    border: none;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    color: white;
    height: 50px;
    width: 100%;
    font-size: 18px;
    margin-top: 15px;
  }

  > button:hover {
    opacity: 0.8;
  }

  > button:active {
    opacity: 0.7;
  }

  > div {
    display:flex;
    align-items: center;
    width: 100%;
  }

  > div input {
    width: 100%;
    height: 50px;
    font-size: 24px;
    padding: 7px;
    border-radius: 6px;
    outline: none;
    border: 1px solid gray;
    text-align: right;
  }
`
