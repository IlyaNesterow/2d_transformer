import React from 'react'
import styled from 'styled-components'

import Menu from '../menu'


const Main = () => (
  <>
    <Menu/>
    <Wrapper>
      <h1>Here is a quick guide</h1>
      <p id="instruction">
        <span>Click "try transformations", fill up the form and voila!</span><br/>You need to enter more than one point, to get a plot, add some configuration <b>you can set the scale for x and y (but keep in mind that scale quotient cannot be less that 0), set move for x or y and you cam set rotation angle as well (But in some cases this feature may not work properly)</b>, then once configuration is done click on generate plot and you will get the plot
      </p>
    </Wrapper>
  </>
)

const Wrapper = styled.div`
  h1{
    text-align: center;
    font-weight: 600;
    color: #444;
  }
  #instruction{
    margin-top: 2rem;
    line-height: 1.7rem;
    margin-left: 30%;
    width: 40%;
  }
  #instruction b{
    color: #393;
  }
  #instruction span{
    font-weight: 800;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 1200px){
    #instruction{
      margin-left: 10%;
      width: 80%;
    }
  }
`

export default Main