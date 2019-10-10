import React from 'react';
import ReactDOM from 'react-dom';
import User from "./user";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart } from 'react-chartkick'
import 'chart.js'
import './style.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      value: null,
      searchUrl: 'https://api.github.com/search/users?q='
    }

  }

  fetchFunc = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(response => {
          this.setState({
            data: response.items
          }, console.log(this.state.data))
        })
  }


  componentDidMount() {
    this.fetchFunc(`${this.state.searchUrl}tom`)
  }

  getUsers = () => {

    this.state.value ?

        this.fetchFunc(this.state.searchUrl+this.state.value)

        :

        this.fetchFunc(`${this.state.searchUrl}tom`)
    }

  inputValue = (e) => {
    this.setState({
      value: e.target.value
    }, console.log(this.state.value, 'value-input'))
  }


  render() {
    const {data} = this.state;
    console.log([...data.map(el=>[`${el.login}`, el.score])])
    return (
        <React.Fragment>

          <div className="input-group mb-3">
            <input type="text" className="form-control"  onChange={this.inputValue} placeholder="Recipient's username"
                   aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={this.getUsers} type="button">Search</button>
              </div>
          </div>

          <div className="wrap">
            <div className="users">
              {data.map(el => <User
                  key={el.id}
                  score={el.score}
                  img={el.avatar_url}
                  login={el.login}
                  link={el.html_url}
              />)}
            </div>
            <BarChart data={[...data.map(el=>[`${el.login}`, el.score])]} />
          </div>

        </React.Fragment>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));

