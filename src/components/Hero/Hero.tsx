import React, { useEffect, useMemo, useState } from 'react'
import { Container, MainHeading } from '../../globalStyles'
import { HeroSection, HeroText, HeroVideo } from './Hero.style'
import { Typewriter } from 'react-simple-typewriter';
import {useInView} from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion';

const Hero = React.memo(() => {
	const { ref, inView } = useInView({ threshold: 0.2 });
    const animation = useAnimation();
    const initial = {opacity: 0, y: 30}
    useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
    return (
        <HeroSection >
            <HeroVideo src='./assets/matrix.mov' muted loop autoPlay />
            <Container>
                <MainHeading>
                    <Typewriter words={['Hello, NEO']} typeSpeed={200}/>
                </MainHeading>
                <HeroText ref={ref} >
                    <motion.div initial={initial} transition={{ delay: 2, duration: 0.6}} animate={animation}>
                        We gonna tell you, that you're chosen one
                    </motion.div>
                </HeroText>
            </Container>
        </HeroSection>
    )
})

export default Hero
