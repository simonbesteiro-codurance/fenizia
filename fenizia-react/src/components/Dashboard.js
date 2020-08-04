import React from 'react';
import Slider from './Slider';
import Carousel from './Carousel';
import Cover from './Cover';


function Dashboard () {
    return <>
        <Cover/>
        <Carousel/>
        <Slider/>
        <Slider/>
    </>
}

export default Dashboard;