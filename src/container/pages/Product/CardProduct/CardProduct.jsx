import React, { Component, Fragment } from 'react';

class CardProduct extends Component {
    state = {
        order: 4,
    }

    // fungsi/method ketika counter berubah akan meng execute props di Componen CardProduct yang di panggil di Product
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue) //memanggil props di componen CardProduct yang di panggil di Product
        // sehingga onCounterChange disini akan menerima data dari handlePlus dan datanya akan dikirimkan ke props di komponent CardProduct yang di panggil Product

        // dan new value itu yang akan mengupdate order di Product

        // kemudian ditangkap di method disini
    }

    // ketika plus di execute maka panggil method handleCounterChange
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => { this.handleCounterChange(this.state.order) }) //handleCounterChange akan mengirimi value state terbaru
        this.handleCounterChange();
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => { this.handleCounterChange(this.state.order) })
            this.handleCounterChange()
        } else {
            alert('tidak bisa minus');
        }
    }

    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Ayam Goreng</h5>
                <p className="card-text">Rp. 15000</p>
                <div className="input-group">
                    <div className="input-group-append">
                        <button className="btn btn-warning minus" onClick={this.handleMinus}>-</button>
                    </div>
                    <input type="text" name="" id="" className="form-control text-center" value={this.state.order} />
                    <div className="input-group-append">
                        <button className="btn btn-primary plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardProduct;