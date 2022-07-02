import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
//import Video from '/Users/muntaqamaahi/NEXTLEVEL-UB/next-level/src/videos/video.mp4';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
	HeroP
} from './HeroElement';

const HeroSection = () => {
	const [ hover, setHover ] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>A Leadership Mentoring Experience</HeroH1>
				<HeroP>Sign up today!</HeroP>
				<HeroBtnWrapper>
					<Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
						Get started {hover ? <ArrowForward /> : <ArrowRight />}

					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
