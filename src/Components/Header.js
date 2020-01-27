import React, { Component } from 'react';
import {Navbar , Nav, NavItem,NavbarBrand, NavProps} from 'react-bootstrap';

export class Header extends Component {
    onLogin = () =>{
        this.props.onLogin();
    }

    onLogout= () => {
        this.props.onLogout();
    }
    
     
    render() {
        console.log(this.props.idToken+' oooo');
        
        var login;
        var logout;
        if(this.props.idToken){
            login = <NavItem href="#" onClick={this.onLogout}>Logout</NavItem>;            
        }else{
            login = <NavItem href="#" onClick={this.onLogin}>Login</NavItem>;
        }
        return (
            <Navbar>                    
                <NavbarBrand>
                    Github Search
                </NavbarBrand>                    
                <Nav>
                    {login}
                </Nav>
            </Navbar>
        )
    }
}

export default Header
