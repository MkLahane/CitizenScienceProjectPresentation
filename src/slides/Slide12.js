import Slide from '../components/Slide';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import './slide6.css';
const slide12 = (
    <Slide key={11} slideIndex={11}>
        <div className='slide6-div'>
            <Title titleText="Farming" slideIndex={11} style={{
                marginTop: '-30px'
            }} />
            <Subtitle titleText="How do we recognize a Farming land impact?"
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
                        Parallel straight lines in a field(yellow lines).
            </li>
                    <li style={{ animationDelay: '2s' }}>
                        Angular, blocky borders to a field(yellow blocks).
            </li>
                    <li style={{ animationDelay: '3s' }}>
                        Spokes of straight lines radiating from a road.
                </li>
                </ul>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <img alt='' src="farming/info.png"
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

export default slide12;