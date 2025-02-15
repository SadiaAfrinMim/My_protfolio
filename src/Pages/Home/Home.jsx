import React from 'react';
import Banner from './Banner';

import Contact from '../../Component/Contact';
import About from '../About/About';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Skill from './Skill/Skill';
import Bgcolor from './Bgcolor';

const Home = () => {
    return (
        <div >
            <div className="w-11/12 mx-auto">
            <Banner></Banner>
            </div>
            <div className='w-full mx-auto'>
            <Bgcolor></Bgcolor>
            </div>
            <div className="w-11/12 mx-auto space-y-8">
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Education></Education>
           
            <Contact></Contact>
            
            </div>
            
        </div>
    );
};

export default Home;