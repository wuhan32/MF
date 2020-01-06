import axios from './axios'


//友情链接
export function getPortalListLoad() {
  return axios({
    url: '/blogrollManage/portalListLoad'
  })
}

//轮播图
export function getImgurls() {
  return axios({
    url: '/vanityproject/getImgurls'
  })
}
//工程展示
export function getImgurlsO() {
  return axios({
    url: '/publicity/getImgurls '
  })
}


//大图接口
export function mainPropagandaPicture() {
  return axios({
    url: '/propagandaPicture/mainPropagandaPicture'
  })
}
// 党建接口
export function loadByType() {
  return axios({
    url: '/portalVideo/loadByType',
    params:{
      type:"cp1578014986616"
    }
  })
}
//企业视频
export function loadByTypeO() {
  return axios({
    url: '/portalVideo/loadByType',
    params:{
      type:"cp1578015025474"
    }
  })
}

//最新视频 
export function loadNewVideos() {
  return axios({
    url: '/portalVideo/loadNewVideos'
  })
}

//新闻列表
export function listLoad() {
  return axios({
    url: '/infoissue/listLoad'
  })
}

//新闻详情
export function getById(Id) {
  return axios({
    url: 'infoissue/getById',
    params:{
      id:Id
    }
  })
}

