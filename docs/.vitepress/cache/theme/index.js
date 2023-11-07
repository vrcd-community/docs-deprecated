// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyLayout from './MyLayout.vue'
import FeedBack from './components/FeedBack.vue'
import './style.css'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that injects the slots
  Layout: MyLayout,

  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('MyGlobalComponent' /* ... */)
  },
  
  ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'aside-outline-after': () => h(FeedBack)
        })
    }
}