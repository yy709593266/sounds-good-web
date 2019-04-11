import {createStore} from 'redux'
import reducer from './reducer'

const initValue = {
  /* slider-pic组件 */
  navPictures: [],  //图片列表
  currentIndex: 0,  // 当前图片索引
  searchRadioValue: 'all' // 搜索区域radio的值
}

const store = createStore(reducer, initValue)

export default store
