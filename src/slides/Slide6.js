import Slide from '../components/Slide';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import './slide6.css';
const slide6 = (
    <Slide key={5} slideIndex={5}>
        <Title titleText="Sea Level Rise" slideIndex={5} style={{
            fontSize: '5rem',
            textAlign: 'center',
            textShadow: '4px 4px 0px #FF4545',
            marginTop: '-50px'
        }} />
        <Subtitle titleText="How do we recognize a sea-level-rise land impact?"
            style={{
                fontSize: '2rem',
                display: 'block',
                transform: 'translateY(-100%)',
                opacity: 0.0,
                animation: 'subtitle_fade_in 1s ease-in-out forwards'
            }}
        />
        <Subtitle titleText="Land represented by red is dotted with small holes (yellow circles), like swiss cheese or a kitchen sponge"
            style={{
                fontSize: '2rem',
                display: 'block',
                transform: 'translateY(-100%)',
                opacity: 0.0,
                animation: 'subtitle_fade_in 1s ease-in-out forwards',
                background: 'none',
                animationDelay: '1s'
            }}
        />
        <div style={{
            display: 'flex'
        }}>
            <img src="Identifying Sea Level Rise.png"
                style={{
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    animationDelay: '2s'
                }}
            />
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Subtitle titleText="Why does this happen?"
                    style={{
                        fontSize: '2rem',
                        display: 'block',
                        height: '50px',
                        background: 'none',
                        transform: 'translateY(-100%)',
                        opacity: 0.0,
                        animation: 'subtitle_fade_in 1s ease-in-out forwards',
                        animationDelay: '3.5s'
                    }}
                />
                <Subtitle titleText="When sea levels rise and marshes flood, plants spend more time 
                                    underwater and eventually cannot survive. Flooding replaces land with 
                                    water and ponds"
                    style={{
                        fontSize: '2rem',
                        display: 'block',
                        height: '50px',
                        background: 'none',
                        transform: 'translateY(-100%)',
                        opacity: 0.0,
                        animation: 'subtitle_fade_in 1s ease-in-out forwards',
                        animationDelay: '4.5s'
                    }}
                />
            </div>
        </div>
    </Slide>
);

export default slide6;