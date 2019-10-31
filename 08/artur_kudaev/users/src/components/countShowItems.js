import React from 'react';
import {connect} from "react-redux";

class CountShowItems extends React.Component {
  render() {
    return (
        <select defaultValue={localStorage.getItem('countPageItems') ? localStorage.getItem('countPageItems') : '30'} onChange={(e)=> {
            this.props.setCountPageItems(e.target.value);
            localStorage.setItem('countPageItems', e.target.value);
            this.props.update();
          }
        }>
          <option value='10'>10</option>
          <option value='30'>30</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
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