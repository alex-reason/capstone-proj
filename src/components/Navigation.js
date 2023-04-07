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
            <li><a href="/home" role="button">Home</a></li>
            <li><a href="/about" role="button">About</a></li>
            <li><a href="/reserve" role="button">Reservations</a></li>
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