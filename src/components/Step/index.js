import React from 'react'

// Style
import { ChildComponent, Div } from './styles'

export const Step = ({
  isActive,
  displayPrevious,
  displayNext,
  displaySubmit,
  previousStepClick,
  nextStepClick,
  component,
  children
}) => {
  if (isActive === false) return null

  return (
    <>
      <ChildComponent>
        {component ? React.createElement(component) : children}
      </ChildComponent>
      <Div>
        <Previous
          isActive={displayPrevious}
          previousStepClick={() => previousStepClick()}
        />
        <Div>
          <Next
            isActive={displayNext}
            nextStepClick={() => nextStepClick()}
          />
          <Submit isActive={displaySubmit} />
        </Div>
      </Div>
    </>
  )
}

const Next = ({ isActive, nextStepClick }) => {
  if (isActive === false) return null

  return (
    <button onClick={() => nextStepClick()}>
    Next
    </button>
  )
}

const Previous = ({ isActive, previousStepClick }) => {
  if (isActive === false) return null

  return (
    <button onClick={() => previousStepClick()}>
      Previous
    </button>
  )
}

const Submit = ({ isActive }) => {
  if (isActive === false) return null

  return (
    <button type='submit'>
      Submit
    </button>
  )
}
