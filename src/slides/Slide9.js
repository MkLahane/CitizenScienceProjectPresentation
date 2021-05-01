import Slide from '../components/Slide';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import './slide6.css';


const slide9 = (
    <Slide key={8} slideIndex={8}>
        <div className='slide6-div'>
            <Title titleText="Oil & Gas" slideIndex={8} style={{
                marginTop: '-30px'
            }} />

            <Subtitle titleText="How do we recognize a Oil & Gas land impact?"
                style={{
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
                    <li style={{ animationDelay: '1s' }}>
                        Medium sized lines(canals), dark in color, with several off-shoots(yellow lines).
            </li>
                    <li style={{ animationDelay: '2s' }}>
                        Irregular patterns of canals.
            </li>
                    <li style={{ animationDelay: '3s' }}>
                        Many dead end canals.
            </li>
                    <li style={{ animationDelay: '4s' }}>
                        Multiple blotchy and irregular ponds(yellow circles).
            </li>
                </ul>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <img alt='' src="oil-and-gas/info.png"
                        style={{
                            marginTop: '20px',
                            transform: 'translateY(-100%)',
                            opacity: 0.0,
                            animation: 'subtitle_fade_in 1s ease-in-out forwards',
                            animationDelay: '5s'
                        }}
                    />
                </div>
            </div>
        </div>
    </Slide >
);

export default slide9;