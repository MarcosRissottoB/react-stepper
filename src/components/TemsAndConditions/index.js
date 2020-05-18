import React from 'react'
import PropTypes from 'prop-types'

// Style
import { Div, Button } from './styles'

export const TyC = ({ TYCChange }) => {
  const validationInput = () => console.log('Validation not implementated')
  const handlerClick = (value) => {
    validationInput(value)
    TYCChange(value)
  }
  return (
    <div>
      <h2>¿Aceptas nuestros terminos y condiciones?</h2>
      <Div>
        <Button
          value='true'
          onClick={e => handlerClick(true)}
          className='btn btn-secondary float-left'
        >
          Accept
        </Button>
        <Button
          value='false'
          onClick={e => handlerClick(false)}
          className='btn btn-danger float-right'
        >
          Cancel
        </Button>
      </Div>
    </div>
  )
}

TyC.propTypes = {
  TYCChange: PropTypes.func.isRequired
}
