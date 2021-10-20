//import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import {
    Link
} from "react-router-dom";
import './Home.css';
import MainCard from './MainCard';
import Share from './Share';


function Home(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const posts = props.posts;
    const baseMedia = props.mediaLink;

    const features = Object.keys(posts).slice(Object.keys(posts).length - 2, Object.keys(posts).length)



    return (
        posts === "Null" ? (<div className="load"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>) :
            (
                <>
                    <MainCard features={features} data={posts} />
                    <center><p className="blogNo"></p></center>
                    <p className="recentBlogTitle">Recent Blogs ({props.no})</p>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", flexDirection: "row" }}>
                        {Object.keys(posts).reverse().map((val, key) => {
                            return (

                                <div className="movie_card" id="bright" key={key}>
                                    <div className="info_section">
                                        <div className="movie_header">
                                            <Link to={"/visuals/blog/" + posts[val]._id+"/show"} style={{ textDecoration: "none" }}><img className="locandina" src={baseMedia + posts[val].photo} alt="blog-post" /></Link>
                                            <Link to={"/visuals/blog/" + posts[val]._id+"/show"} style={{ textDecoration: "none" }}><h3>{posts[val].title}</h3></Link>
                                            <h5>{'( ' + new Date(posts[val].updatedAt).toLocaleDateString() + ' )'}</h5>
                                            <span className="minutes">{posts[val].desc.split(" ").length === 0 ? 'calculating...' : posts[val].desc.split(" ").length + " words"}</span>
                                            <p className="type">Photo Appreciation</p>
                                        </div>
                                        <Link to={"/visuals/blog/" + posts[val]._id+"/show"} style={{ textDecoration: "none" }}><div className="movie_desc">
                                            <p className="text">
                                                {posts[val].desc}
                                            </p>
                                        </div></Link>
                                        <div className="movie_social">
                                            <ul>
                                                <li><i className="material-icons" onClick={handleShow}>share</i></li>
                                                <li><i className="material-icons"></i>{' '}<span className="like"><b>{posts[val].likes.length + ' likes'}</b></span></li>
                                                {/*<li><i className="material-icons">chat_bubble</i></li>*/}
                                            </ul>
                                        </div>
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
                                    </div>
                                    <div className="blur_back" style={{ backgroundImage: `url(${baseMedia + posts[val].photo})` }}></div>
                                </div>
                            )
                        })}
                    </div>
                </>
            )

    );
}

export default Home;