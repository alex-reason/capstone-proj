import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAddShoppingCart } from "react-icons/md";
import logo from '../assets/Logo.png'
import { useState } from "react";

const Navigation = () => {
    const [clicked, setClicked] = useState(false);
    const navContentDesktop = (
        <ul className='desktop'>
            <li><Link to='/capstone-proj'>Home</Link></li>
            <li><Link to='/capstone-proj/reserve'>Reservations</Link></li>
        </ul>
    );

    const openedMenu = (
        <ul className={clicked ? 'mobile-nav' : 'hidden'}>
            <li><Link to='/capstone-proj/'>Home</Link></li>
            <li><Link to='/capstone-proj/reserve'>Reservations</Link></li>
        </ul>
    )

    const clickHandler = () => {
        setClicked(!clicked)
    }

    const navContentMobile = (
        <div className='mobile'>
            <div className='mobile__upper'>
                <RxHamburgerMenu onClick={clickHandler} />
                <Link to='/capstone-proj/'><img src={logo} alt='little lemon logo' /></Link>
                <MdAddShoppingCart />
            </div>
            {openedMenu}
        </div>
    );

    return (
        <nav>
            {navContentMobile}
            {navContentDesktop}
        </nav>
    )
}

export default Navigation