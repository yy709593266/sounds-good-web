import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import './assets/styles/reset.less' // 重置样式
import 'antd/dist/antd.less'  // 引入antd样式
import './assets/styles/common.less'  // 全局样式

import store from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
