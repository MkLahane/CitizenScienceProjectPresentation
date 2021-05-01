import Slide from '../components/Slide';
import Title from '../components/Title';
import './slide7.css';
import './slide6.css';
import './slide8.css';



const slide8 = (
    <Slide key={7} slideIndex={7}>
        <div className='slide8-div'>
            <Title titleText="My contribution" slideIndex={7} style={{
                marginTop: '-30px',
                marginBottom: '30px'
            }} />
            <div style={{
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img alt='' src='sea-level-rise/Sea Level Rise Contribution On Map.png' style={{
                    width: 'calc(var(--slide-w) * 0.5)',
                    height: 'calc(var(--slide-h) * 0.5)',
                    objectFit: 'cover',
                    boxShadow: '5px 5px 0px #FF4545'
                }} className='contribution-map' />
            </div>
        </div>
    </Slide >
);

export default slide8;