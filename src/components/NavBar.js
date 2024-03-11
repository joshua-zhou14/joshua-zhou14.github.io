
// import 'bootstrap/dist/css/bootstrap.css';
// import {useState} from "react";

// function NavBar(){
//     const navbar_options = [
//         'Home', 'Gallery', 'About'
//     ]
//     const [curr, setCurr] = useState(0);
//     function setHref(item){
//         if(item === 'Home')
//             return "/";
//         return "/" + item;
//     }
//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//             <a className="navbar-brand text-wrap" style={{width:200, fontsize:8}}>Josh Z. Photography</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 {/* <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Dropdown
//                 </a>
//                 <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="#">Action</a></li>
//                     <li><a className="dropdown-item" href="#">Another action</a></li>
//                     <li><hr className="dropdown-divider"></hr></li>
//                     <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//                 </li>
//                 <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//                 </li> */}
//                 {navbar_options.map((item, index) => <li className="nav-item" aria-current="page" key={item} style={{width:100}}><a className={curr === index ? "nav-link active" : "nav-link"} OnClick = {()=>{setCurr(index)}} href={setHref(item)}>{item}</a></li>)}
//             </ul>
//             <form className="d-flex" role="search">
//                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//                 <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//             </div>
//         </div>
//         </nav>
//     );
// }

// export default NavBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    const navbar_options = ['Home', 'About'];
    const dropdown_ops = ['Birds', 'Other Animals', 'Landscape']
    function setHRef(index){
        if(navbar_options[index] === 'Home'){
            return "#/";
        }
        return "#/" + navbar_options[index];
    }
    function setDropHRef(index){
        const str = dropdown_ops[index].split(" ");
        if(str.length > 1){
            let ret = "";
            for(let i = 0; i < str.length-1; i++){
                ret += str[i] + "_";
            }
            ret += str[str.length-1];
            return "#/Gallery/" + ret;
        }
        return "#/Gallery/" + dropdown_ops[index];
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:"white"}}>
            <Container>
                <Navbar.Brand style={{width:250}}>Joshua Zhou Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {navbar_options.map((item, index) => <Nav.Link href={setHRef(index)}>{item}</Nav.Link>)}
                    <NavDropdown title="Gallery" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#/Gallery">
                        All Photos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    {dropdown_ops.map((item, index)=><NavDropdown.Item key={item} href={setDropHRef(index)}>{item}</NavDropdown.Item>)}
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
         {/* <Outlet/> */}
        </>
    );
}

export default NavBar;