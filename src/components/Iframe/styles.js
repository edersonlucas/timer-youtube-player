import styled, { css }  from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  max-height: 380px;
  width: 95%;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: all 0.7s;
  transform: translateY(-100vh);
  z-index: 2;
  background-color: rgba(0,0,0, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 4px;

  
  ${({ open }) => open && css`
  transform: translateY(0);
  `}

  > button {
    right: 0;
    top: 0;
    margin: 2px;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: rgb(40, 40, 40);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button:first-child {
    left: 0;
  }

  > button:last-child {
    margin-right: 50px;
  }

  > button:hover {
    background-color: rgb(33, 33, 33);
  }

  > button:active {
    opacity: 0.7;
  }

  > iframe {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    margin-top: 4px;
    border: 4px solid white;
  }

  @media screen and (max-width: 350px){
    > h2 {
      transform: translateY(-38px);
      background-color: black;
      border-radius: 10px;
    }
  }
`

export default Container;