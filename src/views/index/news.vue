<template>
  <div class="w news">
    <div class="news-left">
      <img src="../../assets/img/qysm01.jpg" alt />
    </div>
    <div>
      <ul>
        <li v-for="item in news" :key="item.id" @click="newsO(item.id)">
          <a href>
            <span>{{ item.title }}</span>
            <span>{{ item.issuerdate }}</span>
          </a>
        </li>
      </ul>
      <el-pagination
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="rows"
        layout="total, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { listLoad } from "../../network/home";

import { log } from "util";
export default {
  data() {
    return {
      infocontent: "",
      news: "",
      page: 1,
      rows: 11,
      total: 0,
      sumPage: 1
    };
  },
  beforeCreate() {},
  created() {
    this.listLoad();
  },
  methods: {
    handleCurrentChange(size) {
      this.page = size;
      this.listLoad();
    },
    newsO(id) {
      let routeUrl = this.$router.resolve({
        path: "/newsInfo",
        query: { id: id }
      });
      window.open(routeUrl.href, "_blank");
    },
    //新闻列表
    async listLoad() {
      const { data: res } = await listLoad(this.page, this.rows).then();
      this.total = res.total;
      this.sumPage = Math.ceil(this.total / this.rows);
      this.news = res.rows;
    }
  }
};
</script>

<style lang="less" scoped>
.news {
  width: 1500px;
  display: flex;
  .news-left {
    margin-right: 20px;
    img {
      width: 250px;
      min-height: 600px;
    }
  }
  ul {
    min-height: 600px;
    margin-bottom: 20px;
    li {
      line-height: 50px;
      border-bottom: 1px solid #ccc;
    }
    li:hover {
      color: var(--y);
    }
  }
}
</style>