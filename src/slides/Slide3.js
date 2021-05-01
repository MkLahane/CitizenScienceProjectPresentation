import Title from '../components/Title';
import Para from '../components/Para';
import Slide from '../components/Slide';

const slide3 = (
    <Slide key={2} slideIndex={2}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Title titleText="Motivation" slideIndex={2} style={{
                fontSize: '6rem',
                textAlign: 'center',
                marginTop: '-40px',
            }} />
            <Para paraText="The Mississippi River Delta, 
                    located on Louisiana’s Gulf coast, is one of the most fertile landscapes in the world. 
                    The delta provides food and shelter for those who call it home, as well as hurricane and 
                    flood protection, a flyway for migratory birds, recreational benefits, and more. 
                    Despite their economic and ecological value, Louisiana’s wetlands are being lost at 
                    an alarming rate. Over 400 square miles of marshland have been lost to oil and gas 
                    activity alone." />

            <Para paraText="In response to this crisis, Cartoscope, in partnership with Healthy Gulf and Northeastern 
                        University, developed Land Loss Lookout, a citizen science tool that trains users to identify 
                        types of wetland loss in the Gulf of Mexico and label where such loss is 
                        occurring by categorizing color infrared aerial photographs."
            />
        </div>
    </Slide>
);

export default slide3;