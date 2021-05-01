import Title from '../components/Title';
import Para from '../components/Para';
import Slide from '../components/Slide';
import './slide5.css';
const slide5 = (
    <Slide key={4} slideIndex={4}>
        <div className='slide5-div'>
            <Title titleText="Project Description" slideIndex={4} style={{
                textAlign: 'center',
                marginTop: '-30px'
            }} />

            <Para paraText='When beginning Land Loss Lookout, participants are randomly assigned 
                        to look for just one of these categories and are then given a short tutorial on 
                        how to identify the unique patterns associated with their assigned type of land 
                        impact. Once participants have completed the tutorial, they may begin sorting 
                        through the image database and labeling whether or not their assigned land impact 
                        pattern is present.As users label the photos, Cartoscope collects the geolocation 
                        information for each categorized image and plots the results on a map that is 
                        available to the research team and participants. This allows participants to view 
                        their own contributions and the contributions of others, while also playing an 
                        instrumental part in the effort to protect Louisiana’s wetlands.'
            />
        </div>
    </Slide>
);

export default slide5;