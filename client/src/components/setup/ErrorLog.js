import React from 'react'
import styled from 'styled-components'


const ErrorLog = ({ error }) => 
  error.length > 0 
    ? <Log>{ error + '!' }</Log>
    : null

const Log = styled.div`
  text-align: center;
  background-color: #fee;
  color: #933;
  padding: .3rem;
  border: solid 1px #933;
  border-radius: .9rem;
`

export default ErrorLog