import React, { forwardRef } from 'react'


const AddOneOrTwo = forwardRef(({ props = { step: 1 }, label, xOnChange, yOnChange }, { xRef, yRef }) => {
  return(
    <div id="add-smth">
      <label>{ 'x ' + label }</label>
      <input 
        { ...props } 
        ref={ xRef }
        type="number" 
        onChange={ xOnChange }
      />
      <label>{ 'y ' + label }</label>
      <input 
        { ...props } 
        ref={ yRef }
        type="number" 
        onChange={ yOnChange }
      />
    </div>
  )
})

export default AddOneOrTwo