import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';

class Product extends Component {
	state = {
		order: 4,
	}

	// fungsi untuk mengupadte state order
	handleCounterChange = (newValue) => {
		this.setState({
			order: newValue //new value disini mengirimkan nilai dari cardProduct ke )roduct melalui newValue, newValue adalah value yang diterima dari komponen CardProduct 
		})
	}

	render() {
		return (
			<Fragment>
				<div className="container mb-5">
					<div className="card">
						<div className="card-header"> Header
					<div className="row">
								<div className="col-md-">
									<svg width="1em" height="1em" viewBox="0 0 16 16" className="ml-2 bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
									</svg>
								</div>
								<div className="col-md">
									<div className="count">{this.state.order}</div>
								</div>
							</div>
						</div>
						<img src="" alt="" className="card-img-top" />

						{/* memanggil child komponent yang cardProduct */}
						{/* onCounterChange adalah props */}
						<CardProduct onCounterChange={(value) => this.handleCounterChange(value)} /> {/* memanggil fungsi this.handleCounter untuk mengirimkan value*/}
						{/* {(value)} adalah nilai yang dierima dari function handleCounterChange yang memanggil onCounterChange pada CardProduct dan value itu dikirimkan ke handleCounterChange di Product ini dan this.handleCounterChange(value) value itu dikirmkan ke method handleCounterChange di komponen Product yang namanya diubah menjadi newValue*/}

					</div>
				</div>
			</Fragment>
		)
	}
}

export default Product;