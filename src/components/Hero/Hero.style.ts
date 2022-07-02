import styled from "styled-components";

export const HeroSection = styled.section`
    height: 100vh;
    background-position: center;
    background-size: cover;
    padding-top: clamp(70px, 25vh, 220px);
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1));
    top: 0;
    position: absolute;
    z-index: -1;
`;

export const HeroText = styled.p`
    margin-bottom: 35px;
    font-size: clamp(26px, 46px, 36px);
    line-height: 24px;
    text-align: center;
    letter-spacing: 2px;
    color: #fff;
`;

