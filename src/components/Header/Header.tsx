import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Nav, NavbarContainer, NavItem, NavMenu } from './Header.style';

const Header = () => {
    const items: string[]  = ['Blue pill', 'MATRIX', 'Red pill'];
    const [background, setBackground] = useState<boolean>(true);
    return (
        <Nav>  
            <NavbarContainer>
                <NavMenu  background={background}>
                    {items.map((item) => {
                        return (
                        <Link to={
                            item === 'Blue pill' ? '/bluepill': 
                            item === 'MATRIX'? '/': '/redpill'
                        }>
                            <NavItem color={item.split(" ")[0].toLowerCase() !== 'matrix'? item.split(" ")[0].toLowerCase(): 'green'}>
                                {item}</NavItem>
                        </Link>
                        )
                    })}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Header
