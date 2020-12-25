import React, { Component, Fragment } from 'react';
import YoutubeComponent from '../../../component/YoutubeComponent/YoutubeComponent';



class YoutubeComponentPage extends Component {
    render() {
        return (
            <Fragment>
                {/* <div className="container"> */}
                <YoutubeComponent
                    time="7.12"
                    title="tutorial react"
                    desc="berisi tutorial react js" />
                <YoutubeComponent
                    time="7.13"
                    title="tutorial laravel"
                    desc="berisi tutorial laravel" />
                <YoutubeComponent
                    time="7.12"
                    title="tutorial react"
                    desc="berisi tutorial flutter" />
                <YoutubeComponent
                    time="7.12"
                    title="tutorial react"
                    desc="berisi tutorial flutter" />
                {/* </div> */}
            </Fragment>
        );
    }
}


export default YoutubeComponentPage;