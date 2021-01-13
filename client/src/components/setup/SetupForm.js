import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import AddCord from './AddCoord'
import ErrorLog from './ErrorLog'
import AddOneOrTwo from './AddOneOrTwo'


const SetupForm = ({ handleSubmission }) => {
  const [ setup, setSetup ] = useState({x: [], y: []})
  const [ error, setError ] = useState('')

  const connectRef = useRef(null)
  const angle = useRef(null)
  const scaleX = useRef(null)
  const scaleY = useRef(null)
  const moveX = useRef(null)
  const moveY = useRef(null)

  const addCoord = (x, y) => {
    setSetup({
      ...setup,
      x: [...setup.x, x],
      y: [...setup.y, y]
    })
  }

  const connect = (e) => {
    if(e.target.checked)
      setSetup({
        ...setup,
        connect: true
      })
    else {
      const _setup = setup
      delete _setup.connect
      setSetup(_setup)
    }
  }

  const addAngle = (e) => {
    const val = e.target.value
    if(val.length > 0)
      setSetup({
      ...setup,
      angle: parseInt(val)
      })
    else {
      const _setup = setup
      delete _setup.angle
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
    if(error.length === 0){
      handleSubmission(setup)
      formCleanUp()
    }
  }

  const formCleanUp = () => {
    connectRef.current.checked = false
    angle.current.value = ''
    scaleX.current.value = ''
    scaleY.current.value = ''
    moveX.current.value = ''
    moveY.current.value = ''
  }

  return(
    <Wrapper>
      <h3>Setup a transformation</h3>
      <ErrorLog error={error}/>
      <form>
        <AddCord
          setError={val => setError(val)}
          onSubmit={addCoord}
        />
        <label>Connect start with end</label>
        <input 
          type="checkbox" 
          ref={ connectRef } 
          onChange={connect}
        />
        <label>Add rotation angle</label>
        <input 
          type="number" 
          ref={ angle } 
          onChange={addAngle}
        />
        <AddOneOrTwo
          props={{min: 0}}
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
        <button onClick={ onSubmit }>Generate Plot!</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

export default SetupForm