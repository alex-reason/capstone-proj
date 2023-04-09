import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAddShoppingCart } from "react-icons/md";
import logo from '../assets/Logo.png'

const Navigation = () => {
    const navContentMobile = (
        <div>
            <RxHamburgerMenu />
            <img src={logo} alt='little lemon logo'/>
            <MdAddShoppingCart />
        </div>
    );
    const navContentDesktop = (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/reserve'>Reservations</Link></li>
        </ul>
    );

    return (
        <nav>
            {navContentMobile}
            {navContentDesktop}
        </nav>
    )
}

export default Navigation