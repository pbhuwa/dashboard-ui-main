import React from "react";
import {Container, Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Testimonial from "../Testimonial";
import ProfileVisit from "../Profile-visit";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .content-block": {
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
				},
			},
		},
	},
}));

const ContentBlock = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<Container className="content-block">
				<Grid container spacing={3}>
					<Grid item lg={8} md={12} sm={12}>
						<Testimonial/>
					</Grid>
					<Grid item lg={4} md={12} sm={12}>
						<ProfileVisit/>
					</Grid>
				</Grid>
			</Container>
		</section>
	)
}

export default ContentBlock;