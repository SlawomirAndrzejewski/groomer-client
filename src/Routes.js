import Home from './views/Home'
import Dashboard from './components/Dashboard'

export default [
    { 
        path: '/', 
        name: 'Home',
        component: Home 
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
]