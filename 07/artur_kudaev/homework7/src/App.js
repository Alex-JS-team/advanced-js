import React from 'react';
import Option from "./components/option";
import Spinner from "./components/spiner";
import Card from "./components/card";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      data: [],
      spinner: true,
      filterData: []
    }

  }

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users ')
        .then(response => response.json())
        .then(response => this.setState({
          data: response,
          filterData: response,
          spinner: false
        }));
  }

  componentDidMount() {
    this.getData();
  }

  filterByName = (e) => {
    const filteredData = this.state.data.filter(el=> {
        if(e.target.value === 'All') {
          return el.name
        }
       return el.name === e.target.value
    })
        this.setState({
          filterData: filteredData
    })
  }

  render() {
    const {data, spinner, filterData} = this.state;
    return (
      <React.Fragment>
        {spinner ?
          <Spinner/>
          :
          <div className='wrapper'>
            <select onChange={this.filterByName}>
              <option>All</option>
              {data.map((el, i)=>{
                return <Option key={i} name={el.name} />
              })}
            </select>
            <div className="card-wrap">
              {
                filterData.map((el, i) => {
                  return <Card key={i} name={el.name} username={el.username} email={el.email}/>
                })
              }
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default App;
