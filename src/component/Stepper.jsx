import React, { Component } from "react";

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepKey: this.props.children[0].props.activeKey
    };
  }

  handleActiveStep = activeStepKey => {
    this.setState({ activeStepKey });
  };

  renderChildren = () => {
    const { children } = this.props;
    let stepState = "visited";
    let visited = true;
    let isFirstStep = true;
    let isLastStep = false;
    const { activeStepKey } = this.state;
    return React.Children.map(children, (child, index) => {
      if (!visited) {
        stepState = "unvisited";
      }
      if (child.props.activeKey === activeStepKey) {
        stepState = "actived";
        visited = false;
      }
      if (index > 0) {
        isFirstStep = false;
      }
      if (index === children.length - 1) {
        isLastStep = true;
      }
      return React.cloneElement(child, {
        number: index + 1,
        stepState,
        isFirstStep,
        isLastStep,
        ActiveStep: this.handleActiveStep
      });
    });
  };
  render() {
    return <div className="stepper-container">{this.renderChildren()}</div>;
  }
}

export default Stepper;
