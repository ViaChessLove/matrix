import React from 'react'
import { Nav, NavbarContainer, NavItem, NavMenu } from './Header.style';

const Header = () => {
    const items: string[]  = ['Blue pill', 'Red pill'];
    return (
        <Nav>  
            <NavbarContainer>
                <NavMenu>
                    {items.map((item) => {
                        return <NavItem>{item}</NavItem>
                    })}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Header
