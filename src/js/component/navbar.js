import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<button type="button" className="btn btn-light mx-5">Contact list</button>
			</Link>
			<div className="ml-auto">
				<Link to="/new-contact">
					<button className="btn btn-success mx-5">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
