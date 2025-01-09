import Home from "@/views/HomeView.vue"
import Portfolio from "@/views/PortfolioView.vue"
import Services from "@/views/ServicesView.vue"
import Blog from "@/views/BlogView.vue"
import Careers from "@/views/CareersView.vue"
import About from "@/views/AboutView.vue"
import Contact from "@/views/ContactView.vue"

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
        path: '/blog',
        component: Blog,
        name: 'blog',
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