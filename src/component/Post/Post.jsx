import React, { Fragment } from 'react';
import './Post.css'
const Post = (props) => {
    return (
        <Fragment>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://images3.alphacoders.com/221/thumb-1920-221297.png" alt="" className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {/* memanggil props yang berisi data json dengan name id dan ditampilkan */}
                            {/* <p className="card-text">{props.data.id}</p> */}
                            {/* memanggil props data.yang berisi data pada json dengan name title dan ditampilkan */}
                            <a href="" className="card-link">
                                <h5 className="card-title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</h5>
                                {/* memanggil props data.yang berisi data pada json dengan name body dan ditampilkan */}
                            </a>
                            <p className="id-text">
                                {props.data.body}
                            </p>
                            {/* memanggil props remove dan menerima parameter data json/api berdasarkan id */}
                            <button className="btn btn-danger" onClick={() => { props.remove(props.data.id) }} >Remove</button>
                            <button className="btn btn-warning ml-2 text-white" onClick={() => { props.update(props.data) }} >Update</button>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Post;