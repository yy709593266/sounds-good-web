import React, { Component } from 'react'
import { Carousel } from 'antd'
import './style.less'
import { apiGetPicList } from "./../../api";

class SliderPic extends Component {
  constructor(){
    super()
    this.state = {
      picList: []
    }
  }
  componentWillMount(){
    this.getPicList()
  }
  getPicList(){
    apiGetPicList().then(res=>{
      this.setState({
        picList: res
      })
    })
  }
  render(){
    return (
      <div className="slider-pic">
        <Carousel vertical effect="fade" dots="false">
          {
            this.state.picList.map(item=>{
              return (
                <div key={item.id} className="slider-pic-wrap">
                  <img src={item.bigUrl} alt="bigUrl"/>
                </div>
              )
            })
          }
        </Carousel>
        <div className="slider-nav-wrap">
          {
            this.state.picList.map(item=>{
              return (
                <div key={item.id} className="slider-nav-item">
                  <img src={item.smallUrl} alt="smallUrl"/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default SliderPic