import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  formElementsValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state.text + ' --- Text\n', this.state.number + ' --- Number\n', this.state.email + ' --- Email')
    return (
      <form>
        <input onChange={this.formElementsValue} type='text' name='text' placeholder="Text"/><br/>
        <input onChange={this.formElementsValue} type='number' name='number' placeholder="Number"/><br/>
        <input onChange={this.formElementsValue} type='email' name='email' placeholder="Email"/>
      </form>
    )
  }
}