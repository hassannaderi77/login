import Home from './pages/home/Home'
import About from './pages/about/About'
import Article from './pages/article/Article'
import Course from './pages/course/Course'
import Login from './pages/login/Login'
import Panel from './pages/panel/Panel'
import Setting from './pages/Setting'
import PrivateRoute from './components/PrivateRoute'


const routes = [
    {path : '/', element : <Home />},
    {path : '/about', element : <About />},
    {path : '/article/*', element : <Article /> , children : [
      {path : 'php', element : <h2>php article</h2>},
      {path : 'js', element : <h2>js article</h2>},
      {path : 'react', element : <h2>react article</h2>}
    ]},
    {path : '/course/:courseId', element : <Course />},
    {path : '/login', element : <Login />},
    {path : '/panel', element : <PrivateRoute> <Panel /> </PrivateRoute>},
    {path : '/setting', element : <PrivateRoute> <Setting /> </PrivateRoute>}
]

export default routes