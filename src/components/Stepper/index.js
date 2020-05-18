import React, { useState } from 'react'
import { StepList } from '../StepList/index'
import { Step } from '../Step'

// Style
import { Div } from './styles'

// Components
import { Temperature } from '../Temperature'
import { TyC } from '../TemsAndConditions'
import { FinishInformation } from '../FinishInformation'

export const Stepper = () => {
  const [temp, setTemp] = useState('0')
  const [tyc, setTyc] = useState(false)

  const temperatureChange = (value) => {
    setTemp(value)
  }

  const TYCChange = (value) => {
    setTyc(value)
  }

  return (
    <Div>
      <StepList>
        <Step>
          <Temperature
            temperatureChange={(value) => temperatureChange(value)}
          />
        </Step>
        <Step>
          <TyC
            TYCChange={(value) => TYCChange(value)}
          />
        </Step>
        <Step>
          <FinishInformation
            temp={temp}
            tyc={tyc}
          />
        </Step>
      </StepList>
    </Div>
  )
}
