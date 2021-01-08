import React from 'react';
import "./Header.css";
import { Link} from "react-router-dom";
//import { SvgIconProps } from '@material-ui/core/SvgIcon'
import Search from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket"
import{ useStateValue } from './StateProvider';
function Header() {
    const [{basket}]=useStateValue();

    console.log(basket)
    return (
        <nav className="header">
            {/*logo on the left*/}
            <Link to ="/">
            <img 
            className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            />   
            </Link>
           
            {/*search box*/}
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <Search className="header__searchIcon"/>
            </div>
            {/*3 links*/}
            <div className="header__nav">
                {/*1st links*/}
                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">hello elias</span>
                    <span className="header__optionLineTwo">Sign In</span>         
                </div>

                </Link>
                {/*2nd links*/}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne" >Returns</span>
                    <span className="header__optionLineTwo">& orders</span>         
                </div>

                </Link>
                {/*3rd links*/}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>         
                </div>

                </Link>
                {/*4th links*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/*shopping basket icon*/}
                        <ShoppingBasket/>
                        {/*Number of items in the basket*/}
                        <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>
                    </div>
                </Link>
            </div>

            {/*basket icon with number*/}
        </nav>
    )
}

export default Header;
