import React from "react";
import Image from "../../images/image1.png";

const BuildFuture = () => {
	return (
		<div className="build-future">
			<div className="build-left-side">
				<h1 className="build-future-title">
					Let's build the future of design, now
				</h1>
				<h6 className="build-future-desc">
					Create amazing tools and integrations for 1 million users or customise
					Marvel for your team.
				</h6>
				<div className="mt-3">
					<button className="submit-app">Submit your app</button>
					<button className="view-api">View API Docs</button>
				</div>
			</div>
			<div className="build-right-side">
				<img src={Image} alt="illustration" className="build-image" />
			</div>
		</div>
	);
};

export default BuildFuture;
