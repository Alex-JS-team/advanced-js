import React from 'react';
import {connect} from "react-redux";

class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchUrl: 'https://api.github.com/users/',
      countFollowers: null,
      countRepos: null
    }

  }
  getCount = (link1) => {
    fetch(link1, {
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          countFollowers: response.followers,
          countRepos: response.public_repos
        })
      });
  }


  componentDidMount() {
    this.getCount(this.state.searchUrl+this.props.login)

  }

  render() {
    return (
      <div className="card">
        <div className='animate-img' ref={(el)=> this.img = el}>
          <img src={this.props.img} alt="user logo" onLoad={()=>this.img.classList.add('loaded')} />
        </div>
        <div className="card-body">
          <p className="card-text">Login: {this.props.login}</p>
          <p>Followers: {this.state.countFollowers}</p>
          <p>Repositorios: {this.state.countRepos}</p>
          <p>Link: <a target='_blank' rel="noopener noreferrer"  href={this.props.link}>{this.props.login}</a></p>
          {
            this.props.favoriteArr.includes(this.state.searchUrl+this.props.login) ?
              <button onClick={()=>this.props.del(this.state.searchUrl+this.props.login)}>Delete from favorite</button>
              :
              <button onClick={()=>this.props.favorite(this.props.login)}>Add to favorite</button>
          }
        </div>
      </div>
    )
  }
}

export default connect(
    store => ({
      token: store.token,
      favoriteArr: store.favorite
    }),
    dispatch => ({})
)(User);
