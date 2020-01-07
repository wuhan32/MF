import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    tabbar: [
        {
            name: "首页",
            path: "/home"
        },
        {
            name: "新闻中心",
            path: "/news"
        },
        {
            name: "走进大恒",
            path: "/approachDh"
        },
        {
            name: "经营领域",
            path: "/manage"
        },
        {
            name: "企业文化",
            path: "/enterpriseCulture"
        },
        {
            name: "人力资源",
            path: "/manpower"
        },
        {
            name: "社会责任",
            path: "/"
        },
        {
            name: "下载专区",
            path: "/downLoad"
        },
        {
            name: "联系我们",
            path: "/contactUs"
        }
    ],
    tabbarIndex:1
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store
