import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pfp from '../images/pfp.jpg';
import ig from '../images/instagram.png';
import ebird from '../images/ebird.jpg';

function About() {
    //make scalable to smaller screens
    return (
        <>
            <Container style={{marginTop:20, marginBottom:15}} fluid>
            <Row>
                <Col xs={12} md={5} style={{marginBottom:30}}>
                    <br></br>
                    <h5 style={{textAlign: "center"}}>About Me</h5>
                    <br></br>
                    <p style={{fontSize:13, marginLeft:15}}>Hi! My name is Joshua Zhou, an amateur wildlife photographer based in Texas. </p>
                    <p style={{fontSize:13, marginLeft:15}}> Since I picked up my first camera in fall 2019, I have been captivated by the world of photography. My subjects are predominantly birds, but I also occasionally branch out to reptiles, amphibians, mammals, and even landscapes. </p>
                    <p style={{fontSize:13, marginLeft:15}}>I actively share my pictures on ebird as well as instagram, which I have linked below. Also, please check out my ever-growing gallery of my favorite pictures over the years.</p>
                    <br></br>
                    <h5 style={{textAlign:"center"}}>Follow me</h5>
                    <Row>
                        <Col xs={4}/>
                        <Col xs = {2} md={2} className="text-center" >
                            <a href="https://ebird.org/profile/MTc1OTY1Nw/world" target="_blank"><Image src={ebird} style={{borderRadius:7, border:"1px solid gray", width:50, height:50}}></Image></a>
                        </Col>
                        <Col xs = {2} md={2} className="text-center">
                            <a href="https://www.instagram.com/josh.z.photos/" target="_blank"><Image src={ig} style={{borderRadius:7, width:50, height:50}}></Image></a>
                        </Col>
                        <Col xs={4}/>
                    </Row>
                </Col>
                <Col xs={12} md={7} mx-auto d-block>
                <Image src={pfp} rounded fluid shadow-lg style={{maxHeight:425, width:"100%", objectFit: 'cover', marginBottom: 15}} />
                </Col>
            </Row>
            </Container>
        </>
        
    );
}

export default About;