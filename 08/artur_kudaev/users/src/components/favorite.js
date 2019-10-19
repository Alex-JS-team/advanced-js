import React from 'react';

export default class Favorite extends React.Component {
  constructor() {
    super();
    this.state = {
      link: null,
      login: null
    }
  }

  componentDidMount() {
    fetch(this.props.favorite)
        .then(res => res.json())
        .then(res => {
          this.setState({
            link: res.avatar_url,
            login: res.login
          })
        })
  }

  render() {
    return (
      <>
        <div className="img-wrap">
          <img className='favorite-img' src={this.state.link} alt='' />
          <span className='name'>{this.state.login}</span>
          <div onClick={() => {
            this.props.del(this.props.favorite)
          }} className="close">X</div>
        </div>
      </>
    )
  }
}