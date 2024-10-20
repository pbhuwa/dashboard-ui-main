import React from "react";
import {makeStyles} from "@mui/styles";
import "./index.css";

const useStyles = makeStyles(() => ({
	root: {
		height: "100vh",
		width: "100%",
		position: "fixed",
	},
}));

export const Loader = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<div className="loader">
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
				<div className="bar4"></div>
				<div className="bar5"></div>
				<div className="bar6"></div>
			</div>
		</section>
	)
}