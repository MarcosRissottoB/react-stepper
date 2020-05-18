import React from 'react'
import PropTypes from 'prop-types'

// Style
import { Input } from './styles'

export const Temperature = ({ temperatureChange }) => {
  const validationInput = () => console.log('Validation not implementated')
  const handlerChange = e => {
    const value = e.target.value
    validationInput(value)
    temperatureChange(value)
  }
  return (
    <div>
      <h2>¿Qué temperatura tienes?</h2>
      <Input type='number' onChange={e => handlerChange(e)} placeholder='Ingresa tu temperatura' />
    </div>
  )
}

Temperature.propTypes = {
  temperatureChange: PropTypes.func.isRequired
}
