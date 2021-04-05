import React from "react";
import "./sidebar.scss"

function Sidebar() {
	return(
		<div className="sidebar">
			<ul>
				<li><a href="#home"> Home</a></li>
				<li><a href="#about"> About</a></li>
				<li><a href="#timeline"> Timeline</a></li>
				<li><a href="#projects"> Projects</a></li>
				<li><a href="#contact"> Contact</a></li>
			</ul>
		</div>
	);
}

export default Sidebar;
