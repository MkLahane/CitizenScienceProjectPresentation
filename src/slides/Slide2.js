import Para from '../components/Para';
import Slide from '../components/Slide';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import './slide2.css';

const slide2 = (
    <Slide key={1} slideIndex={1}>
        <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img alt='' src="GulfOfMexicoMap.png" style={{
                width: 'calc(var(--slide-w) * 0.3)',
                height: 'calc(var(--slide-w) * 0.3)',
                objectFit: 'fill',
                boxShadow: '5px 5px 0px #FF4545',
                marginBottom: '30px',
                marginRight: '50px',
                animation: 'img_pop_up linear 0.5s forwards'
            }}></img>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Title titleText="Gulf of Mexico" slideIndex={1} style={{
                    fontSize: 'calc(var(--slide-w) * 0.1)'
                }} />
                <Subtitle titleText='Largest "Dead Zone" on Earth' />
            </div>
        </div>
        <Para
            paraText='The Gulf of Mexico is an ocean basin and a marginal sea of the Atlantic Ocean, 
                      largely surrounded by the North American continent. It is bounded on the northeast, 
                      north and northwest by the Gulf Coast of the United States; on the southwest and 
                      south by the Mexican states of Tamaulipas, Veracruz, Tabasco, Campeche, Yucatan, 
                      and Quintana Roo; and on the southeast by Cuba. The US states of Texas, Louisiana, 
                      Mississippi, Alabama, and Florida, which border the Gulf on the north, are often 
                      referred to as the " Third Coast" of the United States (in addition to its Atlantic 
                      and Pacific coasts)."' />
    </Slide>
);

export default slide2;