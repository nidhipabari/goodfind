import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import { Login } from "./Login";
import { Checkout} from "./Checkout"
// import { useStateValue } from "./StateProvider";
// import { auth } from "./firebase";

// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export function Header() {
  // const [{ basket, user }, dispatch] = useStateValue();

  // const handleAuthenticaton = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // }
  return (
    <div className="header">

      <img
        className="header__logo"
        src= {logo}
      />


      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* <SearchIcon className="header__searchIcon" /> */}
      </div>

      <div className="header__nav">

      {/* <Link to={!user && '/login'}> */}
          {/* <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div> */}
        {/* </Link> */}

        <div className="header__option">
          {/* <span className="header__optionLineOne">Hello Guest</span> */}
          <span className="header__optionLineTwo">
          <button value={Login} type="submit" onClick={() => window.location.href='http://localhost:3000/auth'}>Sign In</button> </span>


        </div>



        <div className="header__option">
          <span className="header__optionLineTwo"> 
            <button value={Checkout} type="submit" onClick={() => window.location.href='http://localhost:3000/Checkout'}>Orders</button></span>

        </div>



          {/* <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div> */}


        <div className="header__optionBasket">
          {/* <ShoppingBasketIcon /> */}
          <span className="header__optionLineTwo header__basketCount">
          🛒
          </span>
        </div>

      </div>
    </div>
  );
}




