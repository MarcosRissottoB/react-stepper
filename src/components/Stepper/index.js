import React from 'react'
import { StepList } from '../StepList/index'
import { Step } from '../Step'

// Style
import { Div } from './styles'

// Component
import { Temperature } from '../forms/Temperature'
import { TyC } from '../forms/TemsAndConditions'

const PageThree = () => {
  console.log('PageThree')
  return <h2>We have a third page.</h2>
}

export const Stepper = () => {
  const temperatureChange = (value) => {
    console.log('temperatureChange Stepper', value)
  }

  const TYCChange = (value) => {
    console.log('TYCChange Stepper', value)
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
        <Step component={PageThree} />
      </StepList>
    </Div>
  )
}
