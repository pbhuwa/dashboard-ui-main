import React from "react";
import {makeStyles, useTheme} from "@mui/styles";
import {Link} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		marginBottom: theme.spacing(10),
		"& .header":{
			display: "flex",
			alignItems: "center",
			justifyContent:"space-between",
			"& .navigation": {
				"& .menu-list": {
					"& .menu-item": {
						display: "inline-block",
						"&:not(:last-child)":{
							marginRight: theme.spacing(4),
						},
						"& a": {
							color: theme.palette.text.gray,
							display: "flex",
							alignItems: "center",
							gap: "5px",
							transition: theme.transitions.easing.easeOut,
							"& .MuiSvgIcon-root": {
								fontSize: theme.typography.h3,
							},
							"&:hover":{
								color: theme.palette.primary.main,
							},
						},
					},
				},
			},
		},
		"@media(max-width: 600px)": {
			display: "none",
		},
		"@media(min-width: 768px)": {
			display: "none",
		},
		"@media(min-width: 992px)": {
			display: "block",
		},
	},
}));

const Header = () => {
	const classes = useStyles();
	const theme = useTheme();

	window.onscroll = function () {
		scrollFunction();
	};
	let navStyle = '';
	function scrollFunction() {
		let className = `${classes.root}`;
		if (
			document.body.scrollTop > 90 ||
			document.documentElement.scrollTop > 90
		) {
			navStyle = `{
				padding: 10px !important;
                position: fixed !important; 
                background:  rgba(255, 255, 255, 0.8) !important;
                z-index: 9 !important; 
                top: 0; 
                backdrop-filter: blur(6px) !important;
                left: 248px !important; 
                right: 24px !important; 
                animation: slideIn 2s; 
                transition: transform 1s ease-in-out 0s; 
                animation-timing-function: ease-out;
                animation-duration: .7s;
            }`;
			let keyFrame = `@keyframes slideIn { 
                0% {
                    opacity: 0;
                    top: -30px;
                }
	            100% {
                    opacity: 1;
                    top: 0;
                } 
              }`;

			document.getElementById('nav-style').innerHTML =
				'.' + className + navStyle + keyFrame;
		} else {
			navStyle = `{ 
            }`;
			document.getElementById('nav-style').innerHTML =
				'.' + className + navStyle;
		}
	}

	return (
		<header className={classes.root}>
			<Container className="header">
				<Typography component="div" className="breadcrumb">
					<Typography variant="h3" className="first-breadcrumb" color={theme.palette.text.title} fontSize={theme.typography.h4} mb={2}>
						<Typography variant="span" color={theme.palette.text.gray} fontSize={theme.typography.h4}>Pages</Typography> / Dashboard
					</Typography>
					<Typography variant="h3" className="breadcrumb-title" color={theme.palette.primary.main} fontSize={theme.typography.h3}>
						Dashboard
					</Typography>
				</Typography>
				<Typography component="nav" className="navigation" align="right">
					<ul className="menu-list">
						<li className="menu-item">
							<Link to="#">
								<PersonRoundedIcon/>
								Sign in
							</Link>
						</li>
						<li className="menu-item">
							<Link to="#">
								<SettingsRoundedIcon/>
							</Link>
						</li>
						<li className="menu-item">
							<Link to="#">
								<NotificationsRoundedIcon/>
							</Link>
						</li>
					</ul>
				</Typography>
			</Container>
		</header>
	)
}

export default Header;