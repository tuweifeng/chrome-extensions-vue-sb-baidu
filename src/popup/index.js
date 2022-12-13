import { createApp } from 'vue'
import App from './App/App.vue'
import Form from './App/Form.vue'
import { createStore } from 'vuex'

// 配置全局变量
const store = createStore({
    state() {
        return {
            exampleConfig: {
                title: "百度搜索",
                url: "*://*.baidu.com/s?*",
                actions: {
                    "hide": [".EC_result"]
                }
            },
            userConfig: []
        }
    },

    mutations: {
        addUserConfig(state, newConfig) {
            state.userConfig.push(newConfig)
        },
        editUserConfig(state, index, newConfig) {
            state.userConfig.splice(index, 1, newConfig)
        },
        removeUserConfig(state, index) {
            state.userConfig.splice(index, 1)
        }
    })


// 配置路由


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
    routes: [
        { path: '/', component: App },
        { path: '/edit/:index', component: Form, props: true },
        { path: '/add', component: Form },
    ]
})


const app = createApp({})
app.use(router)
app.use(store)
app.mount('#app')
