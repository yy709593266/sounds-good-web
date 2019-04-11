import React, { Component } from 'react'
import { Carousel, Radio, Input } from 'antd'
import './style.less'
import { allSearchRadio } from "./const"
import Store from "./../../store/index.js"
import * as Actions from "../../store/Actions.js"
import { apiGetPicList } from "./../../api";

class SliderPic extends Component {
  constructor(){
    super()
    this.state = this.getOwnState()
  }
  getOwnState(){
    return Store.getState()
  }
  componentWillMount(){
    apiGetPicList().then(res=>{
      Store.dispatch(Actions.getNavPictures(res))
    })
  }
  componentDidMount(){
    Store.subscribe(this.onChange.bind(this))
  }
  onChange(){
    this.setState(this.getOwnState())
  }
  // 点击缩略图
  clickNav(index){
    this.picCarouselRef.slick.slickGoTo(index)
    Store.dispatch(Actions.clickNav(index))
  }
  // 点击搜索区域radio
  clickSearchRadio(e){
    Store.dispatch(Actions.searchNav(e.target.value))
  }
  render(){
    const {navPictures, currentIndex, searchRadioValue} = this.state
    const currentDate = navPictures.length && navPictures[currentIndex].date
    const currentDescription = navPictures.length && navPictures[currentIndex].description
    const picCarouselSetting = {
      dots: false,
      effect: 'fade',
      vertical: true
    }
    const inputSearchSetting = {
      placeholder: '搜目的地/攻略/酒店/旅行特价',
      enterButton: true,
      size: 'large'
    }
    return (
      <div className="slider-pic">
        <div className="slider-pic-title">
          <p className="slider-pic-title__date">{currentDate}</p>
          <p className="slider-pic-title__description">{currentDescription}</p>
        </div>
        <Carousel
          {...picCarouselSetting} 
          ref={el=>(this.picCarouselRef=el)}>
          {
            navPictures.map(item=>{
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
            navPictures.map((item, index)=>{
              return (
                <div key={item.id} className={["slider-nav-item", index===currentIndex?"active":""].join(' ')} onClick={this.clickNav.bind(this, index)}>
                  <img src={item.smallUrl} alt="smallUrl"/>
                </div>
              )
            })
          }
          <div className="button-calendar">历历在目></div>
        </div>
        <div className="slider-search-group">
          <Radio.Group onChange={this.clickSearchRadio.bind(this)} value={searchRadioValue}>
            {
              allSearchRadio.map(item=>{
                return (
                  <Radio value={item.value} key={item.value} className="slider-search-radio-text">{item.text}</Radio>
                )
              })
            }
          </Radio.Group>
          <Input.Search
            {...inputSearchSetting}>
          </Input.Search>
          <p className="bottom-description">{currentDescription}</p>
        </div>
      </div>
    )
  }
}

export default SliderPic