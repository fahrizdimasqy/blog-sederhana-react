import React, { Component } from 'react';

const YoutubeComponent = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="card-deck mb-3">
						<div className="card">
							<img src="" alt="" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{props.title}</h5>
								<p className="card-text">{props.desc}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

YoutubeComponent.defaultProps = {
	title: 'title',
	desc: 'desc',
}

export default YoutubeComponent;