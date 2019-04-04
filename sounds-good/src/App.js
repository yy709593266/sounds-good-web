import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header'
import SliderPic from './components/slider-pic'
import routes from './router'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <SliderPic></SliderPic>
        {
          routes.map((route, index)=>{
            return (
              <Route key={index} path={route.path} exact={route.exact} component={route.component}></Route>
            )
          })
        }
      </BrowserRouter>
    )
  }
}

export default App
