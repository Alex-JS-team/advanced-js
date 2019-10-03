import React from 'react';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    setInterval(
        () => this.time(),
        1000
    )
  }

  time = () => {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
        <footer><p>{this.props.copy} - {this.state.date.toLocaleTimeString()}</p></footer>
    )
  }
}