import {Link} from 'react-router-dom'

const Nav = ({user}) => {
    const alertNotice = () => (alert(`Hello  ${user}`))
    return (
        <nav>
        <ul class="nav-links">
            <Link to = '/' className= 'link' > 
            <li>Σπίτι</li>
            </Link>
            <Link to = '/about' className= 'link' > 
            <li>σχετικά με</li>
            </Link>
            <li className="user" onClick={alertNotice}> 
            γειά σου <span>{user}</span>
           
            </li>
        </ul>
    </nav>
    )
}

export default Nav
