import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import MyHeader from "./layout/MyAppHeader"
import MyAppFooter from "./layout/MyAppFooter";
import ContactUs from "./views/ContactUs";
import PortfolioPage from "./views/PortfolioPage";
import AboutPage from "./views/AboutPage";
import BlogPage from "./views/BlogPage";
import BlogDetails from "./views/BlogDetails";
Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: MyHeader,
        default: Components,
        footer: MyAppFooter
      },
      meta: {
        showProgressBar: true
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: MyHeader,
        default: Landing,
        footer: AppFooter
      },
      meta: {
        showProgressBar: true
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: MyHeader,
        default: Login,
        footer: AppFooter
      },
      meta: {
        showProgressBar: true
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: MyHeader,
        default: Register,
        footer: AppFooter
      },
      meta: {
        showProgressBar: false
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: MyHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/contact",
      name: "contact-us",
      components: {
        header: MyHeader,
        default: ContactUs,
        footer: MyAppFooter
      }
    },
    {
      path: "/portfolio",
      name: "portfolio-page",
      components: {
        header: MyHeader,
        default: PortfolioPage,
        footer: MyAppFooter
      }
    },{
      path: "/about",
      name: "about-page",
      components: {
        header: MyHeader,
        default: AboutPage,
        footer: MyAppFooter
      }
    },
    {
      path: "/blogs",
      name: "blogs-page",
      components: {
        header: MyHeader,
        default: BlogPage,
        footer: MyAppFooter
      }
    },
    {
      path: "/blogdetails",
      name: "blogdetails-page",
      components: {
        header: MyHeader,
        default: BlogDetails,
        footer: MyAppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});



export default router