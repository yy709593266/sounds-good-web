import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      currentMenu: 'home',
      allMenus: [
        {key: 'home', text: '首页'},
        {key: 'destination', text: '目的地'},
        {key: 'strategy', text: '旅游攻略'},
        {key: 'hotel', text: '酒店'},
      ]
    }
  }
  menuClick = (e) => {
    this.setState({
      currentMenu: e.key
    })
  }
  render(){
    return (
      <Menu
        className="justify-center"
        mode="horizontal" 
        selectedKeys={[this.state.currentMenu]}
        onClick={this.menuClick}>
        {
          this.state.allMenus.map(item=>{
            return (
              <Menu.Item key={item.key}>
                <Link to={`/${item.key}`}>{item.text}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }
}

export default Header