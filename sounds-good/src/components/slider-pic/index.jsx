import React, { Component } from 'react'
import { Carousel, Radio, Input } from 'antd'
import './style.less'
import { allSearchRadio } from "./const"
import { apiGetPicList } from "./../../api"

class SliderPic extends Component {
  constructor(){
    super()
    this.state = {
      picList: [],  // 图片列表
      currentIndex: 0, // 当前选中索引
      currentDate: '',
      currentDescription: '',
      searchRadioValue: 'all' // 搜索单选按钮
    }
  }
  componentDidMount(){
    // 获取图片列表
    apiGetPicList().then(res=>{this.setState({picList: res})})
    console.log(this.state)
  }
  // 点击缩略图
  clickNav(index){
    this.picCarouselRef.slick.slickGoTo(index)
    this.setState({
      currentIndex: index,
      currentDate: this.state.picList[index].date,
      currentDescription: this.state.picList[index].description
    })
  }
  // 点击搜索区域radio
  clickSearchRadio(e){
    this.setState({searchRadioValue: e.target.value})
  }
  render(){
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
          <span className="slider-pic-title__date">{this.state.currentDate}</span>
          <span className="slider-pic-title__description">{this.state.currentDescription}</span>
        </div>
        <Carousel
          {...picCarouselSetting} 
          ref={el=>(this.picCarouselRef=el)}>
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
            this.state.picList.map((item, index)=>{
              return (
                <div key={item.id} className={["slider-nav-item", index===this.state.currentIndex?"active":""].join(' ')} onClick={this.clickNav.bind(this, index)}>
                  <img src={item.smallUrl} alt="smallUrl"/>
                </div>
              )
            })
          }
          <div className="button-calendar">历历在目></div>
        </div>
        <div className="slider-search-group">
          <Radio.Group onChange={this.clickSearchRadio.bind(this)} value={this.state.searchRadioValue}>
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
          <p>{}</p>
        </div>
      </div>
    )
  }
}

export default SliderPic