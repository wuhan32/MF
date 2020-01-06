<template>
  <div class="w">
    <div class="body-A">
      <h4 class="HH4">人力资源</h4>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>人力资源</el-breadcrumb-item>
        <el-breadcrumb-item v-if="Id == 0">人才理念</el-breadcrumb-item>
        <el-breadcrumb-item v-else-if="Id == 1">人才队伍</el-breadcrumb-item>
        <el-breadcrumb-item v-else-if="Id == 2">职业发展</el-breadcrumb-item>
        <el-breadcrumb-item v-else-if="Id == 3">招聘信息</el-breadcrumb-item>
        <el-breadcrumb-item v-else-if="Id == 4">信息公示</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row class="tac">
      <el-col :span="2">
        <el-menu class="el-menu-vertical-demo" active-text-color="var(--y)" default-active="1">
          <el-menu-item
            v-for="(item,i) in Arr"
            :key="i"
            @click="tabbarO(i)"
            :index="i"
          >
            <i class="el-icon-caret-right"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="14" class="body-B" v-if="Id == 0">
        <p>2013年以来，围绕“率先建成世界一流企业”的战略目标，中国交建提出了建设适应性组织、打造“五商中交”、实现升级发展的战略路径。公司的改革发展和转型升级对人才工作提出了新的挑战。一是经营规模的持续扩张对人才资源的数量和质量提出了更高的要求；二是“五商中交”战略的实施要求进一步优化人才结构；三是巩固公司在行业内的人才竞争优势需要一定数量的企业领军人才和高端技术专家；四是国际化经营战略的实施需要大量高素质的国际化人才；五是建设适应性组织、强化协同发展需要建立更加高效有力的人才资源管控体系。</p>
      </el-col>
      <el-col :span="14" class="body-B" v-else-if="Id == 1">
        <p>&emsp;&emsp;提升五项核心能力,即专业整合能力、产业链整合能力、融资能力、战略联盟能力和集成化管理能力，实现两个转变,即从单纯工程承包向集技术、资本、管理、标准、服务输出为一体的综合性工程承包转变，从工程承包商向一体化综合解决方案提供商转变，从而实现工程承包业务全球领先的发展目标。</p>
      </el-col>
      <el-col :span="14" class="body-B" v-else-if="Id == 2">
        <p>&emsp;&emsp;2013年以来，围绕“率先建成世界一流企业”的战略目标，中国交建提出了建设适应性组织、打造“五商中交”、实现升级发展的战略路径。公司的改革发展和转型升级对人才工作提出了新的挑战。一是经营规模的持续扩张对人才资源的数量和质量提出了更高的要求；二是“五商中交”战略的实施要求进一步优化人才结构；三是巩固公司在行业内的人才竞争优势需要一定数量的企业领军人才和高端技术专家；四是国际化经营战略的实施需要大量高素质的国际化人才；五是建设适应性组织、强化协同发展需要建立更加高效有力的人才资源管控体系。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为更好地中国交建调动员工的工作积极性，提高员工退休后的生活保障，建立中国交建人才的长效机制，促进中国交建持续、稳定、健康地发展，根据《劳动法》、《企业年金试行办法》(劳动和社会保障部令2004年第20号)和《关于中央企业试行企业年金制度的指导意见》(国资发分配[2005]135号)等有关政策规定，中国交建自2006年1月1日起开始建立企业年金，目前已有近10万余人加入了企业年金计划，每年有近万余名退休人员享受企业年金待遇。截至2016年6月30日，企业年金基金投资规模已近70亿元，累计投资收益超过40%。</p>
        <p>中国交建企业年金采取的是“集中管理、分级实施”的管理模式。集中管理即由中国交建制定企业年金整体实施方案，统一选择企业年金管理机构，统筹协调各机构与各级子企业的关系，全程监督企业年金计划的运行；分级实施即由各子企业根据企业总部制定的企业年金方案，制定本单位企业年金实施细则，管理本单位企业年金业务。通过“集中管理、分级实施”管理模式的实施，中国交建充分发挥了集合资金的规模效应，降低了管理成本，提高了年金基金的管理及运营效率，保证了年金基金的整体投资业绩水平。</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国交建企业年金基金的分配标准根据员工对企业经营业绩贡献的大小，结合员工的岗位职责等因素综合确定，对于一些工龄长、职务较低的员工，中国交建以工龄补偿的方式提高其年金基金的分配比例，同时对各级单位的负责人采取了每年不超过本单位员工平均水平5倍的限制措施，从根本上保证了分配的公平性。</p>
        <p>
          <br />
        </p>
      </el-col>
      <el-col :span="14" class="body-B" v-else-if="Id == 3">
        <ul
          style="margin: 10px 0px 0px 20px; padding: 10px; border-width: 1px 1px 1px 2px; border-style: solid; border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(238, 238, 238); cursor: pointer; color: rgb(68, 68, 68); font-family: Arial, 宋体, Helvetica, sans-serif; font-size: 12px; white-space: normal;"
          class="list-paddingleft-2"
        >
          <li>
            <p>
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?position=564373"
                style="color: rgb(51, 51, 51); text-decoration-line: none; font-size: 14px; font-weight: bold;"
              >WEB前端开发工程师</a>
            </p>
          </li>
          <li>
            <p>
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?company=63353"
                style="color: rgb(0, 102, 204); text-decoration-line: none;"
              >
                <span style="color:#FF7725">大恒建设</span>集团有限公司
              </a>
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2 名&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;本科&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;面议&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;3年以上工作经验&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;香洲&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2019.06.13
            </p>
          </li>
          <li>
            <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">
              1、根据需求设计UI界面,完成设计图. 2、负责网站的Web前端开发, 编写HTML、CSS、JS 3、与后台开发工程师协作，完成操作交互、数据展现 任职资格： 1、 熟悉JavaScript、HTML5、CSS3、AJAX、jQuery、Bootstrap、Sass、...&nbsp;&nbsp;
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?position=564373"
                style="color: rgb(102, 153, 0); text-decoration-line: none;"
              >详细&gt;&gt;</a>
            </p>
          </li>
          <li>
            <p>
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?position=554341"
                style="color: rgb(51, 51, 51); text-decoration-line: none; font-size: 14px; font-weight: bold;"
              >java工程师</a>
            </p>
          </li>
          <li>
            <p>
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?company=63353"
                style="color: rgb(0, 102, 204); text-decoration-line: none;"
              >
                <span style="color:#FF7725">大恒建设</span>集团有限公司
              </a>
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2 名&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;本科&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;面议&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;3年以上工作经验&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;香洲&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2019.06.13
            </p>
          </li>
          <li>
            <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">
              1、本科及以上学历，3年以上相关工作经验； 2、从事JAVA开发工作3年以上，至少参与过3个完整周期的项目开发工作、JAVA基础编程功底良好，熟悉各种常用JAVA API及SSH框架，具有Web开发方面知识（JS、CSS、Jquery等）；...&nbsp;&nbsp;
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?position=554341"
                style="color: rgb(102, 153, 0); text-decoration-line: none;"
              >详细&gt;&gt;</a>
            </p>
          </li>
          <li>
            <p>
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?position=555606"
                style="color: rgb(51, 51, 51); text-decoration-line: none; font-size: 14px; font-weight: bold;"
              >Android 开发工程师</a>
            </p>
          </li>
          <li>
            <p>
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?company=63353"
                style="color: rgb(0, 102, 204); text-decoration-line: none;"
              >
                <span style="color:#FF7725">大恒建设</span>集团有限公司
              </a>
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2 名&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;本科&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;面议&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2年以上工作经验&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;香洲&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2019.06.13
            </p>
          </li>
          <li>
            <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">
              岗位职责： 1、能独立负责Android移动端开发工作； 2、按照项目计划，按时提交高质量代码，完成开发任务； 3、为公司产品或项目所需的新技术进行研发学习； 4、实现软件部署、接口联调，进行开发文档的编写； 5、按时...&nbsp;&nbsp;
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?position=555606"
                style="color: rgb(102, 153, 0); text-decoration-line: none;"
              >详细&gt;&gt;</a>
            </p>
          </li>
          <li>
            <p>
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?position=563516"
                style="color: rgb(51, 51, 51); text-decoration-line: none; font-size: 14px; font-weight: bold;"
              >工程合同档案管理员</a>
            </p>
          </li>
          <li>
            <p>
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?company=63353"
                style="color: rgb(0, 102, 204); text-decoration-line: none;"
              >
                <span style="color:#FF7725">大恒建设</span>集团有限公司
              </a>
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;1 名&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;专科&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;面议&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2年以上工作经验&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;香洲&nbsp;
              <span style="margin: 0px 5px; color: rgb(204, 204, 204);">|</span>&nbsp;2019.06.13
            </p>
          </li>
          <li>
            <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px;">
              工作范围： 1、公司工管中心文档、合同、证照的日常管理，包括新建、编号、录入、审核、归档、外借、查阅等工作。 2、领导交办的其它事务。 任职要求： 1、大专及以上学历； 2、2年以上相关工作经验； 3、善于沟通、...&nbsp;&nbsp;
              <a
                target="_blank"
                href="http://www.zh-hr.com/jsp/person/ckzw/positionindex.jsp?position=563516"
                style="color: rgb(102, 153, 0); text-decoration-line: none;"
              >详细&gt;&gt;</a>
            </p>
          </li>
          <li>
            <p>
              <br />
            </p>
          </li>
        </ul>
      </el-col>
      <el-col :span="14" class="body-B" v-else-if="Id == 4">人力资源4</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Arr: [
        {
          name: "人才理念"
        },
        {
          name: "人才队伍"
        },
        {
          name: "职业发展"
        },
        {
          name: "招聘信息"
        },
        {
          name: "信息公示"
        }
      ],
      Id: ""
    };
  },
  methods: {
    tabbarO(i) {
      this.Id = i;
    }
  }
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  :nth-child(2) {
    color: var(--y);
  }
}

.body-A {
  display: flex;
  .el-breadcrumb {
    margin-left: 20px;
  }
  .HH4 {
    height: 40px;
    width: 127px;
    line-height: 40px;
    margin-left: 1px;
  }
}

.body-B {
  margin-left: 20px;
  height: 500px;
  border: 1px solid #ccc;
  padding: 20px 20px 0;
}
.panel-body {
}
p {
  text-indent: 2em;
  line-height: 25px;
}
</style>