import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  /*BrowserRouter as Router,*/
  Switch,
  Route,
  HashRouter
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


  const BaseMedia = `${process.env.REACT_APP_IMAGE_STORAGE_BASE_URI}/`;

  

  useEffect(() => {
    const axiosPostData = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_BACKEND_URI}/posts`);
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

      <HashRouter basename="/">
        <Topbar />
        {/*<Dev />*/}
        <Switch>
          <Route path="/" exact>
            {/*<MainCard baseMedia={BaseMedia} />*/}
            <Home posts={currentPosts} mediaLink={BaseMedia} no={noOfBlog} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={postDataSet.length}
              paginate={paginate}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/blog/:id/show" exact>
            <Single />
          </Route>

          <Route path="/viewer/register">
            <Register />
          </Route>
          <Route path="/viewer/login">
            <Login />
          </Route>

        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}


export default App;
