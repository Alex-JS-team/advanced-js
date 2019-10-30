import React from 'react';
import {connect} from "react-redux";

class CountShowItems extends React.Component {
  render() {
    return (
        <select onChange={(e)=> {
            this.props.setCountPageItems(e.target.value)
            localStorage.setItem('countPageItems', e.target.value)
          }
        }>
          <option>10</option>
          <option selected>30</option>
          <option>50</option>
          <option>100</option>
        </select>
    )
  }
}

export default connect(
    store => ({
      token: store.token
    }),
    dispatch => ({
      setCountPageItems: (num) => {
        dispatch({
          type: 'SET_COUNT_PAGE_ITEMS',
          value: num
        })
      }
    })
)(CountShowItems);