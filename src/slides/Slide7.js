import Slide from '../components/Slide';
import Title from '../components/Title';
import './slide7.css';
import './slide6.css';


const getImgs = (img_path) => {
    let img_srcs = [];
    for (let i = 0; i < 11; i++) {
        img_srcs.push(`${img_path}img${i}.jpg`);
    }
    return img_srcs;
};

const presentImgs = getImgs('sea-level-rise/present/');
const notPresentImgs = getImgs('sea-level-rise/not_present/');



const slide7 = (
    <Slide key={6} slideIndex={6}>
        <Title titleText="My contribution" slideIndex={5} style={{
            fontSize: '5rem',
            textAlign: 'center',
            textShadow: '4px 4px 0px #FF4545',
            marginTop: '-50px',
            marginBottom: '30px'
        }} />
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                padding: '0px 20px',
                alignItems: 'center',
                minHeight: '50px',
                marginBottom: '-30px'
            }}>
                <Title titleText='Present' style={{
                    fontSize: '3rem',
                    display: 'block',
                    textShadow: '3px 3px 0px #FF4545',
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards'
                }} />
                <Title titleText='Not Present' style={{
                    fontSize: '3rem',
                    display: 'block',
                    textShadow: '3px 3px 0px #FF4545',
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    animationDelay: '12s'
                }} />
            </div>
            <div className='contribution-parent-div'>
                <div className='contribution-div'>
                    {
                        presentImgs.map((imgSrc, i) =>
                            <img key={i} src={imgSrc} className='present-imgs' style={{
                                width: 'calc(var(--slide-w) * 0.35)',
                                height: 'calc(var(--slide-h) * 0.45)',
                                gridArea: '1 / -1',
                                animationDelay: `${(i + 1) + 0.5}s`
                            }} />
                        )
                    }
                </div>
                <div className='contribution-div'>
                    {
                        notPresentImgs.map((imgSrc, i) =>
                            <img key={i} src={imgSrc} className='not-present-imgs' style={{
                                width: 'calc(var(--slide-w) * 0.35)',
                                height: 'calc(var(--slide-h) * 0.45)',
                                gridArea: '1 / -1',
                                animationDelay: `${(i + 1) + 0.5 + 12}s`
                            }} />
                        )
                    }
                </div>
            </div>
            <h2 style={{
                fontSize: '2rem',
                animation: 'fadeInh2 ease-out 1s forwards',
                opacity: 0.0,
                transform: 'translateX(-100%)',
                animationDelay: '25s'
            }}>And 365 more....</h2>
        </div>
    </Slide>
);

export default slide7;