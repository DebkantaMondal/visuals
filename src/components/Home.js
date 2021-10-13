import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import {
    Link
} from "react-router-dom";
import '../App.css';


function Home(props) {


    const posts = props.posts;
    const baseMedia = props.mediaLink;


    return (
        posts === "Null" ? (<div className="load"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>) :
            (
                <>

                    <center><p className="blogNo"></p></center>
                    <p className="recentBlogTitle">Recent Blogs ({props.no})</p>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", flexDirection: "row" }}>
                        {Object.keys(posts).reverse().map((val, key) => {
                            return (
                                <Card className="homeCard" key={key}>
                                    {posts[val].photo === "" ? (<Card.Img variant="top" src={baseMedia + "person/noAvatar.png"} className="homeCardPhoto" />) : <div><Card.Img variant="top" src={baseMedia + posts[val].photo} className="homeCardPhoto" /></div>}
                                    <Card.Body>
                                        <div className="titleWrapper"></div>

                                        <Link to={"/visuals/blog/" + posts[val]._id} className="link" ><Card.Title className="homeCardTitle">{posts[val].title}</Card.Title></Link>


                                        {/*<Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>*/}
                                    <Link to={"/visuals/blog/" + posts[val]._id} className="link"><Button className="btn-grad">Read Full Blog</Button></Link>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </>
            )

    );
}

export default Home;