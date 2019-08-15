import React, { Component } from "react";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderClassState = () => {
    const { stepState, isFirstStep, isLastStep } = this.props;
    let classStep = isFirstStep ? "step first-step " : "step ";
    classStep += isLastStep ? "last-step " : "";
    return classStep + stepState;
  };
  render() {
    const { title, number, activeKey } = this.props;
    return (
      <div
        className={this.renderClassState()}
        onClick={() => this.props.ActiveStep(activeKey)}
      >
        <div className="number">{number}</div>
        <div className="title">{title}</div>
        <div className="line-before" />
        <div className="line-after" />
      </div>
    );
  }
}

export default Step;
