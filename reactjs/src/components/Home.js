import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import btsp from "../images/btsp.jpg";
import rtha from "../images/rtha2.jpg";
import sasp from "../images/sasp2.jpg";
import yewa from "../images/yewa2.jpg";
import {useState} from "react";

function Home(){
    const arr = [btsp, rtha, sasp, yewa];
    const [curr, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={curr} onSelect={handleSelect}>
        {arr.map((item, index) => <Carousel.Item key={item}>
            <img className = "d-block w-100" src={item} style={{height:475, width:"100%", objectFit: 'cover'}}/>
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>)}
        </Carousel>
    );
}

export default Home;