import * as ActionsType from './ActionsType'

export const getNavPictures = (navPictures) => {
  return {
    type: ActionsType.NAV_PICTURES,
    navPictures
  }
}

export const clickNav = (currentIndex) => {
  return {
    type: ActionsType.CLICK_NAV,
    currentIndex
  }
}

export const searchNav = (searchRadioValue) => {
  return {
    type: ActionsType.SEARCH_NAV,
    searchRadioValue
  }
}