import React, { Component } from 'react';

class LifeCycleComp extends Component {
    constructor(props) { // contructor akan di tampilkan pertama
        super(props);
        this.state = {
            count: 1 // yang pertama tampil di page
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) { // life cycle kedua yang ditampilkan
        console.log('komponen getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount')
        // // untuk mengupdate state
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }

    // arti component ini adalah haruskan komponen ini harus diupdate
    // kalau tidak perlu dia akan memanggil lifeCycle lainya keluar dan 
    shouldComponentUpdate(nextProps, nextState) { // dua parameter ini bisa mencegah componen kita di update
        console.group('shouldComponentUpdate')
        // console.log('shouldComponentUpdate')
        // console.log(nextProps);
        console.log('next state', nextState);
        console.log('this state', this.state)
        console.groupEnd();
        if (nextState.count >= 4) { // ketika count bernilai 4/ lebih besar maka tidak akan d update
            return false
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('komponenDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // method ini akan menjalankan menambah countnya jadi nilai count sebelumnya ditambah count + 1
    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render')
        return (
            <button className="btn btn-primary ml-2" onClick={this.changeCount}>Component Button {this.state.count}</button> //ketika buttonnya diklick maka buttin akan memanggil method yang telah dibuat dengan nama changeCount
        );
    }
}

export default LifeCycleComp;