import axios from 'axios';
import {useEffect, useState} from 'react';
import btsp from "../images/btsp.jpg";
import rtha from "../images/rtha2.jpg";
import sasp from "../images/sasp2.jpg";
import yewa from "../images/yewa2.jpg";
//btsp 3411, 1919
//rtha 2955, 1662
//sasp 2323, 1307
//yewa 2352 1323

const baseUrl = "http://localhost:5000";
function Gallery(cat){
    const display = new Map([
        ['all', 0],
        ['Birds', 1],
        ['Other_Animals', 2],
        ['Landscape', 3]
    ]);
    //for each event in eventList, has event.id, event.name, etc
    const eventList = [(btsp, 3411, 1919), (rtha, 2955, 1662), (sasp, 2323, 1307), (yewa, 2352, 1323)];

    function calcDims(){
        
    }
    // const fetchEvents = async() => {
    //     const data = await axios.get(baseUrl + '/events');
    //     const {events} = data.data;
    //     eventList = events;
    // }

    // useEffect(() => {
    //     fetchEvents();
    // });//, []
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <h1>Gallery {windowSize.innerWidth} poopoo {windowSize.innerHeight}</h1>
    );
    // Cards for initial gallery view?
    // Pagination, Rows and Cols (how to make smart?) for gallery itself
    // Divide birds into: Waterbirds, Songbirds, Raptors, Other 
    //Later: implement search feature
    // postgre listens on port 5432
}

export default Gallery;