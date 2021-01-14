import React, { forwardRef } from 'react'

import Input from './InputField'


const AddOneOrTwo = forwardRef(({ props = { step: 1 }, label, xOnChange, yOnChange }, { xRef, yRef }) => (
  <div id="add-smth">
    <Input 
      label={ 'x ' + label }
      ref={ xRef }
      onChange={ xOnChange }
      props={{
        ...props,
        type: 'number'
      }}
    />
    <Input 
      label={ 'y ' + label }
      ref={ yRef }
      onChange={ yOnChange }
      props={{
        ...props,
        type: 'number'
      }}
    />
  </div>
))

export default AddOneOrTwo