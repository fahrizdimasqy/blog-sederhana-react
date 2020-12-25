// liblaries
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";

// pages
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import Product from '../pages/Product/Product';
import YoutubeComponentPage from '../pages/YoutubeComponentPage/YoutubeComponentPage';

// styling
import './home.css';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    {/* div disini adalah global component */}
                    <div className="navbar">
                        <li>
                            {/* link to = a */}
                            <Link to="/">BlogPost</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/youtube-component">YoutubeComponent</Link>
                        </li>

                    </div>
                    {/* exact disini untuk mensfesifikasikan bahwa hanya tanda / yang di panggil di root/home */}
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:id" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/youtube-component" component={YoutubeComponentPage} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;
