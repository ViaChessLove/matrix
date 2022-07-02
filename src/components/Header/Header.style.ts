import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
    display: flex;
    background: transparent;
    margin-bottom: -80px;
    height: 80px;
    justify-content: center;
    font-size: 2rem;
    position: absolute;
    top: 0;
    z-index: 50;
    width: 100%;
    transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: flex-start;
	height: 80px;
	${Container}
`;

export const NavMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
	text-align: center;
	width: 100%;
`;


export const NavItem = styled.li`
    height: 80px;
	cursor: pointer;
    color: #fff;
`;
