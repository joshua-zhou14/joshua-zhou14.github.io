import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import btsp from "../images/btsp.jpg";
import rtha from "../images/rtha2.jpg";
import sasp from "../images/sasp2.jpg";
import yewa from "../images/yewa2.jpg";
import {useState} from "react";
import CopyRight from "./CopyRight";
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';

function Home(){
    const arr = [btsp, rtha, sasp, yewa];
    // const names = ["Black-throated Sparrow (Amphispiza bilineata)", "Red-tailed Hawk (Buteo jamaicensis)", "Savannah Sparrow (Passerculus sandwichensis)", "Yellow Warbler (Setophaga petechia)"];
    const [curr, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    // TODO: make scalable to smaller screens
    return (
        <>
            <Carousel activeIndex={curr} onSelect={handleSelect}>
            {arr.map((item, index) => <Carousel.Item key={item}>
                <img className = "d-block w-100" src={item} style={{maxHeight:475, minHeight: 350, maxWidth:"100%", objectFit: 'cover'}}/>
            {/* <CarouselCaption>{names[curr]}</CarouselCaption> */}
            </Carousel.Item>)}
            </Carousel>
            <CopyRight />
        </>
    );
}

export default Home;