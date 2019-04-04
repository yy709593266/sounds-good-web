import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      current: 'home'
    }
  }
  menuClick = (e) => {
    this.setState({
      current: e.key
    })
  }
  render(){
    return (
      <Menu
        className="justify-center"
        mode="horizontal" 
        selectedKeys={[this.state.current]}
        onClick={this.menuClick}>
        <Menu.Item key="home">
          <Link to="/home">首页</Link>
        </Menu.Item>
        <Menu.Item key="destination">
          <Link to="/destination">目的地</Link>
        </Menu.Item>
        <Menu.Item key="strategy">
          <Link to="/strategy">旅游攻略</Link>
        </Menu.Item>
        <Menu.Item key="hotel">
          <Link to="/hotel">酒店</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header