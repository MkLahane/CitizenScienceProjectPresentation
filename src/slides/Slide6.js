import Slide from '../components/Slide';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import './slide6.css';
const slide6 = (
    <Slide key={5} slideIndex={5}>
        <div className='slide6-div'>
            <Title titleText="Sea Level Rise" slideIndex={5} style={{
                textAlign: 'center',
                textShadow: '4px 4px 0px #FF4545',
                marginTop: '-50px'
            }} />
            <Subtitle titleText="How do we recognize a Sea Level Rise land impact?"
                style={{
                    display: 'block',
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards'
                }}
            />
            <Subtitle titleText="Land represented by red is dotted with small holes (yellow circles), like swiss cheese or a kitchen sponge"
                style={{
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
                <img alt='' src="sea-level-rise/info.png"
                    style={{
                        width: 'calc(var(--slide-w) * 0.3)',
                        height: 'calc(var(--slide-w) * 0.3)',
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
        </div>
    </Slide>
);

export default slide6;