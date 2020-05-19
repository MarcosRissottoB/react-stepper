import React from 'react'
import PropTypes from 'prop-types'

export const FinishInformation = ({ temp, tyc }) => {
  const terms = tyc ? 'acepto' : 'no acepto'
  return (
    <>
      <p>Su temperatura es de {temp} grados</p>
      <p>Y {terms} los terminos y condiciones</p>
    </>
  )
}

FinishInformation.propTypes = {
  temp: PropTypes.string.isRequired,
  tyc: PropTypes.bool.isRequired
}
