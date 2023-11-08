import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import FeedBack from './components/FeedBack.vue'

import './style.css'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'aside-outline-after': () => h(FeedBack)
        })
    }
}