import Home from "@/views/HomeView.vue"
import Portfolio from "@/views/PortfolioView.vue"
import Services from "@/views/ServicesView.vue"
import Blog from "@/views/BlogView.vue"
import Careers from "@/views/CareersView.vue"
import About from "@/views/AboutView.vue"
import Contact from "@/views/ContactView.vue"
import JobDesc from "@/views/JobDescription/JobDesc.vue"
import Article from "@/components/BlogPage/ArticlePage/ArticlePage.vue"

export default [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/portfolio',
    component: Portfolio,
    name: 'portfolio',
  },
  {
    path: '/services',
    component: Services,
    name: 'services',
  },
  {
    path: '/jobs/:id',
    component: JobDesc,
    name:'JobDesc',
    props:true
  },
  {
    path: '/blog',
    component: Blog,
    name: 'blog',
  },
  {
    path: '/blog/:id',
    component: Article,
    name: 'article',
  },
  {
    path: '/careers',
    component: Careers,
    name: 'careers',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
  },
  {
    path: '/contact',
    component: Contact,
    name: 'contact'
  },
]
