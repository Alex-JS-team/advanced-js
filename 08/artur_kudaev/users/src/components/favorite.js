import React from 'react';
import {connect} from "react-redux";

class Favorite extends React.Component {
  constructor() {
    super();
    this.state = {
      link: null,
      login: null
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if(this._isMounted) {
      fetch(this.props.favorite, {
        headers: {
          'Authorization': `Bearer ${this.props.token}`
        }})
          .then(res => res.json())
          .then(res => {
            this.setState({
              link: res.avatar_url,
              login: res.login,
              loading: false
            })
          })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <div className="img-wrap">
          <div className='animate-img' ref={(el)=> this.img = el}>
            <img className='favorite-img' src={this.state.link} alt='' onLoad={()=>this.img.classList.add('loaded')}  />
          </div>
          <span className='name'>{this.state.login}</span>
          <div onClick={() => {
            this.props.del(this.props.favorite)
          }} className="close">X</div>
        </div>
      </>
    )
  }
}

export default connect(
    store => ({
      token: store.token
    }),
    dispatch => ({})
)(Favorite);