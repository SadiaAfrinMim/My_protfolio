import React from 'react';
import Banner from './Banner';

import Contact from '../../Component/Contact';
import About from '../About/About';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div className="w-11/12 mx-auto space-y-8">
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Education></Education>
           
            <Contact></Contact>
            
        </div>
    );
};

export default Home;