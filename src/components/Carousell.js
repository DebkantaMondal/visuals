import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Carousell({ features, data }) {

    const BaseMedia = "https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main/";

    return (
        
            <div>
                <Carousel fade={true} pause={false} variant="primary">
                    {
                        features.map((val, key) => {
                            return (
                                <Carousel.Item interval={2000} key={key}>
                                    <LazyLoadImage
                                        className="d-block w-100"
                                        style={{ width: "100%", height: "20rem", borderRadius: "15px" }}
                                        src={BaseMedia+data[val].photo}
                                        alt="First slide"
                                        effect="blur"
                                        width="100%"
                                    />
                                    <Carousel.Caption>
                                        <h3>{data[val].title}</h3>
                                        <p>This is My Photo Appreciation Blogs</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                    {/*<Carousel.Item interval={2000}>
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
    </Carousel.Item>*/}
                </Carousel>
            </div>);
}

export default Carousell;