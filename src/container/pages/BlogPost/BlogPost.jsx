import React, { Component, Fragment } from 'react';
import Post from '../../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false
    }

    // method mengambil data dari server berupa json/api
    getPostAPI = () => {
        // mengambil data ke server
        axios.get('http://localhost:3000/posts?_sort=id&_order=desc')
            .then((result) => {
                this.setState({
                    post: result.data // mengubah post dengan data yang ada di api
                })
            })
    }

    postDataToApi = () => {
        axios.post('http://localhost:3000/posts', this.state.formBlogPost)
            .then((res) => {
                console.log(res);
                this.getPostAPI();
                this.setState({

                })
            }, (err) => {
                console.log('error:', err);
            })
    }

    putDataToApi = () => {
        axios.put(`http://localhost:3000/posts/${this.state.formBlogPost.id}`,
            this.state.formBlogPost).
            then((result) => {
                this.getPostAPI();
                console.log(result);
                this.setState({
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    },
                })

            })
    }

    // method untuk menghapus data
    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3000/posts/${data}`).then((result) => this.getPostAPI())
        // memanggil fungsi getPost Api setelah fungsi delete berhasil
    }

    // method edit
    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })

    }

    // method menghandle perubahan pada form
    handleFormChange = (event) => {
        // mengclonning data formblogPost di init state atau state awal
        let formBlogPostNew = { ...this.state.formBlogPost };
        // let title = event.target.value;
        let timestamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp; //membuat id dari nilai timestampid
        }
        formBlogPostNew[event.target.name] = event.target.value; // untuk merubah titlenya saja/bersarkan name / merubah secara spesifik contoh disini yaitu objek ke title dengan value baru
        // event.target.name (event = adalah event yang dikirim) (name disni adalah nama yang di inisialisasikan dari input)
        this.setState({
            formBlogPost: formBlogPostNew //value pengganti formBlogPost
        }) // setiap perubahan pada formBlogspot bisa di terima disini

    }

    // method mketika tombol save d klick
    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToApi();
        } else {
            this.postDataToApi();
        }

    }

    // ketika component dipasang
    componentDidMount() {
        this.getPostAPI()
        // komponen dipasang setelah melakukan penghapusan
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }



    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="card mb-5">
                        <div className="card-header">Post</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        onChange={this.handleFormChange}
                                        value={this.state.formBlogPost.title} />
                                </div>
                                <div className="form-group">
                                    <label>Content</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        name="body"
                                        onChange={this.handleFormChange}
                                        value={this.state.formBlogPost.body} />
                                </div>
                                <button
                                    className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <h4>Blog Post</h4>
                    <hr />
                    {
                        //melooping data state yang sudah memiliki data json
                        this.state.post.map(post => {
                            //lalu di return/mengembalikan nilai bersarkan key/name pada objek json

                            // bisa di sederhanakan menjadi 1 props memanggil semua data post keseluruhan
                            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                        })
                    }
                </div>
            </Fragment>
        );
    }
}
export default BlogPost;