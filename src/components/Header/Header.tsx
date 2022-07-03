import React from 'react'
import { Nav, NavbarContainer, NavItem, NavMenu } from './Header.style';

const Header = () => {
    const items: string[]  = ['Blue pill', 'Red pill'];
    return (
        <Nav>  
            <NavbarContainer>
                <NavMenu>
                    {items.map((item) => {
                        console.log(item.split(' ')[0].toLowerCase());
                        return <NavItem color={item.split(" ")[0].toLowerCase()}>{item}</NavItem>
                    })}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Header
