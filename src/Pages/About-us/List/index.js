import React from "react";
import {makeStyles} from "@mui/styles";
import {Button, Container, Grid, Typography} from "@mui/material";
import {Breadcrumb} from "../../../Components/Breadcrumb";
import {Link} from "react-router-dom";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ListTable from "./Table";

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(10),
		"& .about-us-list-page": {
			"& .about-bg": {
				background: "#fff",
				borderRadius: "15px",
				boxShadow: theme.shadows[5],
				padding: theme.spacing(6, 0),
				"& .MuiGrid-root": {
					"& .MuiGrid-item": {
						"& .search-bar": {
							position: "relative",
							"& .MuiFormControl-root": {
								"& .MuiInputBase-root": {
									borderRadius: "8px",
									fontFamily: "unset",
									"&.Mui-focused": {
										"& .MuiOutlinedInput-notchedOutline": {
											borderColor: theme.palette.primary.main,
											borderWidth: "1px",
										},
									},
									"& .MuiInputBase-input": {
										height: "15px",
										paddingRight: "35px",
									},
									"& .MuiOutlinedInput-notchedOutline": {
										borderColor: theme.palette.text.lightGray,
									},
								},
							},
							"& .search-icon": {
								"& .MuiSvgIcon-root": {
									position: "absolute",
									right: "10px",
									top: "50%",
									transform: "translateY(-50%)",
									color: theme.palette.text.gray,
								},
							},
						},
						"& .add-btn": {
							background: theme.palette.text.success,
							boxShadow: theme.shadows[8],
							borderRadius: "8px",
							padding: theme.spacing("8px", 3),
							textTransform: "capitalize",
							minWidth: "120px",
							fontSize: theme.typography.h4,
							transition: theme.transitions.easing.easeOut,
							height: "48px",
							"&:last-child": {
								background: theme.palette.text.filter,
								boxShadow: theme.shadows[9],
							},
							"& .MuiSvgIcon-root": {
								fontSize: theme.typography.h2,
							},
							"&:hover": {
								background: theme.palette.primary.main,
								boxShadow: theme.shadows[2],
							},
						},
					},
				},
			},
		},
		"@media(min-width: 992px)": {
			marginLeft: "224px",
		},
	},
}));
const AboutUsListPage = () => {
	const classes = useStyles();

	return (
		<>
			<Breadcrumb breadCrumbTitle="About List"/>
			<section className={classes.root}>
				<Container className="about-us-list-page">
					<Typography component="div" className="about-bg">
						<Grid container spacing={3} justifyContent="space-between" mb={5} sx={{padding: "0px 30px"}}>
							<Grid item lg={4} md={12} sm={12}>
								<Typography component="div" className="search-bar">
									<Box
										component="form"
										noValidate
										autoComplete="off"
									>
										<TextField
											placeholder="Somethings search here..."
											type="search"
											name="search"
											fullWidth/>
										<Typography component="div" className="search-icon">
											<SearchRoundedIcon/>
										</Typography>
									</Box>
								</Typography>
							</Grid>
							<Grid item lg={6} md={12} sm={12} sx={{
								textAlign: "right",
							}}>
								<Button variant="contained" component={Link} to="/create" className="add-btn"
								        sx={{mr: 2}}>
									<AddRoundedIcon/> Add New
								</Button>
								<Button variant="contained" component={Link} to="/create" className="add-btn">
									<FilterListRoundedIcon/> Filter
								</Button>
							</Grid>
						</Grid>
						<ListTable/>
					</Typography>
				</Container>
			</section>
		</>
	)
}

export default AboutUsListPage;