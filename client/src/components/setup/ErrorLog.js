import React from 'react'
import styled from 'styled-components'


const ErrorLog = ({ error }) => 
  error.length > 0 
    ? <Log>{error}</Log>
    : null

const Log = styled.div`

`

export default ErrorLog