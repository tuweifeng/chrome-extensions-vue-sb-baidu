import { createStore } from 'vuex'

const FORMSTATE = {
    LIST: 0,
    ADD: 1,
    EDIT: 2
}

// 配置全局变量
export const store = createStore({
    state() {
        return {
            FORMSTATE: FORMSTATE,
            curState: FORMSTATE.LIST,
            curIndex: null,

            exampleConfig: {
                title: "百度搜索",
                url: "*://*.baidu.com/s?*",
                actions: {
                    hide: {
                        label: "隐藏元素",
                        open: false,
                        elements: []
                    }
                }
            },
            userConfig: []
        }
    },

    mutations: {

        changeCurIndex(state, {index}){
            state.curIndex = index
        },

        changeFormState(state, {formState, index}){
            state.curState = formState
            if (index != null){
                state.curIndex = index
            }
        },

        addUserConfig(state, {newConfig}) {
            state.userConfig.push(newConfig)
            state.curIndex = state.userConfig.length - 1
        },
        editUserConfig(state, { newConfig, index}) {
            state.userConfig.splice(index, 1, newConfig)
        },
        removeUserConfig(state, {index}) {
            state.userConfig.splice(index, 1)
        }
    }
})

