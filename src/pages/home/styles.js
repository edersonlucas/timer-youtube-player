import styled from 'styled-components';
import backgroundImage from '../../assets/images/background-image.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(30, 30, 30, 0.8);
  color: white;
  width: 100%;
  height: 100vh;
  
  > button {
    border: none;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
    color: white;
    height: 50px;
    max-width: 140px;
    width: 100%;
    margin: 10px 5px 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      margin-right: 5px;
    }
  }

  > button:hover {
    opacity: 0.8;
  }

  > button:active {
    opacity: 0.7;
  }
  

  &::after {
    content: "";
    background: url(${backgroundImage});
    background-size: cover;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`
export default Container;