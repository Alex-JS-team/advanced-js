import React from 'react';

export default class User extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchUrl: 'https://api.github.com/users/',
      countFollowers: null,
      countRepos: null,
      status: false
    }

  }
  getCount = (link1) => {
    fetch(link1)
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
    let x = this.props.favoriteArr.filter(el => this.state.searchUrl+this.props.login === el);
    if(x.length === 1) {
      this.setState({
        status: true
      })
    }
  }

  render() {
    const {status} = this.state;
    return (
      <div className="card">
        <img src={this.props.img} alt="user logo"/>
        <div className="card-body">
          <p className="card-text">Login: {this.props.login}</p>
          <p>Followers: {this.state.countFollowers}</p>
          <p>Repositorios: {this.state.countRepos}</p>
          <p>Link: <a target='_blank' rel="noopener noreferrer"  href={this.props.link}>{this.props.login}</a></p>
          <button onClick={()=>{
            status ? this.props.del(this.state.searchUrl+this.props.login) : this.props.favorite(this.props.login)
          }}>{status ? 'Delete from favorite' : 'Add to favorite'}</button>
        </div>
      </div>
    )
  }
}