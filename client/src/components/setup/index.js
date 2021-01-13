import React from 'react'
import styled from 'styled-components'
import SetupForm from './SetupForm'


const Setup = () => {
  const handleSetupSubmission = (setup) => {
    console.log(setup)
  }

  return(
    <SetupWrapper>
      <SetupForm handleSubmission={ handleSetupSubmission }/>
    </SetupWrapper>
  )
}


const SetupWrapper = styled.div`

`

export default Setup