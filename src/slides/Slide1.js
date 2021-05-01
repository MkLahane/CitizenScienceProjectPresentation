import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Slide from '../components/Slide';



const Slide1Component = () => {
    return (
        <div>
            <Title titleText="Land Loss Lookout" slideIndex={0} />
            <br />
            <Subtitle titleText="---Citizen Science Project---" style={{
                animationDelay: '0.8s',
                width: '50%'
            }} />
            <br />
            <br />
            <Subtitle titleText="02/21/2021 - 04/24/2021" style={{
                animationDelay: '1.6s',
                width: '60%'
            }} />
            <br />
            <br />
        </div>
    )
};

const slide1 = (
    <Slide key={0} slideIndex={0}>
        <Slide1Component />
    </Slide>
);



export default slide1;