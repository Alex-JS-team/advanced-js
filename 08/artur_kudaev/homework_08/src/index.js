import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import './style/style.css'
import Footer from "./components/footer";
import Content from "./components/content";

class App extends React.Component {

  render() {
    return(
        <React.Fragment>
          <Header text='Header'/>
          <Content/>
          <Footer copy={'#copy'}/>
        </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));