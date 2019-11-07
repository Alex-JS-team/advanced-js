import React from 'react';
import {connect} from "react-redux";
import 'font-awesome/css/font-awesome.min.css';

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
    // this._isMounted = true;
    // if(this._isMounted) {
    //
    // }
    this.getCount(this.state.searchUrl+this.props.login)
  }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  render() {
    return (
      <div className="card">
        <div className='animate-img' ref={(el)=> this.img = el}>
          <img src={this.props.img} alt="user logo" onLoad={()=>this.img.classList.add('loaded')} />
        </div>
        <div className="card-body">
          <p className="card-text">Login: {this.props.login}</p>
          <p><i className="fas fa-star"></i>Followers: {this.state.countFollowers}</p>
          <p>Repositorios: {this.state.countRepos}</p>
          <p>Link: <a target='_blank' rel="noopener noreferrer"  href={this.props.link}>{this.props.login}</a></p>
          {
            this.props.favoriteArr.includes(this.state.searchUrl+this.props.login) ?
                <div onClick={()=>this.props.del(this.state.searchUrl+this.props.login)}> del</div>

              :
                <div onClick={()=>this.props.favorite(this.props.login)} > add </div>
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
