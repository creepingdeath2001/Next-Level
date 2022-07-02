import React ,{useState} from 'react';

import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjTwo } from '../components/infoSection/Data';

const Home = () => {


const[isOpen,setIsOpen] =useState(false)

//function to update state
const toggle =() =>{

    setIsOpen(!isOpen)
};

    return (
    <>

     
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection{...homeObjOne}/>

 

     </>
    
    );
};

export default Home;
