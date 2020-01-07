import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Index = () => import('../views/index/index.vue')
const Home = () => import('../views/index/home.vue')
const ApproachDh = () => import('../views/index/approachDh.vue')
const DowmLoad = () => import('../views/index/downLoad.vue')
const ContactUs = () => import('../views/index/contactUs.vue')
const EnterpriseCulture = () => import('../views/index/enterpriseCulture.vue')
const Manage = () => import('../views/index/manage.vue')
const Manpower = () => import('../views/index/manpower.vue')
const News = () => import('../views/index/news.vue')
const Society = () => import('../views/index/society.vue')


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/downLoad',
        component: DowmLoad
      },
      {
        path: '/approachDh',
        component: ApproachDh
      },
      {
        path: '/contactUs',
        component: ContactUs
      },
      {
        path: '/enterpriseCulture',
        component: EnterpriseCulture
      },
      {
        path: '/manage',
        component: Manage
      },
      {
        path: '/manpower',
        component: Manpower
      },
      {
        path: '/news/:id?',
        name:'news',
        component: News
      },
      {
        path: '/society',
        component: Society
      }
    ]

  },
]
const router = new VueRouter({
  routes
})

export default router
