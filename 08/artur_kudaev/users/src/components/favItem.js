import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null
    }

  }

  componentDidMount() {
    fetch(`${this.props.item}`, {
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }})
      .then(response => response.json())
      .then(response => {
        this.setState({
          item: response.login
        })
      });
  }

  render() {
    return (
        <>
          <Link to={{
            pathname: `/favorite/${this.state.item}`
          }}>
            <p>{this.state.item}</p>
          </Link>
        </>
    )
  }

}

export default connect(
    store => ({
      token: store.token
    }),
    dispatch => ({})
)(FavoriteItem);