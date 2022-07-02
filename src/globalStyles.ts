import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {   
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'VT323', monospace;
        scroll-behavior: smooth;
        scrollbar-width: thin
    }
    &::-webkit-scrollbar {
    width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgreen;
    }

    &::-webkit-scrollbar-track {
        background-color: black;
    }


`;

export const Container = styled.div`
    width: 100%;
    max-width: 1320px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 50px;
`

export const MainHeading = styled.div`
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    margin-bottom: 2rem;
    color: ${(props) => (props.color? props.color: '#fff')};
    width: 100%;
    letter-spacing: 4px;
    text-align: center;
`;