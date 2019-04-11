import * as ActionsType from './ActionsType'

export default (state, action)=>{
  switch (action.type) {
    // 获取图片
    case ActionsType.NAV_PICTURES:
      const {navPictures} = action
      return Object.assign(state.sliderPic, {navPictures})
    // 点击图片缩略图
    case ActionsType.CLICK_NAV:
      const {currentIndex} = action
      return Object.assign(state, {currentIndex})
    // 点击radio搜索
    case ActionsType.SEARCH_NAV:
      const {searchRadioValue} = action
      return Object.assign(state, {searchRadioValue})
    default:
      return state
  }
}