import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkExactActiveClass: 'active'
})
// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
      // 需要登录
      const token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({
          path: "/ddc/login",
        });
      }
    } else {
      // 不需要登录验证
      next();
    }
  });
export default router