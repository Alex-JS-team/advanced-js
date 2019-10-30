import React from 'react';
import { Route } from 'react-router'
import Nav from "./components/nav";
import Form from "./components/form";
import FavoriteItem from "./components/favItem";
import About from "./components/about";
import Favorite from "./components/favorite";
import Page from './components/paginationItem'
import UsersCount from "./components/userCounter";
import User from "./components/user";
import {connect} from "react-redux";
import CountShowItems from "./components/countShowItems";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: null,
      searchUrl: 'https://api.github.com/search/users?q=',
      totalCount: ''
    }

  }

  fetchFunc = (url) => {
    fetch(url, {
      headers: {
          'Authorization': `Bearer ${this.props.token}`
        }})
        .then(response => response.json())
        .then(response => {
          this.setState({
            totalCount: response.total_count
          })
          this.props.setData(response.items)
        })
  };

  setCountPageItemsFromLocaleStorage = async () => {
    let countPageItems = await localStorage.getItem('countPageItems');
    if(countPageItems) {
      await this.props.setCountPageItems(countPageItems)
    }
    this.fetchFunc(`${this.state.searchUrl}tom&per_page=${this.props.countPageItems}&page=${this.props.totalPage}&+repos:>10+followers:>500`);
  }


  componentDidMount() {
    this.setCountPageItemsFromLocaleStorage();
    let data = localStorage.getItem('arr');
    if(data) {
      this.props.addToFavoriteFromLocaleStorage(data)
    }
  }

  getUsers = () => {

    this.state.value ?

        this.fetchFunc(this.state.searchUrl+this.state.value+`&per_page=${this.props.countPageItemss}&page=${this.props.totalPage}`)

        :

        this.fetchFunc(`${this.state.searchUrl}tom&per_page=${this.props.countPageItems}&page=${this.props.totalPage}&+repos:>10+followers:>500`);
  };

  inputValue = (e) => {
    this.setState({
      value: e.target.value
    })
  };

 async addToFavorite (name){
    let user = `https://api.github.com/users/${name}`;
    await this.props.addToFavorite(user);
    localStorage.setItem('arr', this.props.favoriteList)
  };

  delFromFavorite = (link) => {
    const filterArr = this.props.favoriteList.filter(el=>link!==el);
    this.props.deleteFromFavorite(link)
    localStorage.setItem('arr', filterArr);
  };

  render() {
    const { reduceData } = this.props;

    return (
      <React.Fragment>
        <div className="wrap">
          <Nav />
          {
            this.props.routing.locationBeforeTransitions ?
              this.props.routing.locationBeforeTransitions.pathname !== '/' ?
                  false
                  :
                  <Form inputValue={this.inputValue} getUsers={this.getUsers}/>
              :
              <Form inputValue={this.inputValue} getUsers={this.getUsers}/>
          }

        </div>
        <Route exact={true} path='/favorite' render={()=>
          <div className="favorite-list">
            {
              this.props.favoriteList.map((el, i) => {
                return <FavoriteItem key={i} item={el} />
              })
            }
          </div>
        }/>
        <Route path='/favorite/:login' component={About}/>
        <Route exact={true} path='/' render={()=>
          <React.Fragment>
            {
              this.props.favoriteList.length > 0 ?
                <>
                  <h3>Favorite list</h3>
                  <div className='favorites'>
                    {
                      this.props.favoriteList.map((el) => {
                        return <Favorite key={el} del={this.delFromFavorite} favorite={el} />
                      })
                    }
                  </div>
                </>
                :
                ''
            }
            <h2>Popular users on GitHub</h2>
            <div className="options-wrap">
              <CountShowItems/>
            </div>
            <UsersCount numUsers={this.state.totalCount}/>
            <div className="wrap_user">
              <div className="users">
                {reduceData.map(el => <User
                    key={el.id}
                    img={el.avatar_url}
                    login={el.login}
                    link={el.html_url}
                    favorite={this.addToFavorite.bind(this)}
                    del={this.delFromFavorite}
                    favoriteArr={this.props.favoriteList}
                />)}
              </div>
              <p>1111</p>

              <div className="pagination">
                <Page/>
              </div>
            </div>
          </React.Fragment>
        }/>
      </React.Fragment>
    )
  }

}

export default connect(
    store => ({
      reduceData: store.data,
      totalPage: store.totalPage,
      token: store.token,
      favoriteList: store.favorite,
      routing: store.routing,
      countPageItems: store.countPageItems
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
      },
      deleteFromFavorite: (del) => {
        dispatch({
          type: 'DELETE_FROM_FAVORITE',
          item: del
        })
      },
      addToFavoriteFromLocaleStorage: (arr) => {
        dispatch({
          type: 'GET_FAVORITE_ARR_FROM_LOCALE_STORAGE',
          arr: arr
        })
      },
      setCountPageItems: (num) => {
        dispatch({
          type: 'SET_COUNT_PAGE_ITEMS',
          value: num
        })
      }
    })
)(App);