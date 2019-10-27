import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./components/nav";
import Form from "./components/form";
import FavoriteItem from "./components/favItem";
import About from "./components/about";
import Favorite from "./components/favorite";
import UsersCount from "./components/userCounter";
import User from "./components/user";
import {connect} from "react-redux";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
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
            totalCount: response.total_count
          })
          this.props.setData(response.items)
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
    this.props.addToFavorite([].concat(user));
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
    const { reduceData } = this.props;
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
                      {reduceData.map(el => <User
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

export default connect(
    store => ({
      reduceData: store.data
    }),
    dispatch => ({
      setData: (data) => {
        dispatch({
          type: 'SET_DATA',
          value: data
        })
      },
      addToFavorite: (item) => {
        dispatch({
          type: 'ADD_TO_FAVORITE',
          item: item
        })
      }
    })
)(App);