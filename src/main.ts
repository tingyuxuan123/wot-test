/*
 * @Author: weisheng
 * @Date: 2023-03-09 19:23:03
 * @LastEditTime: 2023-09-02 22:23:48
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \wot-starter-retail\src\main.ts
 * 记得注释
 */
import { createSSRApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'uno.css'

const pinia = createPinia()
export function createApp() {
  const app = createSSRApp(App)
  app.config.warnHandler = () => null
  app.use(router)
  app.use(pinia)
  return {
    app,
    pinia
  }
}
