import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Topbar from './components/Topbar';
//import Bottomnav from './components/Bottomnav';
import Single from './components/Single';
import Faq from './components/Faq';
//import Carousell from './components/Carousell';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
//import MainCard from './components/MainCard';
//import Dev from './components/Dev';
import Register from './components/viewer/Register';
import Login from './components/viewer/Login';


function App() {

  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [noOfBlog, setNoOfBlog] = useState(0);


  const BaseMedia = "https://raw.githubusercontent.com/DebkantaMondal/blog-photo/main/";

  useEffect(() => {
    const axiosPostData = async () => {
      const response = await axios.get("https://my-blog-backend-deb.herokuapp.com/api/posts");
      setPostData(response.data);
      setNoOfBlog(response.data.length);
      //console.log(response.data);
    }
    axiosPostData();
  }, []);

  const postDataSet = postData === undefined ? "Null" : postData;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postDataSet.length === 0 ? "Null" : postDataSet.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  //console.log(postDataSet);


  return (
    <div className="App">

      <Router>
        <Topbar />
        {/*<Dev />*/}
        <Switch>
          <Route path="/visuals" exact>
            {/*<MainCard baseMedia={BaseMedia} />*/}
            <Home posts={currentPosts} mediaLink={BaseMedia} no={noOfBlog} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={postDataSet.length}
              paginate={paginate}
            />
          </Route>
          <Route path="/visuals/about">
            <About />
          </Route>
          <Route path="/visuals/faq">
            <Faq />
          </Route>
          <Route path="/visuals/blog/:id">
            <Single />
          </Route>

          <Route path="/visuals/viewer/register">
            <Register />
          </Route>
          <Route path="/visuals/viewer/login">
            <Login />
          </Route>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
