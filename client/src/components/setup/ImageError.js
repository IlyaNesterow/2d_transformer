import React from 'react'
import styled from 'styled-components'


const ImageError = ({ message, onClose }) => {
  const handleClick = (e) => {
    e.preventDefault()
    onClose()
  }

  return(
    <Error>
      <p>{ message }</p>
      <button onClick={ handleClick }>Cancel</button>
    </Error>
  )
}

const Error = styled.div`
  position: absolute;
  padding: 2rem;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: solid #393 2px;
  border-radius: 1rem;
  backdrop-filter: blur(15px);
  p{
    font-size: 1.3rem;
    margin-bottom: .5rem;
  }
  button{
    width: 100%;
    margin-top: .5rem;
    color: #d33;
    font-weight: 600;
    font-size: 1rem;
    padding: .2rem;
    background-color: transparent;
    border: solid 1px #333;
    border-radius: .3rem;
  }
  button:active{
    outline: none;
  }
`

export default ImageError