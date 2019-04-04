import React from 'react'
import Loadable from 'react-loadable'

function loadingComponent(){
  return <div>Loading</div>
}

// 对路由组件进行懒加载
const loadable = (filename) => Loadable({
  loader: () => import(`./../pages/${filename}`),
  loading: loadingComponent
})

const routes = [
  {
    path: '/',
    exact: true,
    component: loadable('home')
  },
  {
    path: '/home',
    exact: true,
    component: loadable('home')
  },
  {
    path: '/destination',
    exact: true,
    component: loadable('destination')
  },
  {
    path: '/strategy',
    exact: true,
    component: loadable('strategy')
  },
  {
    path: '/hotel',
    exact: true,
    component: loadable('hotel')
  }
]

export default routes