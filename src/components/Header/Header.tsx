import React, { useState } from 'react'
import { Nav, NavbarContainer, NavItem, NavMenu } from './Header.style';

const Header = () => {
    const items: string[]  = ['Blue pill', 'Red pill'];
    const [background, setBackground] = useState<boolean>(false);
    return (
        <Nav>  
            <NavbarContainer>
                <NavMenu  background={background}>
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
