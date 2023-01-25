import React from "react";
import Image from "../../images/image1.png";
import Hashtag from "../../images/apiTeam.png";
import GraphQL from "../../images/graphQL.png";
import Meter from "../../images/meter.png";
import Media from "../../images/showcase.png";
import Bot from "../../images/botbot.png";

const cardData = [
	{
		img: Hashtag,
		text: "Dedicated API Team",
		desc: "Our team are available for user's questions via our Slack Developer Community and Email",
	},
	{
		img: GraphQL,
		text: "Our API uses Graph QL",
		desc: "No handling server side. Get many API's response in a single request",
	},
	{
		img: Meter,
		text: "Supercharge your workflow",
		desc: "Automate workflows, integrate and analyse data and take Marvel to the next level",
	},
];

const BuildFuture = () => {
	return (
		<>
			<div className="build-future">
				<div className="build-left-side">
					<h1 className="build-future-title">
						Let's build the future of design, now
					</h1>
					<h6 className="build-future-desc">
						Create amazing tools and integrations for 1 million users or
						customise Marvel for your team.
					</h6>
					<div className="mt-3 build-btn">
						<button className="submit-app">Submit your app</button>
						<button className="view-api">View API Docs</button>
					</div>
				</div>
				<div className="build-right-side">
					<img src={Image} alt="illustration" className="build-image" />
				</div>
			</div>

			<div className="experience">
				<div className="experience-header">
					<h1 className="exp-heading">
						Experience the freedom to build features, right away.
					</h1>
					<h6 className="exp-para">
						You can now harness components of our platform and build powerful
						integrations for our 2 million users - or simply just for your team.
					</h6>
				</div>

				<div className="exp-cards">
					{cardData.map((item, index) => (
						<div className="each-card" key={item.text}>
							<img src={item.img} alt={`card-${index}`} className="card-img" />
							<h4 className="card-text">{item.text}</h4>
							<h6 className="card-desc">{item.desc}</h6>
						</div>
					))}
				</div>
			</div>

			<div className="reverse-mobile">
				<div className="showcase-app">
					<div className="showcase-left-side">
						<h1 className="showcase-future-title">
							Showcase your app in our integrations directory
						</h1>
						<h6 className="showcase-future-desc">
							Building something special? We're always looking to work with
							partners who wants to help the world bring their ideas to life.
						</h6>
						<div className="mt-3">
							<button className="become-partner">Become a partner</button>
							<button className="integration-btn">View Integrations</button>
						</div>
					</div>
					<div className="showcase-right-side">
						<img src={Media} alt="illustration" className="showcase-image" />
					</div>
				</div>

				<div className="slack-bot">
					<div className="bot-right-side">
						<img src={Bot} alt="illustration" className="bot-image" />
					</div>

					<div className="bot-left-side">
						<h1 className="showcase-future-title">
							A Slack-bot for creating and managing prototypes
						</h1>
						<h6 className="showcase-future-desc">
							Building something special? We're always looking to work with
							partners who wants to help the world bring their ideas to life.
						</h6>
						<div className="mt-3 slack-bot-btn">
							<button className="become-partner">Become a partner</button>
							<button className="integration-btn">View Integrations</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BuildFuture;
