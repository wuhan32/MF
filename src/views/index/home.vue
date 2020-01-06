<template>
<div id="Home">
  <!-- 形象工程 -->
  <figure class="w">
    <img :src="imgD" alt />
  </figure>

  <!-- 主体 -->
  <body class="w">
    <!-- 信息化大恒 -->
    <div>
      <div class="main" style="height:180px">
        <div class="main-header">
          <h4 class="HH4">信息化大恒</h4>
          <span>
            更多信息
            <i class="iconfont icon-iconfontarrowdown"></i>
          </span>
        </div>
        <div class="xx-footer">
          <ul @click="goMf">
            <li>
              <img src="../../assets/img/xf.png" alt />
              <p>行政OA</p>
            </li>
            <li>
              <img src="../../assets/img/xf.png" alt />
              <p>车辆申请</p>
            </li>
            <li>
              <img src="../../assets/img/xf.png" alt />
              <p>合同管理</p>
            </li>
            <li class="more">
              <span>MORE +</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="main" style="height:180px">
          <div class="main-header">
            <h4 class="HH4">大恒党建</h4>
            <span>
              更多信息
              <i class="iconfont icon-iconfontarrowdown"></i>
            </span>
          </div>
          <div class="dj-footer">
            <ul class="dj-footer-body">
              <li
                v-for="(item,index) in loadNewVideosD"
                :key="index"
                @click="open(item.resource_url)"
              >
                <img src="../../assets/img/videoimg.png" alt />
                <span>{{ item.title }}</span>
              </li>
            </ul>
            <img src="../../assets/img/videoimg.png" alt />
          </div>
        </div>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="swipert">
      <el-carousel indicator-position="outside" autoplay>
        <el-carousel-item v-for="(item,index) in swipert" :key="index">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 新闻关注 -->
    <div class="body-right">
      <div class="body-right-header">
        <h4 class="HH4">新闻关注</h4>
        <span>
          <a href="javascript:;">http://www.dahengzh.com/</a>
        </span>
      </div>
      <div class="main" style="height:330px">
        <div class="main-header">
          <h4 class="HH4">最新动态</h4>
          <span>
            更多信息
            <i class="iconfont icon-iconfontarrowdown"></i>
          </span>
        </div>
        <div class="dt-footer">
          <ul>
            <li v-for="(item,index) in news" :key="index" @click="newsO(item.id)">
              <p>
                <i class="iconfont icon-file"></i>
                <span>{{ item.title }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 法律法规 -->
    <div class="body-right body-right-t">
      <div class="main" style="height:360px">
        <div class="main-header">
          <h4 class="main-header-p HH4">
            <p>法律法规</p>
            <p>科技成果</p>
            <p>绿色建筑</p>
          </h4>
          <span>
            更多信息
            <i class="iconfont icon-iconfontarrowdown"></i>
          </span>
        </div>
        <div class="dt-footer">
          <ul>
            <li
              v-for="(item,index) in construction"
              :key="index"
              class="fl-gooter"
              @click="newsO(item.id)"
            >
              <p>
                <i class="iconfont icon-file"></i>
                <span>{{ item.title }}</span>
              </p>
              <span class="fl-gooter-time">{{ item.issuerdate }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 行业新闻 -->
    <div class="body-right body-right-m">
      <div class="main" style="height:360px">
        <div class="main-header">
          <h4 class="main-header-g HH4">
            <p>工会委员</p>
            <p>行业新闻</p>
          </h4>
          <span>
            更多信息
            <i class="iconfont icon-iconfontarrowdown"></i>
          </span>
        </div>
        <div class="dt-footer">
          <ul>
            <li
              v-for="(item,index) in message"
              :key="index"
              class="fl-gooter"
              @click="newsO(item.id)"
            >
              <p>
                <i class="iconfont icon-file"></i>
                <span>{{ item.title }}</span>
              </p>
              <span class="fl-gooter-time">{{ item.issuerdate }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 企业视频 -->
    <div class="body-right-t">
      <div>
        <div class="main" style="height:360px">
          <div class="main-header">
            <h4 class="HH4">企业视频</h4>
            <span>
              更多信息
              <i class="iconfont icon-iconfontarrowdown"></i>
            </span>
          </div>
          <div class="dj-footer">
            <ul class="dj-footer-body" style="height:280px">
              <li
                v-for="(item,index) in loadNewVideos"
                :key="index"
                @click="openS(item.resource_url)"
              >
                <img src="../../assets/img/videoimg.png" alt />
                <span>{{ item.title }}</span>
              </li>
            </ul>
            <img src="../../assets/img/videoimg.png" alt />
          </div>
        </div>
      </div>
    </div>
  </body>

  <!-- 工程展示 -->
  <footer class="w">
    <div class="footer-r">
      <div class="main-header">
        <h4 class="HH4">工程展示</h4>
        <span>
          更多信息
          <i class="iconfont icon-iconfontarrowdown"></i>
        </span>
      </div>
      <div class="footer-r-body">
        <img :src="item" alt v-for="(item,index) in ImgurlsO" :key="index" />
      </div>
    </div>
    <div class="footer-l">
      <div class="footer-l-r">
        <div class="main-header">
          <h4 class="HH4">大恒总部</h4>
        </div>
        <!-- 地图 -->
        <baidu-map :center="center" :zoom="zoom" @ready="handler" class="footer-l-m" @click="goMap">
          <bm-marker
            :position="{lng: 113.571898, lat:22.283535}"
            :dragging="true"
            animation="BMAP_ANIMATION_BOUNCE"
          >
            <bm-label content="大恒建设集团" :labelStyle="labelStyle" :offset="{width: -35, height: 30}" />
          </bm-marker>
        </baidu-map>
      </div>
      <div class="footer-l-lj">
        <div class="main-header">
          <h4 class="HH4">友情链接</h4>
        </div>
        <div class="footer-l-lj-body">
          <ul>
            <li v-for="(item,index) in blogroll" :key="index" @click="blogrollO(item.urladdress)">
              <img src="../../assets/img/lj0000.png" alt />
              <p>{{ item.title }}</p>
            </li>
          </ul>
          <p>
            更多.................
            <i class="iconfont icon-iconfontarrowdown"></i>
          </p>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import { log } from "util";
import {
  getHomeVanityproject,
  getPortalListLoad,
  getImgurls,
  getImgurlsO,
  mainPropagandaPicture,
  loadByType,
  listLoad,
  loadByTypeO
} from "../../network/home";

export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      rTop: false,
      vanityProject: "",
      labelStyle: { color: "var(--g)", fontSize: "12px", border: "none" },
      imgD: "",
      ImgurlsO: [],
      swipert: [],
      blogroll: [],
      loadNewVideosD: [],
      loadNewVideos: [],
      message: [],
      construction: [],
      news: []
    };
  },
  created() {
    this.getPortalListLoad();
    this.getImgurls();
    this.getImgurlsO();
    this.mainPropagandaPicture();
    this.loadByType();
    this.loadByTypeO();
    this.listLoad();
  },
  mounted() {},
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 113.571898;
      this.center.lat = 22.283535;
      this.zoom = 18;
    },
    open(resource_url) {
      this.$alert(
        "<video  controls style='width:100%; height:100%' src = '" +
          resource_url +
          "' ></video>",
        "视频",
        {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        }
      );
    },
    openS(resource_url) {
      this.$alert(
        "<video  controls style='width:100%; height:100%' src = '" +
          resource_url +
          "' ></video>",
        "视频",
        {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        }
      );
    },
    goMf() {
      window.open("http://www.dahengzh.com:8080/oa/userinfo/login");
    },
    goMap() {
      localStorage.setItem('tabarIndex',8)
      this.$router.push("/contactUs");
    },
    blogrollO(O) {
      window.open(O);
    },
    newsO(id) {
      this.$router.push({
        name: "news",
        params: {
          id: id
        }
      });
    },
    //友情链接
    async getPortalListLoad() {
      const { data: res } = await getPortalListLoad().then();
      this.blogroll = res.rows;
    },
    // 轮播图
    async getImgurls() {
      const res = await getImgurls().then();
      var baseURL = res.config.baseURL + "/";
      res.data.forEach(element => {
        this.swipert.push(baseURL + element.imgUrl);
      });
    },
    //工程展示
    async getImgurlsO() {
      const res = await getImgurlsO().then();
      var baseURL = res.config.baseURL + "/";
      res.data.forEach(element => {
        this.ImgurlsO.push(baseURL + element.imgUrl);
      });
    },
    //大图
    async mainPropagandaPicture() {
      const { data: res } = await mainPropagandaPicture().then();
      this.imgD = res.data;
    },
    // 视频接口
    async loadByType() {
      const { data: res } = await loadByType().then();
      this.loadNewVideosD = res.data;
    },
    async loadByTypeO() {
      const { data: res } = await loadByTypeO().then();
      this.loadNewVideos = res.data;
    },

    //新闻列表
    async listLoad() {
      const { data: res } = await listLoad().then();
      res.rows.forEach(element => {
        if (element.infotype == "message") {
          return this.message.push(element);
        }
        if (element.infotype == "construction") {
          return this.construction.push(element);
        }
        if (element.infotype == "news") {
          return this.news.push(element);
        }
      });
    }
  }
};
</script>

