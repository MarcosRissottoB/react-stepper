import React from 'react'

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
      <input onChange={e => handlerChange(e)} placeholder='Ingresa tu temperatura' />
    </div>
  )
}
