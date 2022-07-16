import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../globalStyles';
import { ContentBackground, ContentCard, ContentContainer, ContentSubtitle, ContentText, ContentTextBox, ContentTitle } from './ContentStyles';

interface ComponentProps {
    src: string;
    title: string;
    subtitle?: string;
    content: string;
    background?: string;
}

const Content: React.FC<ComponentProps> = ({src, title, subtitle, content, background}) => {
  const initial = {opacity: 0, x: -40};
  const animation = useAnimation();
  const {ref, inView} = useInView({threshold: 0.3});
  useEffect(() => {
    if (inView) {
        animation.start({
            opacity: 1,
            y:0,
            x: 0
        })
    } else {
        animation.start({
            opacity: 0,
            y: 40,
        })
    }
  }, [inView, ref])
  return (
    <>
        {background? <ContentBackground src={background}/>: undefined}
        <ContentContainer ref={ref} initial={initial} transition={{delay: 0.5, duration: 0.3}} animate={animation}>   
            <Container>
                <ContentCard>    
                    <img src={src} alt="" />
                    <ContentTextBox>    
                        <ContentTitle>{title}</ContentTitle>
                        <ContentSubtitle>{subtitle}</ContentSubtitle>
                        <ContentText>
                            {content}
                        </ContentText>
                    </ContentTextBox>
                </ContentCard>
            </Container>
        </ContentContainer>
    </>
  )
}

export default Content