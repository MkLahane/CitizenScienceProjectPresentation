import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Slide from '../components/Slide';

const slide1 = (
    <Slide key={0} slideIndex={0}>
        <Title titleText="Land Loss Lookout" slideIndex={0} />
        <Subtitle titleText="---Citizen Science Project---" style={{
            fontSize: "2rem",
            animationDelay: '0.8s'
        }} />
        <br />
        <br />
        <Subtitle titleText="02/21/2021 - 04/24/2021" style={{
            fontSize: "2rem",
            animationDelay: '1.6s'
        }} />
    </Slide>
);

export default slide1;