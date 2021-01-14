import React, { useState } from 'react'
import styled from 'styled-components'

import SetupForm from './SetupForm'
import ImageError from './ImageError'
import Menu from '../menu'


const Setup = () => {
  const [ image, setImage ] = useState(null)
  const [ imageError, setImageError ] = useState('')

  const handleSetupSubmission = (setup) => {
    setImageError('')
    fetch('/plot', {
      method: 'PATCH', 
      body: JSON.stringify(setup),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200 || res.status === 201)
          return res.blob()
        throw new Error('Server failed')
      })
      .then(res => setImage(URL.createObjectURL(res)))
      .catch(err => setImageError(err.message))
  }
    
  const renderImage = () => {
    if (image !== null)
      return <img src={ image } alt="plot/plots"/>
    else if (imageError.length > 0)
      return  <ImageError 
                message={ imageError }
                onClose={() => setImageError('')}
              />
    else return null
  }

  return(
    <>
      <Menu/>
      <SetupWrapper>
        <SetupForm handleSubmission={ handleSetupSubmission }/>
        { renderImage() }
      </SetupWrapper>
    </>
  )
}


const SetupWrapper = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;
  border-radius: .5rem;
  border: solid 1px #666;
  box-shadow: 0 0 .1rem #333;
  img{
    border: solid 2px #393;
    border-radius: .3rem;
    box-shadow: 0 0 .2rem #333;
    max-width: 47vw;
    margin: .5rem auto;
  }
  @media only screen and (max-width: 800px){
    display: block;
    img{
      max-width: 100%
    }
  }
`

export default Setup