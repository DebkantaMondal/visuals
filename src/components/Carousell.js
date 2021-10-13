import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Carousell(props) {

    //console.log(props.baseMedia)

    const image1 = props.baseMedia+"16324066873693.jpeg";
    const image2 = props.baseMedia+"16324067278571.jpeg";

    return (
    props.baseMedia.length<=0 ? (<div className="load"><div className="lds-facebook"><div></div><div></div><div></div></div></div>):(
    <div>
        <Carousel fade={true} pause={false} variant="primary">
            <Carousel.Item interval={2000}>
                <LazyLoadImage
                    className="d-block w-100"
                    style={{width: "100%", height: "20rem", borderRadius: "15px"}}
                    src={image1}
                    alt="First slide"
                    effect="blur"
                    width="100%"
                />
                <Carousel.Caption>
                    <h3>Welcome To Visuals</h3>
                    <p>This is My Photo Appreciation Blogs</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <LazyLoadImage
                    className="d-block w-100"
                    style={{width: "100%", height: "20rem", borderRadius: "15px"}}
                    src={image2}
                    alt="Third slide"
                    effect="blur"
                    width="100%"
                />
                <Carousel.Caption>
                    <h3>Read My Blogs & Stay with Me</h3>
                    <p>Blogs by Debkanta Mondal</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>));
}

export default Carousell;