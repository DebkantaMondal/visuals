/*import { useLocation } from 'react-router';*/
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

import '../App.css';
/*import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    PinterestShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,

    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    PinterestIcon,
    EmailIcon,
    InstapaperIcon,
    LinkedinShareButton,
    TelegramIcon,
} from "react-share";*/
import Share from './Share';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Single() {

    //const path = useLocation();

    //const base = "https://debkantamondal.me/visuals/#";

    //console.log(base + path.pathname)

    const { id } = useParams();

    const [show, setShow] = useState(false);

   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [data, setData] = useState({});
    const [pic, setPic] = useState("https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main/undefined");
    const [descArrange, setDescArrange] = useState([]);

    //Image Setup
    const [sVisible, setSVisible] = useState("none");
    const [position, setPosition] = useState("");
    const [margin, setMargin] = useState("68%");
    const [width, setWidth] = useState("30%");


    useEffect(() => {
        const axiosSinglePostData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_BACKEND_URI}/posts/${id}`);
            setData(response.data);
            setPic(`${process.env.REACT_APP_IMAGE_STORAGE_BASE_URI}/${data.photo}`);
            setWordDesc(response.data.desc.split(" ").length);
            setWordTitle(response.data.title.split(" ").length);
            setReadTime(((response.data.desc.split(" ").length + response.data.title.split(" ").length) / 250).toFixed(4));
            setDescArrange(response.data.desc.split(":"));
        }



        const shortImageSetup = () => {
            document.addEventListener("scroll", () => {
                const val = window.scrollY < 200 ? "none" : "block";
                const val1 = window.scrollY > 950 ? "0%" : "68%";
                const val2 = window.scrollY > 950 ? "100%" : "30%";
                setMargin(val1);
                setWidth(val2);
                setPosition("sticky");
                setSVisible(val);
            })
        }
        axiosSinglePostData();
        shortImageSetup();
    }, [id, data.photo]);


    //Textutils
    const [wordDesc, setWordDesc] = useState(0);
    const [wordTitle, setWordTitle] = useState(0);
    const [readTime, setReadTime] = useState(0);

    const [bookmark, setBookmark] = useState("");


    const handleFIncrease = () => {
        document.getElementById("title").style.fontSize = "x-large";
        document.getElementById("desc").style.fontSize = "x-large";
        document.getElementById("title").style.fontWeight = "bold";
    }
    const handleFDecrease = () => {
        document.getElementById("title").style.fontSize = "medium";
        document.getElementById("desc").style.fontSize = "medium";
        document.getElementById("title").style.fontWeight = "bold";
    }
    const handleFDefault = () => {
        document.getElementById("title").style.fontSize = "large";
        document.getElementById("title").style.fontWeight = "bold";
        document.getElementById("desc").style.fontSize = "large";
        document.getElementById("desc").style.lineHeight = "normal";
    }
    const handleFLine = () => {
        //document.getElementById("title").style.fontSize = "large";
        document.getElementById("desc").style.lineHeight = 3;
    }


    const handleBookMark = () => {

        if (bookmark === "") { setBookmark("Save To Bookmark Feature is Not Activated Yet...It is Activate Very Soon...."); }
        else { setBookmark("") }


    }

    //console.log(vBookmark);

    return (
        pic === "https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main/undefined" ? (<div className="load" style={{ marginTop: "4.5rem" }}><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>) : (
            <div>
                <>
                    <Card style={{ border: "0px" }}>
                        <LazyLoadImage variant="top" src={pic} style={{ width: "100%", height: "450px", marginTop: "4.4rem" }} effect="blur" alt="banner" />

                        <Card.Footer className="singleInfo">
                            Words in Title : {wordTitle === 0 ? "calculating..." : wordTitle}   |
                            Words in Blog : {wordDesc === 0 ? "calculating..." : wordDesc}    |
                            Approx. Reading Time : {readTime === 0 ? "calculating..." : readTime + " mnts"}   |
                            Help Tools :  {' '}
                            <button className="button btn-2" onClick={handleFIncrease}>Font Increase</button>{' '}
                            <button className="button btn-2" onClick={handleFDecrease}>Font Decrease</button>{' '}
                            <button className="button btn-2" onClick={handleFDefault}>Font Default</button>{' '}
                            <button className="button btn-2" onClick={handleFLine}>Line Spacing</button>
                        </Card.Footer>
                        <Card.Footer className="text-muted" style={{ display: "flex", justifyContent: "center", color: "#182330", fontWeight: "bolder" }}>
                            <div>
                                
                                <span style={{marginRight: "2rem", cursor: "pointer"}} onClick={handleShow}><i className="material-icons">share</i>{' '}Share</span>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Share Through</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Share />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            
                                <span style={{marginRight: "2rem"}}><i className="material-icons"></i>{' '}Like Me</span>
                                <span style={{marginRight: "2rem"}}><i onClick={handleBookMark} className="material-icons">bookmarks</i>{' '}Read Later</span>
                                
                            </div>

                        </Card.Footer>
                        <Card.Footer className="text-muted" style={{ display: "visible" }} >{bookmark === "" ? (<span></span>) : (<Alert className="alert alert-danger"><center>{bookmark}</center></Alert>)}</Card.Footer>
                        <Card.Body style={{ color: "#182330" }}>
                            <Card.Title id="title" className="singleTitle"><h3><center>{data.title}</center></h3></Card.Title>
                            <Card.Text id="desc">
                                {descArrange.map((val, key) => {

                                    const x = key % 2 === 0 ? (<p><b>{val + " :"}</b></p>) : (<p>{val}</p>);
                                    return x;

                                })}
                            </Card.Text>
                            <img src={pic} className="shortImage" style={{ width: width, marginLeft: margin, display: sVisible, position: position }} alt="blog" />
                        </Card.Body>
                        <div style={{ color: "#182330", fontWeight: "bolder" }}>
                            <Card.Footer className="text-muted"><center>{"Blog Author : " + data.username + "    |     Last Updated At : " + new Date(data.updatedAt).toDateString()}</center></Card.Footer>
                        </div>
                    </Card>
                </>
            </div>)
    );
}

export default Single;