import React from 'react'

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
      {component ? React.createElement(component) : children}
      <Previous
        isActive={displayPrevious}
        previousStepClick={() => previousStepClick()}
      />
      <Next
        isActive={displayNext}
        nextStepClick={() => nextStepClick()}
      />
      <Submit isActive={displaySubmit} />
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
