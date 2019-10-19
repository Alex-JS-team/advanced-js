import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogin: null,
      img: null,
      bio: null,
      company: null,
      followers: null,
      location: null,
      name: null,
      url: null,
      repos: null,
      email: null
    }

  }

  componentDidMount() {
    fetch(` https://api.github.com/users/${this.props.match.params.login}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            userLogin: res.login,
            img: res.avatar_url,
            bio: res.bio,
            email: res.email,
            company: res.company,
            followers: res.followers,
            location: res.location,
            name: res.name,
            url: res.html_url,
            repos: res.public_repos
          })
        })
  }

  render() {
    const { userLogin, img, bio, email, company, followers, location, name, url, repos } = this.state;
    return (
      <div className='about'>
        <h1>{userLogin}</h1>
        {
          name ? <p>Name: {name}</p> : false
        }
        {
          location ? <p>Location: {location}</p> : false
        }
        <a target='_blank' rel='noopener noreferrer' href={url}>Link for {userLogin}</a>
        <img src={img} alt='pic'/>
        {
          bio ? <p>Bio: {bio}</p> : false
        }
        {
          email ? <p>Email: {email}</p> : false
        }
        {
          company ? <p>Company: {company}</p> : false
        }
        {
          followers ? <p>Followers: {followers}</p> : false
        }
        {
          repos ? <p>Repos {repos}</p> : false
        }
      </div>
    )
  }
}