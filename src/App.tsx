import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const {isWorkflowValid} = require('github-actions-validator/src');

class App extends Component {
  state = {
    workflowValue: '',
    checkWorkflow: true,
    workflowValid: false,
  }


  
  handleChange = (event:React.FormEvent<HTMLTextAreaElement>) => {
    console.log(event.currentTarget.value)
    this.setState({
      workflowValue: event.currentTarget.value,
      checkWorkflow: true,
    })
  }

  checkIfWorkflowIsValid = () => {
    this.setState({
      workflowValid: isWorkflowValid(this.state.workflowValue),
      checkWorkflow: false
    })
  }

  getWorkflowStatusDescription = () =>{
    return this.state.workflowValid ? 'Workflow is valid' : 'Workflow is not valid'
  }

  getResultClassName = () =>{
    if(this.state.checkWorkflow){
      return ''
    }

    return this.state.workflowValid ? 'isValid' : 'isNotValid'
  }

  render() {
    return (
      <div className="grid-container">
        <div className="header"><h1>Github Actions Validator Demo</h1></div>
        <div className="check">
          <button onClick={this.checkIfWorkflowIsValid}>Check Workflow</button>
          <div className={`result ${this.getResultClassName()}`}> {this.state.checkWorkflow ? 'Click button to check workflow' : this.getWorkflowStatusDescription() }</div>
        </div>
        <div className="input">
          <textarea
            value={this.state.workflowValue}
            onChange={this.handleChange}
          />
        </div>
        <div className="footer">&copy; 2018-2019 Aleksander "Feridum" Patschek</div>
      </div>
    );
  }
}

export default App;
