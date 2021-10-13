import '../App.css';
import {
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

/*import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';*/




function Topbar() {

    const [background, setBackground] = useState("transparent");
    const [opacity, setOpacity] = useState("1");
    const [color, setColor] = useState("rgb(77, 69, 194)");
    //const [searchKey, setSearchKey] = useState('');

    //console.log(searchKey);

    /*const handleSearch = () => {

    }*/

    /*document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
              document.getElementById('navbar_top').classList.add('fixed-top');
              // add padding top to show content behind navbar
              const navbar_height = document.querySelector('.navbar').offsetHeight;
              document.body.style.paddingTop = navbar_height + 'px';
            } else {
              document.getElementById('navbar_top').classList.remove('fixed-top');
               // remove padding top from body
              document.body.style.paddingTop = '0';
            } 
        });
      }); */

    useState(() => {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "transparent" : "#eee";

            const color = window.scrollY < 100 ? "rgb(77, 69, 194)" : "rgb(77, 69, 194)";

            const opacity = window.scrollY < 100 ? "1.2" : "0.9";

            setBackground(backgroundcolor);
            setColor(color);
            setOpacity(opacity);

        });
    }, [])

    return (
        <div className="top">
            <Navbar expand="lg" variant="light" id="navbar_top" className="navbar" fixed="top" style={{ background: background, opacity: opacity }}>
                <Container>
                    <Navbar.Brand style={{ color: color }} className="logo"><b>Visuals | Photo Blog</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <span style={{ color: color }}><Link to="/visuals" className="link"><b>HOME</b></Link></span>
                        </Nav>

                        {/*<Form className="d-flex" onSubmit={handleSearch}>
                            <FormControl
                                type="search"
                                placeholder="Search Here...."
                                className="mr-2"
                                aria-label="Search"
                                value={searchKey}
                                onChange={e=>setSearchKey(e.target.value)}
                            />
                            <Button variant="outline-success" type="submit">Search</Button>
    </Form>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Topbar;