import {Link} from 'react-router-dom'

import './MainNav.css'
const brandImage = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"

export default function MainNav(props){
    return (<nav className="MainNav">
        {/* navigation link to home page */}
        <Link to="/">
            {/* image icon as link content */}
            <img src={brandImage}/>
        </Link>
        {/* Brand copy  */}
        <div>People App!</div>
        </nav>)
}