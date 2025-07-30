import { Link } from 'react-router-dom'
import './style.css'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre" state={'Esse é um state vindo da Home'}>Sobre</Link>
                </li>
                <li>
                    <Link to="/posts" >Posts</Link>
                </li>
                <li>
                    <Link to="/posts/10" >Posts 10</Link>
                </li>
                <li>
                    <Link to="/redirect" >Redirect</Link>
                </li>
            </ul>
        </nav>
    )
}