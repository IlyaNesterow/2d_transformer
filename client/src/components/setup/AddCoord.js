import React, { useState, useRef } from 'react'


const AddCord = ({ onSubmit, setError }) => {
  const [ currentX, setCurrentX ] = useState(null)
  const [ currentY, setCurrentY ] = useState(null)

  const x = useRef(null)
  const y = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    if(!currentX || !currentY)
      return setError(`Enter ${!currentX ? 'x' : 'y'} value`)
    onSubmit(currentX, currentY)
    x.current.value = ''
    y.current.value = ''
    setCurrentX(null)
    setCurrentY(null)
  }

  return(
    <div id="add-smth">
      <label>x</label>
      <input 
        ref={ x }
        type="number"
        onChange={e => {
          const val = e.target.value
          if(val.length > 0 && !isNaN(parseInt(val))){
            setError('')
            setCurrentX(parseInt(val))
          } else if(currentX) setCurrentX(null)
        }}
      />
      <label>y</label>
      <input 
        ref={ y }
        type="number"
        onChange={e => {
          const val = e.target.value
          if(val.length > 0 && !isNaN(parseInt(val))){
            setError('')
            setCurrentY(parseInt(val))
          } else if(currentY) setCurrentY(null)
        }}
      />
      <button 
        id="add_coord"
        onClick={handleClick}
      >
        Add!
      </button>
    </div>
  )
}

export default AddCord