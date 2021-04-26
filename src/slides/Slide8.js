import Slide from '../components/Slide';
import Title from '../components/Title';
import './slide7.css';
import './slide6.css';


let scl = 1.0;

const slide8 = (
    <Slide key={7} slideIndex={7}>
        <Title titleText="My contribution" slideIndex={7} style={{
            fontSize: '5rem',
            textAlign: 'center',
            textShadow: '4px 4px 0px #FF4545',
            marginTop: '-50px',
            marginBottom: '30px'
        }} />
        <div style={{
            width: 'calc(var(--slide-w) * 0.7)',
            height: 'calc(var(--slide-h) * 0.7)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <img src='sea-level-rise/Sea Level Rise Contribution On Map.png' style={{
                width: '80%',
                height: '80%',
                objectFit: 'cover',
                boxShadow: '5px 5px 0px #FF4545',
                position: 'absolute',
                left: '50%',
                transform: `translateX(-50%)`,
            }} className='contribution-map' />
        </div>
    </Slide >
);

export default slide8;