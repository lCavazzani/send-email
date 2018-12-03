import React, { Component } from 'react'


class Header extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo"> Email</a>
                    <ul className="right hide-on-med-and-down">
                         <li><a href="#">Login With Google</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;