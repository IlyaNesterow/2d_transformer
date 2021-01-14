import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import AddCord from './AddCoord'
import ErrorLog from './ErrorLog'
import AddOneOrTwo from './AddOneOrTwo'
import InputField from './InputField'


const SetupForm = ({ handleSubmission }) => {
  const [ setup, setSetup ] = useState({ x: [], y: [] })
  const [ error, setError ] = useState('')

  const connectRef = useRef(null)
  const original = useRef(null)
  const angle = useRef(null)
  const scaleX = useRef(null)
  const scaleY = useRef(null)
  const moveX = useRef(null)
  const moveY = useRef(null)

  const addCoord = (x, y) => {
    setSetup({
      ...setup,
      x: [ ...setup.x, x ],
      y: [ ...setup.y, y ]
    })
  }

  const checkboxOnChange = (checked, key) => {
    if(checked)
      setSetup({
        ...setup,
        [key]: true
      })
    else {
      const _setup = setup
      delete _setup[key]
      setSetup(_setup)
    }
  }

  const addAngle = (e) => {
    const val = e.target.value
    if(val.length > 0)
      setSetup({
        ...setup,
        rotate: {
          angle: parseInt(val)
        }
      })
    else {
      const _setup = setup
      delete _setup.rotate
      setSetup(_setup)
    }
  }

  const scaleOrMoveOnChange = (val, key, subKey) => {
    if(val.length === 0 || val === '0'){
      const _setup = setup
      delete _setup[key][subKey]
      setSetup(_setup)
    } else {
      setSetup({
        ...setup,
        [key]: {
          ...setup[key],
          [subKey]: parseInt(val)
        }
      })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(error.length === 0 && setup.x.length > 2){
      handleSubmission(setup)
      formCleanUp()
      setSetup({ x: [], y: [] })
    }
  }

  const formCleanUp = () => {
    connectRef.current.checked = false
    original.current.checked = false
    angle.current.value = ''
    scaleX.current.value = ''
    scaleY.current.value = ''
    moveX.current.value = ''
    moveY.current.value = ''
  }

  return(
    <Wrapper>
      <h3>Setup a transformation</h3>
      <form>
        <ErrorLog error={ error }/>
        <AddCord
          setError={val => setError(val)}
          onSubmit={ addCoord }
        />
        <InputField
          label="Add rotation angle"
          ref={ angle }
          onChange={ addAngle }
          props={{
            type: 'number'
          }}
        />
        <AddOneOrTwo
          props={{ min: 0 }}
          label="scaling"
          ref={{ xRef: scaleX, yRef: scaleY }}
          xOnChange={e => scaleOrMoveOnChange(e.target.value, 'scale', 'scale_x')}
          yOnChange={e => scaleOrMoveOnChange(e.target.value, 'scale', 'scale_y')}
        />
        <AddOneOrTwo
          label="moving"
          ref={{ xRef: moveX, yRef: moveY }}
          xOnChange={e => scaleOrMoveOnChange(e.target.value, 'move', 'move_x')}
          yOnChange={e => scaleOrMoveOnChange(e.target.value, 'move', 'move_y')}
        />
        <div id="checkbox">
          <input 
            type="checkbox" 
            ref={ connectRef } 
            onChange={e => checkboxOnChange(e.target.checked, 'connect')}
          />
          <p>Connect start with end</p>
        </div>
        <div id="checkbox">
          <input 
            type="checkbox" 
            ref={ original } 
            onChange={e => checkboxOnChange(e.target.checked, 'original')}
          />
          <p>Return original figure</p>
        </div>
        <button onClick={ onSubmit }>Generate Plot!</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h3{
    text-align: center;
    color: #555;
    font-weight: 300;
    padding-bottom: .8rem; 
  }
  form{
    padding: 1rem;
    border: solid 2px #393;
    border-radius: .5rem;
  }
  p{
    display: inline
  }
  #add-smth{
    display: flex;
    justify-content: space-between;
  }
  button{
    color: #393;
    padding: .3rem 1rem;
    font-weight: 600;
    font-size: 1rem;
    margin-left: 20%;
    margin-top: .3rem;
    margin-bottom: .5rem;
    width: 60%;
    background-color: transparent;
    border: solid 1px #333;
    border-radius: 1rem;
  }
  div#checkbox{
    margin-bottom: .5rem;
  }
  div#checkbox > input[type="checkbox"]{
    margin-right: .5rem;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  input:focus, button:focus{
    outline: none;
  }
  input:focus{
    transition: background-color .5s;
    background-color: #eee
  }
  button:active{
    transition: all .5s;
    color: #333;
    background-color: #efe;
    border-color: #393;
  }
`

export default SetupForm