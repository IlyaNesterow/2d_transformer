import React, { forwardRef } from 'react'
import styled from 'styled-components'


const InputField = forwardRef(({ label, props = {}, onChange }, ref) => 
  <Wrapper>
    <label>{ label }</label>
    <input 
      { ...props } 
      ref={ ref }
      onChange={ onChange }
    />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 50%;
  label{
    display: block;
  }
  input{
    margin: .3rem auto;
    padding: .3rem .5rem;
    border-radius: 1rem;
    border: solid 1px #333;
    width: 95%;
  }
`

export default InputField