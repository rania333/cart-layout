import {Fragment} from 'react';
import classes from './Header.module.scss';
import {GiClothes} from 'react-icons/gi';
import {AiOutlineSearch} from 'react-icons/ai';
import {BiCartAlt} from 'react-icons/bi';
import {IoPersonOutline} from 'react-icons/io5'
function Header() {
    return ( 
        <Fragment>
            <nav className={classes.nav}>
                <div className={classes.logo}>
                    <p> <GiClothes/> </p>
                    <p>E-Shop</p>
                </div>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
                <div className={classes.icons}> 
                    <AiOutlineSearch/>
                    <BiCartAlt/>
                    <IoPersonOutline/>
                </div>
            </nav>
            <hr></hr>
        </Fragment>
    );
}

export default Header;