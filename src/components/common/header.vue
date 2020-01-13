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
  </div>
</template>

<script>
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
          path: "/socialDu"
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

  created() {},
  computed: {
    //监听词条
    getSearchKey() {
      return this.$store.state.searchKey;
    }
  },
  watch: {
    getSearchKey: {
      handler(newValue, oldValue) {
        //当词条改变时执行事件
        this.tabbarIndex = newValue;
      }
    }
  },
  methods: {
    toTabbars(index) {
      this.tabbarIndex = index;

      this.$store.dispatch("setSearchKey", index);
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
.tabbary {
  background-color: var(--y);
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
</style>