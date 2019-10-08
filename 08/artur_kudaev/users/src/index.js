import React from 'react';
import ReactDOM from 'react-dom';
import User from "./user";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      value: null
    }

  }

  allUsers = () => {
    fetch(`https://api.github.com/search/users?q=tom&sort=followers`)
        .then(response => response.json())
        .then(response => {
          this.setState({
            data: response.items
          }, console.log(this.state.data))
        })
  }

  componentDidMount() {
    this.allUsers()
  }

  getUsers = () => {

    this.state.value ?

      fetch(`https://api.github.com/search/users?q=${this.state.value}`)
        .then(response => response.json())
        .then(response => {
          this.setState({
            data: response.items
          }, console.log(this.state.data))
        })

        :
        this.allUsers()
    }

  inputValue = (e) => {
    this.setState({
      value: e.target.value
    }, console.log(this.state.value, 'value-input'))
  }

  render() {
    const {data} = this.state;
    return (
        <React.Fragment>

          <div className="input-group mb-3">
            <input type="text" className="form-control"  onChange={this.inputValue} placeholder="Recipient's username"
                   aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={this.getUsers} type="button">Search</button>
              </div>
          </div>



          <div>
            {data.map(el => <User key={el.id} img={el.avatar_url} login={el.login} />)}
          </div>

        </React.Fragment>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));

