import React from 'react'
import Navbar from '../Navbar';
import {HeroContainer, 
        HeroContent, 
        HeroItems, HeroH1, 
        HeroP, 
        HeroBtn} from './heroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Best Food Ever!</HeroH1>
                    <HeroP>Food Prepared in under 15 Minutes!</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero