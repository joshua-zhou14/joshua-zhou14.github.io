import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pfp from '../images/pfp.jpg';
import ig from '../images/instagram.png';
import ebird from '../images/ebird.jpg';

function About() {
  return (
    <>
        <Container style={{marginTop:35, marginBottom:15}}>
        <Row>
            <Col xs={6} md={5}>
                <br></br>
                <h5 style={{textAlign: "center"}}>About Me</h5>
                <br></br>
                <p>My name is Joshua Zhou, an amateur wildlife photographer based in Texas. </p>
                <p> Since I picked up my first camera in fall 2019, I have been captivated by the world of photography. My subjects are predominantly birds, but I also occasionally branch out to reptiles, amphibians, mammals, and even landscapes. </p>
                <p>I actively share my pictures on ebird as well as instagram, which I have linked below. Also, please check out my ever-growing gallery of my favorite pictures over the years.</p>
                <br></br>
                <h5 style={{textAlign:"center"}}>Follow me</h5>
                <Row>
                    <Col md={4}></Col>
                    <Col md={2} float-right >
                        <a href="https://ebird.org/profile/MTc1OTY1Nw/world" target="_blank"><Image src={ebird} float-right style={{borderRadius:7, border:"1px solid gray", width:50, height:50}}></Image></a>
                    </Col>
                    <Col md={6} float-left>
                        <a href="https://www.instagram.com/josh.z.photos/" target="_blank"><Image src={ig} float-left style={{borderRadius:7, width:50, height:50}}></Image></a>
                    </Col>
                </Row>
            </Col>
            <Col xs={6} md={7} mx-auto d-block>
            <Image src={pfp} rounded fluid shadow-lg style={{height:450, width:"100%", objectFit: 'cover', marginBottom: 15}} />
            </Col>
        </Row>
        </Container>
    </>
    
  );
}

export default About;