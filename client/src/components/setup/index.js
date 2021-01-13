import React, { useState } from 'react'
import styled from 'styled-components'
import SetupForm from './SetupForm'


const Setup = () => {
  const [ image, setImage ] = useState(null)

  const handleSetupSubmission = (setup) => {
    fetch('/plot', {
      method: 'PATCH', 
      body: JSON.stringify(setup),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.blob())
      .then(res => setImage(URL.createObjectURL(res)))
  }

  return(
    <SetupWrapper>
      <SetupForm handleSubmission={ handleSetupSubmission }/>
      { image !== null && 
        <img src={ image } alt="plot"/>
      }
    </SetupWrapper>
  )
}


const SetupWrapper = styled.div`

`

export default Setup