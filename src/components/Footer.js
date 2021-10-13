import '../App.css';
/*import {
    Link
} from "react-router-dom";*/
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';



function Footer() {



    return (
        <>
            <Navbar className="footer">
                <Container className="foot">
                    <div>
                        <ul className="footDisplay">
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Services</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="footDisplaycopyright">
                            <li>Copyright@2021 Visuals<br/> by Debkanta Mondal , All Copyrights Reserved</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="icon fa fa-facebook"></li>
                            <li className="icon fa fa-twitter"></li>
                            <li className="icon fa fa-youtube"></li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Footer;