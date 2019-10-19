import React from 'react';
import ReactDOM from 'react-dom';
import User from "./components/user";
import { BrowserRouter, Route } from "react-router-dom";
import './style.sass'
import Nav from "./components/nav";
import Form from "./components/form";
import UsersCount from "./components/userCounter";
import About from "./components/about";
import Favorite from "./components/favorite";
import FavoriteItem from "./components/favItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      value: null,
      searchUrl: 'https://api.github.com/search/users?q=',
      totalCount: '',
      favoriteArr: []
    }

  }

  fetchFunc = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.items,
          totalCount: response.total_count
        })
      })
  };


  componentDidMount() {
    this.fetchFunc(`${this.state.searchUrl}tom+repos:>10+followers:>500`);
    let data = localStorage.getItem('arr') ;
    if(data) {
      this.setState({
        favoriteArr: data.split(',')
      })
    }
  }

  getUsers = () => {

    this.state.value ?

      this.fetchFunc(this.state.searchUrl+this.state.value)

      :

      this.fetchFunc(`${this.state.searchUrl}tom+repos:>10+followers:>500`);
    };

  inputValue = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  addToFavorite = (name) => {

    let user = `https://api.github.com/users/${name}`;
    this.setState({
      favoriteArr: [...new Set(this.state.favoriteArr.concat(user))]
    });
    localStorage.setItem('arr', this.state.favoriteArr);

  };

  delFromFavorite = (link) => {
    const filterArr = this.state.favoriteArr.filter(el=>link!==el);
    this.setState({
      favoriteArr: filterArr
    });
    localStorage.setItem('arr', this.state.favoriteArr);
  };

  render() {
    const {data} = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="wrap">
            <Nav />
            <Form inputValue={this.inputValue} getUsers={this.getUsers}/>
          </div>
          <Route exact={true} path='/favorite' render={()=>
              <div className="favorite-list">
                {
                  this.state.favoriteArr.map((el, i) => {
                    return <FavoriteItem key={i} item={el} />
                  })
                }
              </div>
          }/>
          <Route path='/favorite/:login' component={About}/>
          <Route exact={true} path='/' render={()=>
            <React.Fragment>
              {
                this.state.favoriteArr.length > 0 ?
                  <>
                    <h3>Favorite list</h3>
                    <div className='favorites'>
                      {
                        this.state.favoriteArr.map((el, i) => {
                          return <Favorite key={i} del={this.delFromFavorite} favorite={el} />
                        })
                      }
                    </div>
                  </>
                  :
                  ''
              }
              <h2>Popular users on GitHub</h2>
              <UsersCount numUsers={this.state.totalCount}/>
              <div className="wrap">
                <div className="users">
                  {data.map(el => <User
                        key={el.id}
                        img={el.avatar_url}
                        login={el.login}
                        link={el.html_url}
                        favorite={this.addToFavorite}
                        del={this.delFromFavorite}
                        favoriteArr={this.state.favoriteArr}
                    />)}
                </div>
              </div>
            </React.Fragment>
          }/>
        </React.Fragment>
      </BrowserRouter>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));