<style lang="less" >
.el-message-box {
  width: 800px;
}
.el-button {
  padding: 0;
  color: #000;
  font-size: 16px;
}
#Home {
  figure {
    height: 400px;
    margin-bottom: 32px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  body {
    display: flex;
    flex-wrap: wrap;
    .main {
      width: 480px;
      .main-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--g);
        span {
          font-size: 14px;
        }
        span:hover {
          color: var(--y);
        }
      }
    }
    .swipert {
      width: 460px;
      height: 360px;
      margin: 0 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .body-right {
      width: 500px;
      height: 360px;
    }
    .xx-footer {
      ul {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        > :nth-child(2n) {
          background-color: var(--g);
        }
        li:hover {
          transition: all 0.2s linear;
          transform: translatey(5px);
        }

        li {
          width: 80px;
          height: 80px;
          background-color: var(--y);
          text-align: center;
          border-radius: 15px;
          cursor: pointer;
          img {
            margin-top: 12px;
            width: 40px;
            height: 40px;
          }
          p {
            color: #fff;
            font-size: 12px;
          }
        }
        .more {
          span {
            text-align: center;
            line-height: 80px;
            color: #fff;
          }
        }
      }
    }
    .dj-footer {
      display: flex;
      justify-content: space-between;
      > img {
        width: 150px;
        height: 100px;
      }
      .dj-footer-body {
        margin-top: 10px;
        height: 100px;
        overflow: hidden;
        span:hover {
          color: var(--y);
          cursor: pointer;
        }
        li {
          width: 306px;
          margin: 12px 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          img {
            width: 20px;
            height: 20px;
            margin-right: 15px;
            vertical-align: middle;
          }
        }
      }
    }
    .body-right-header {
      margin-bottom: 10px;
      display: flex;
      span {
        margin-left: 30px;
        line-height: 30px;
      }
    }
    .dt-footer {
      ul {
        height: 280px;
        overflow: hidden;
        li {
          margin: 15px 0;
          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 350px;
            span:hover {
              cursor: pointer;
              color: var(--y);
            }
            i {
              color: var(--r);
              margin-right: 15px;
            }
          }
        }
      }
    }
    .body-right-m {
      margin: 20px 20px;
    }
    .body-right-t {
      margin: 20px 0;
    }
    .fl-gooter {
      border-bottom: 1px solid #ccc;
      position: relative;
      p:hover {
        color: var(--y);
        cursor: pointer;
      }
      .fl-gooter-time {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

  footer {
    display: flex;
    height: 250px;
    .footer-r {
      margin-right: 30px;
      width: 1017px;
      height: 100%;
      .main-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--g);
        span {
          font-size: 14px;
        }
        span:hover {
          color: var(--y);
        }
      }
      .footer-r-body {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        img {
          width: 300px;
          height: 200px;
          margin: 10px 0;
        }
      }
    }
    .footer-l {
      display: flex;
      .main-header {
        display: flex;
        justify-content: space-between;
        span:hover {
          color: var(--y);
        }
      }
      .footer-l-r {
        width: 300px;
        .footer-l-m {
          border: 1px solid #ccc;
          height: 200px;
          width: 250px;
          margin-top: 8px;
        }
      }
      .footer-l-lj {
        .footer-l-lj-body {
          > p {
            text-align: right;
            font-size: 14px;
          }
          p {
            cursor: pointer;
          }
          p:hover {
            color: var(--y);
          }
          ul {
            height: 180px;
            overflow: hidden;
            li {
              display: flex;
              margin: 5px 0;
              display: flex;
              justify-content: space-between;

              img {
                margin-right: 20px;
                width: 15px;
                height: 15px;
              }
              p {
                width: 150px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 15px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
  }
  .main-header-p {
    display: flex;
    width: 300px;
    p {
      width: 100px;
      text-align: center;
    }
  }
  .main-header-g {
    display: flex;
    width: 200px;
    p {
      width: 100px;
      text-align: center;
    }
  }
}
</style>