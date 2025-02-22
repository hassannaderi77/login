import './Article.css';
import MyNavbar from '../../components/navbar/Navbar'
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Article() {
    return(
        <div className='articleWrapper'>
            <MyNavbar />
            <h1>صفحه مقالات</h1>
            <hr/>
                <Button variant="primary">
                    <Link to='php' className='text-decoration-none text-black'>php</Link>    
                </Button>{' '}
                <Button variant="secondary">
                    <Link to='js' className='text-decoration-none text-black'>javascript</Link>    
                </Button>{' '}
                <Button variant="success">
                    <Link to='react' className='text-decoration-none text-black'>react</Link>    
                </Button>{' '}
            <hr/>

            <Outlet />

        </div>
    )
}

export default Article;