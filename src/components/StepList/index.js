import React from 'react'

export class StepList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentStep: 0,
      totalSteps: this.props.children.length - 1
    }
  }

  previousStepClick () {
    this.setState({ currentStep: this.state.currentStep - 1 })
  }

  nextStepClick () {
    this.setState({ currentStep: this.state.currentStep + 1 })
  }

  render () {
    const children = React.Children.map(this.props.children, (child, index) => {
      const { currentStep, totalSteps } = this.state

      return React.cloneElement(child, {
        isActive: index === currentStep,
        displayPrevious: currentStep > 0,
        displayNext: currentStep < totalSteps,
        displaySubmit: currentStep === totalSteps,
        previousStepClick: () => this.previousStepClick(),
        nextStepClick: () => this.nextStepClick()
      })
    })

    return children
  }
}
