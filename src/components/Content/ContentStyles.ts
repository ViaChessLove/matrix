import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentContainer = styled(motion.div)`
    height: 100vh;
    padding-top: clamp(40px, 15vh, 220px);
`;

export const ContentCard = styled.div`
    background-color: white;
    border-radius: 40px;
    display: flex;
    flex-wrap: wrap;
`;

export const ContentBackground = styled.img`

    object-fit: cover;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1));
    position: absolute;
    z-index: -1;
`

export const ContentTextBox = styled.div`
    padding-top: clamp(20px, 25px, 35px);
    max-width: 600px;
`;

export const ContentTitle = styled.h1`
    font-size: clamp(30px, 40px, 50px);
    text-align: center;
`;

export const ContentSubtitle = styled.p`
    padding-top: clamp(10px, 15px, 20px);
    font-size: clamp(26px, 36px, 46px)
`;

export const ContentText = styled.p`
    padding-top: clamp(10px, 15px, 20px);
    font-size: clamp(24px, 32px, 38px);
`
