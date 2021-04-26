import React, { useState } from 'react';

import Title from './Title';
import Para from './Para';
import '../slides/slide4.css';

const slide4Data = {
    'sea-level-rise': {
        imgs: ['https://www.northeastern.edu/environmentalhealth/wp-content/uploads/2020/09/5f6258d3973c8f252c59c725_10162811843_b41d1f08e3_b.jpeg',
            'https://global-uploads.webflow.com/5c6e45ba9de596253fb45a11/5f625bade903951d52998926_48372385392_fbf74d6f4f_b.jpg'],
        para: `But we can see the drowning happening. When we fly over the wetlands,
                                    or look at google maps, a thousand small ponds speckle the marshlands,
                                    as lower-lying areas become too inundated to support plant life. This disintegration
                                    of land is happening in places invisible from our boats in the normal waterways,
                                    far from oilfields, and far from shipping canals we normally associate
                                    with wetlands loss.`
    },
    'oil-and-gas': {
        imgs: ['https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2020/05/taylor-energy-leak.jpg',
            'https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/afazphakdcrdscum_1604563264.jpeg?tr=w-758,h-433'],
        para: `Despite their economic and ecological value, 
               Louisiana’s wetlands are being lost at an alarming rate. Over 400 square miles of marshland 
               have been lost to oil and gas activity alone.`
    },
    'farming': {
        imgs: ['https://www.marketplace.org/wp-content/uploads/2017/10/GettyImages-182961849.jpg?fit=740%2C411',
            'https://eco-business.imgix.net/uploads/ebmedia/fileuploads/wp_uploads/2012/03/china_fertiliser-ccafs_cgiar_org.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440'],
        para: `Water pollution caused by nitrogen and phosphorus fertilizers causes the rapid 
               growth of toxic algae. This uncontrolled algae bloom can lead to dangerously low 
               levels of oxygen, or hypoxia, and the spread of a toxin known as cyanobacteria.  
               People exposed to cyanobacteria while swimming or fishing can experience abdominal pain, 
               nausea, vomiting, diarrhea, sore throat, dry cough, headache, blistering of the mouth, 
               and sometimes even liver failure.`
    },
    'shipping': {
        imgs: ['https://static01.nyt.com/images/2019/01/22/science/22SCI-OCEANNOISE1/merlin_149253315_46eb78f1-80fa-44b6-b9ee-d11a48a7f71f-superJumbo.jpg?quality=90&auto=webp',
            'https://storage.googleapis.com/afs-prod/media/media:0ff96073ebda4fd6881413c639eb86f8/800.jpeg'],
        para: `Slow-moving, hulking ships crisscross miles of ocean in a lawn mower pattern, wielding an array of 12 to 48 air guns blasting pressurized air repeatedly into the depths of the ocean.
               Scientists say the noises from air guns, ship sonar and general
               tanker traffic can cause the gradual or even outright death of sea creatures, 
               from the giants to the tiniest — whales, dolphins, fish, squid, octopuses and even plankton. 
               Other effects include impairing animals’ hearing, brain hemorrhaging and the drowning out 
               of communication sounds important for survival, experts say.`
    }
};

const Slide4Component = () => {
    const [landImpact, setLandImpact] = useState('sea-level-rise');
    const buttonSelectedStyle = {
        fontWeight: 'bolder',
        border: '4px dashed #212121',
        background: '#FF4545',
        color: '#212121',
        boxShadow: '5px 5px 0px #fff'
    };
    const imgStyle = {
        width: '200px',
        height: '200px',
        boxShadow: '5px 5px 0px #FF4545'
    };

    const checkForStyle = (str) => {
        return landImpact === str ? buttonSelectedStyle : {};
    };

    return (
        <>
            <Title titleText="Types of Land Impact" slideIndex={3} style={{
                fontSize: '5rem',
                textAlign: 'center',
                textShadow: '4px 4px 0px #FF4545',
                marginTop: '-50px'
            }} />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
            }} className='slide4-parent-div'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40%',
                    height: 'calc(var(--slide-h) * 0.7)',
                    marginTop: '50px',
                    justifyContent: 'space-around'
                }}>
                    <button onClick={() => setLandImpact('sea-level-rise')} style={
                        checkForStyle('sea-level-rise')
                    }>Sea Level Rise</button>
                    <button onClick={() => setLandImpact('oil-and-gas')} style={
                        checkForStyle('oil-and-gas')
                    }>Oil and gas</button>
                    <button onClick={() => setLandImpact('farming')} style={
                        checkForStyle('farming')
                    }>Farming</button>
                    <button onClick={() => setLandImpact('shipping')} style={
                        checkForStyle('shipping')
                    }>Shipping</button>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '50px',
                    width: '50%',
                    height: 'calc(var(--slide-h) * 0.7)'
                }}>
                    <div style={{
                        display: 'grid',
                        width: '60%',
                        height: '50%',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px',
                        marginBottom: '50px'
                    }}>
                        <img className='type-img' style={imgStyle} src={slide4Data[landImpact]['imgs'][0]} />
                        <img className='type-img' style={imgStyle} src={slide4Data[landImpact]['imgs'][1]} />
                    </div>
                    <div >
                        <Para paraText={slide4Data[landImpact]['para']}
                            style={{
                                fontSize: '1.2rem',
                                marginTop: '-50px',
                                opacity: 0.0,
                                transform: 'translateY(100%)',
                                animation: 'img_fade_in 1s ease-in forwards',
                                animationDelay: '0.8s'
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slide4Component;