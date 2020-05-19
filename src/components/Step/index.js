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
}) => (
  isActive &&
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

const Next = ({ isActive, nextStepClick }) => (
  isActive &&
    <button onClick={() => nextStepClick()}>
        Next
    </button>
)

const Previous = ({ isActive, previousStepClick }) => (
  isActive &&
    <button onClick={() => previousStepClick()}>
      Previous
    </button>
)

const Submit = ({ isActive }) => (
  isActive &&
    <button type='submit'>
      Submit
    </button>
)
