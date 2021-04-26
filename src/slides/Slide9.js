import Slide from '../components/Slide';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import './slide6.css';
const slide9 = (
    <Slide key={8} slideIndex={8}>
        <Title titleText="Oil & Gas" slideIndex={8} style={{
            fontSize: '5rem',
            textAlign: 'center',
            textShadow: '4px 4px 0px #FF4545',
            marginTop: '-50px'
        }} />

        <Subtitle titleText="How do we recognize a oil and gas land impact?"
            style={{
                fontSize: '2rem',
                display: 'block',
                transform: 'translateY(-100%)',
                opacity: 0.0,
                animation: 'subtitle_fade_in 1s ease-in-out forwards'
            }}
        />
        <div style={{
            display: 'flex',
            marginTop: '20px'
        }}>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                padding: '10px 20px'
            }}>
                <li style={{
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    background: 'none',
                    animationDelay: '1s',
                    fontSize: '1.7rem'
                }}>
                    Medium sized lines(canals), dark in color, with several off-shoots(yellow lines).
            </li>
                <li style={{
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    background: 'none',
                    animationDelay: '2s',
                    fontSize: '1.7rem'
                }}>
                    Irregular patterns of canals.
            </li>
                <li style={{
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    background: 'none',
                    animationDelay: '3s',
                    fontSize: '1.7rem'
                }}>
                    Many dead end canals.
            </li>
                <li style={{
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    background: 'none',
                    animationDelay: '4s',
                    fontSize: '1.7rem'
                }}>
                    Multiple blotchy and irregular ponds(yellow circles).
            </li>
            </ul>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <img src="Identifying Oil And Gas.png"
                    style={{
                        transform: 'translateY(-100%)',
                        opacity: 0.0,
                        animation: 'subtitle_fade_in 1s ease-in-out forwards',
                        animationDelay: '5s'
                    }}
                />
            </div>
        </div>
    </Slide >
);

export default slide9;