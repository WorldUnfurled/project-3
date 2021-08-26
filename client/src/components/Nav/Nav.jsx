import './Nav.css';
import handleCollapse from '../../utils/collapse'

export default function Nav() {

    return(
        
    
    
        <nav className="banner">
        <p>Fall Sale starts 9/17! Free Shipping on Domestic Orders 0ver $100</p>
        <div className="navbar">
        <ul className="menu">
            <li><a id="accessories" href="#accessories">accessories</a></li>
            <li><a id="seasons" href="#seasons">seasons</a></li>
            <li><a id="more" href="#more">more ▾</a></li>
        </ul>
        <div className="logo-text">
            enCapsulate
        </div>
        <ul className="menu">
            {/* <li><a id="search" href="#clothes">🔎︎ Search</a></li> */}
            <li><a id="bag" href="#bag">bag (0)</a></li>
            <li><a id="login" href="#login">login</a></li>
        </ul>
        <div className="collapse" onClick={handleCollapse}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </div>

    </nav>

    
    
    );

}