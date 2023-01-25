import React from "react";
import Logo from "../../images/logo.svg";
import "./footer.css";

const Footer = () => {
	return (
		<>
			<div className="footer-main">
				<div className="footer-logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="footer-links">
					{footerLinks.map((link) => (
						<div className="all-links">
							<div className="footer-header">{link.text}</div>
							<div className="footer-link">
								{link.links.map((item) => (
									<p className="link-name">{item}</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="footer-dot">.</div>
		</>
	);
};

export default Footer;

export const footerLinks = [
	{
		text: "Overview",
		links: [
			"Why Marvel",
			"Enterprise",
			"Pricing",
			"Request a demo",
			"Explore",
			"Apps",
			"Developer API",
		],
	},
	{
		text: "Features",
		links: [
			"Wireframing",
			"Design",
			"Prototyping",
			"Collaboration",
			"Handoff",
			"Integrations",
			"Sketch Plugin",
		],
	},
	{
		text: "Support",
		links: ["Hel Centre", "Terms of Service", "Privacy", "Security"],
	},
	{
		text: "Marvel",
		links: [
			"Blog",
			"Our Team",
			"Contact Us",
			"Success Stories",
			"Brand Guidelines",
		],
	},
	{
		text: "Follow",
		links: ["Twitter", "Dribble", "Facebook", "Github", "Workable"],
	},
];
