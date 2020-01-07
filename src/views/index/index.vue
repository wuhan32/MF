<template>
  <div>
    <!-- 头部 -->
    <header class="w">
      <div class="logo">
        <img src="../../assets/img/logo.png" alt />
        <h1>大恒建设集团有限公司</h1>
      </div>
      <div class="download">
        <div>
          <a href="javascript:;">www.dahengzh.com</a>
          <img src="../../assets/img/app.png" alt />
          <p>app下载</p>
        </div>
        <ul>
          <li>
            <i class="iconfont icon-weixinfang" style="color:#019934" />
          </li>
          <li>
            <i class="iconfont icon-shouji" />
          </li>
          <li>
            <i class="iconfont icon-zhongyingwenqiehuan" />
          </li>
          <li>
            <el-tooltip class="item" effect="light" content="0756-3668888 " placement="top-start">
              <i class="iconfont icon-ziyuan" />
            </el-tooltip>
          </li>
          <li>
            <el-tooltip
              class="item"
              effect="light"
              content="dhjc@dahengzh.com "
              placement="top-start"
            >
              <i class="iconfont icon-lunkuodasan-" style="color:var(--y)" />
            </el-tooltip>
          </li>
        </ul>
      </div>
    </header>

    <!-- 导航栏 -->
    <figcaption>
      <ul class="w">
        <router-link
          tag="li"
          :to="item.path"
          v-for="(item,index) in tabbar"
          :key="index"
          @click.native="toTabbars(index)"
          :class="{tabbary :tabbarIndex == index }"
        >{{ item.name }}</router-link>
      </ul>
    </figcaption>

    <router-view></router-view>

    <div class="footer-F" />

    <div class="footer-ff w">
      <p>版权所有：大恒建设集团有限公司 备案号：豫ICP备10010710号-1 地址：珠海市香洲区银桦路8号1505</p>
    </div>

    <el-backtop :right="10" :bottom="130">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: var(--g);
      }"
      >Top</div>
    </el-backtop>
  </div>
</template>

<script>
import { listLoad } from "../../network/home";
export default {
  data() {
    return {
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
      tabbarIndex: 0,
      message: []
    };
  },
  beforeMount() {
    // this.tabbarIndex = localStorage.getItem("tabarIndex");
  },
  created() {
    this.listLoad();
    // this.tabbar = this.$store.state.tabbar;
  },
  computed: {                     //监听词条
        getSearchKey(){
            return this.$store.state.searchKey
        }
    },
    watch: {
        getSearchKey: {
            handler(newValue,oldValue){  //当词条改变时执行事件
                this.tabbarIndex=newValue;
            }
        }

    },
  methods: {
    toTabbars(index) {
      this.$store.dispatch('setSearchKey',index);
      this.tabbarIndex = index;
    },
    //新闻列表
    async listLoad() {
      const { data: res } = await listLoad().then();
      res.rows.forEach(element => {
        if (element.infotype == "message") {
          return this.message.push(element);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 250px;
    height: 50px;
    display: flex;
    h1 {
      color: var(--y);
      white-space: nowrap;
      margin: 0;
      margin-top: 60px;
      margin-left: 10px;
    }
    img {
      margin-top: 45px;
      width: 100%;
      height: 100%;
    }
  }
  .download {
    display: flex;
    position: relative;

    img {
      width: 80px;
      height: 80px;
      margin: 0 10px;
    }
    p {
      font-size: 12px;
      margin-left: 168px;
    }
    ul {
      margin-top: 58px;
      display: flex;
      li {
        margin: 0 8px;
        i {
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }
}
figcaption {
  width: 100%;
  margin: 40px 0;
  background-color: var(--g);
  ul {
    display: flex;
    li {
      color: #fff;
      line-height: 50px;
      width: 100px;
      text-align: center;
    }
    li:hover {
      background: var(--y);
      cursor: pointer;
    }
  }
}

.footer-F {
  margin: 10px 0;
  height: 40px;
  background: var(--g);
}
.footer-ff {
  p {
    text-align: center;
    line-height: 55px;
  }
}
.tabbary {
  background-color: var(--y);
}
</style>