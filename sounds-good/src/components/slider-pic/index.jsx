import React, { Component } from 'react'
import { Carousel } from 'antd'
import './style.less'

class SliderPic extends Component {
  render(){
    return (
      <div className="slide-pic">
        <Carousel vertical>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Carousel>
      </div>
    )
  }
}

export default SliderPic