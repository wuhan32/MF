import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchKey: 0       //存储词条的变量
  },
  mutations: {                 //修改数据仓库的事件
    changeSearchKey(state,value){
      state.searchKey = value
    }
  },
  actions: {                 //推荐使用的异步修改数据仓库
    setSearchKey(context,value){   
      context.commit('changeSearchKey',value)
   }
  }
})