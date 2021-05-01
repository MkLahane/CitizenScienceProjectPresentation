import Slide from '../components/Slide';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import './slide15.css';
const slide15 = (
    <Slide key={14} slideIndex={14}>
        <div className='slide15-div' style={{ marginTop: '-30px' }}>
            <Title titleText="Some other cool stuff I worked on for this project..." slideIndex={5} style={{
                display: 'block',
                textShadow: '3px 3px 0px #FF4545',
                transform: 'translateY(-100%)',
                opacity: 0.0,
                animation: 'subtitle_fade_in 1s ease-in-out forwards'
            }} />
            <Subtitle titleText="Problem: There wasn't any easy option available 
                                for me to download the images easily on classifying"
                style={{
                    display: 'block',
                    height: '50px',
                    background: 'none',
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    animationDelay: '1.5s'
                }}
            />
            <br />
            <br />
            <Subtitle titleText="--> Created a chrome extension to download the images easily."
                style={{
                    display: 'block',
                    marginTop: '30px',
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    animationDelay: '2.5s'
                }}
            />
            <a style={{ animationDelay: '3.5s' }}
                href='https://github.com/MkLahane/ImageDownloadingChromeExtension'>https://github.com/MkLahane/ImageDownloadingChromeExtension</a>
            <br />
            <Subtitle titleText="Problem: Wanted to find an easy way for classification with AI"
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
            <br />
            <br />
            <Subtitle titleText="--> Created a React application that uses mobile net and transfering learning for classification."
                style={{
                    display: 'block',
                    marginTop: '30px',
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    animationDelay: '5.5s'
                }}
            />
            <a style={{ animationDelay: '6.5s' }}
                href='https://github.com/MkLahane/ImageDownloadingChromeExtension'>https://github.com/MkLahane/ImageDownloadingChromeExtension</a>
            <br />
            <Subtitle titleText="Problem: Wanted to try to make a presentation with CSS and React"
                style={{
                    display: 'block',
                    height: '50px',
                    background: 'none',
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    animationDelay: '7.5s'
                }}
            />
            <br />
            <br />
            <Subtitle titleText="--> Created a React application(This presentation)."
                style={{
                    display: 'block',
                    marginTop: '30px',
                    transform: 'translateY(-100%)',
                    opacity: 0.0,
                    animation: 'subtitle_fade_in 1s ease-in-out forwards',
                    animationDelay: '8.5s'
                }}
            />
            <a style={{ animationDelay: '9.5s' }}
                href='https://github.com/MkLahane/CitizenScienceProjectPresentation'>https://github.com/MkLahane/CitizenScienceProjectPresentation</a>

        </div>
    </Slide>
);

export default slide15;