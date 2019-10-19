import React from 'react';
import users from '../data/users'
import Select from "./select";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      data: users,
      filterData: users,
      index: null
    }
  }

  filterItems = (index) => {
    //this.index = index;
    index === 'All' ?
      this.setState({
        filterData: this.state.data
      })
      :
      this.setState({
        filterData: this.state.data.filter((el) => {
          return el.age === Number(index)
        })
      })
  };

  render() {
    const {filterData} = this.state;
    return (
      <React.Fragment>
        <main>
          <Select func={this.filterItems} items={this.state.data}/>
          {
            filterData.map((el, i)=> {
              return (
                <div key={i} className="item">
                  <p>{el.name}</p>
                  <p>{el.age}</p>
                </div>
              )
            })
          }
        </main>
      </React.Fragment>
    )
  }
}