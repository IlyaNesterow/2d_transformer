import React from 'react'
import styled from 'styled-components'
import Router from './components/router'


const App = () => {
  return (
    <Wrapper>
      <h2>2D Transformations</h2>
      <Router/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
h2{
  text-align: center;
  background-color: #333;
  padding: 1rem;
  color: #393;
}
`

export default App
