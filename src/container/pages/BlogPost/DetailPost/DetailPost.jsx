import Axios from 'axios';
import React, { Component } from 'react';
class DetailPost extends Component {

    state = {
        post: {
            title: '',
            body: ''
        }
    }

    // ketika komponen dibuat ambil data dari API
    componentDidMount() {
        let id = this.props.match.params.id;
        // get api menggunakan axios
        Axios.get(`http://localhost:3000/posts/${id}`).then(res => {
            console.log('result', res);
            // hasil dari pemanggilan API
            let post = res.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h2>Detail Post</h2>
                    <hr />
                    <div className="card mb-5">
                        <img
                            src="https://images3.alphacoders.com/221/thumb-1920-221297.png" alt="" className="card-img" width="60" />
                        <div className="card-body">
                            <h4 className="card-heading">{this.state.post.title}</h4>
                            <p className="card-text">{this.state.post.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailPost;