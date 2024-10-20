import React from "react";
import {makeStyles, useTheme} from "@mui/styles";
import {Link, NavLink} from "react-router-dom";
import {Box, Divider, Typography} from "@mui/material";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Image from "Assets/Images/logo-2.png";
import {SubMenu} from "./Sub-menu";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		left: 0,
		top: 0,
		bottom: 0,
		height: "100%",
		width: "100%",
		padding: theme.spacing(3),
		maxWidth: "200px",
		overflowY: "auto",
		'&::-webkit-scrollbar': {
			width: "6px",
		},
		'&::-webkit-scrollbar-track': {
			background: "#f1f1f1",
			borderRadius: "30px",
		},
		'&::-webkit-scrollbar-thumb': {
			background: "#ccc",
			borderRadius: "30px",
		},
		"& .navigation": {
			textAlign: "center",
			"& .navbar-brand": {
				"& a": {
					"& img": {
						maxHeight: "80px",
					},
				},
			},
			"& .menu-list": {
				"& .menu-item": {
					marginBottom: theme.spacing(4),
					"& .item-link": {
						color: theme.palette.text.gray,
						display: "flex",
						alignItems: "center",
						gap: "10px",
						padding: theme.spacing(2, 2),
						cursor: "pointer",
						"& .icon-holder": {
							height: "30px",
							minWidth: "30px",
							display: "grid",
							placeItems: "center",
							boxShadow: theme.shadows[6],
							borderRadius: "8px",
							background: "#fff",
							transition: theme.transitions.easing.easeOut,
							"& .MuiSvgIcon-root": {
								fontSize: theme.typography.h3,
								color: theme.palette.text.gray,
							},
						},
					},
					"& .active": {
						color: theme.palette.text.gray,
						display: "flex",
						alignItems: "center",
						gap: "10px",
						boxShadow: theme.shadows[5],
						borderRadius: "8px",
						padding: theme.spacing(2, 2),
						background: "#fff",
						transition: theme.transitions.easing.easeOut,
						"& .icon-holder": {
							height: "30px",
							width: "30px",
							display: "grid",
							placeItems: "center",
							boxShadow: theme.shadows[6],
							borderRadius: "8px",
							background: "#fff",
							"& .MuiSvgIcon-root": {
								fontSize: theme.typography.h3,
								color: theme.palette.text.gray,
							},
						},
					},
					"& .sub-menu": {
						marginLeft: theme.spacing(8),
						marginTop: theme.spacing(3),
						transition: theme.transitions.easing.easeOut,
						animation: `$slideUp .3s ease-out`,
						"& .sub-menu-item": {
							"&:not(:last-child)":{
								marginBottom: theme.spacing(4),
							},
							"& .sub-menu-item-link": {
								display: "flex",
								alignItems:"center",
								fontSize: "14px",
								color: theme.palette.text.title,
								transition: theme.transitions.easing.easeOut,
								"& .MuiSvgIcon-root":{
									fontSize: "18px",
								},
								"&:hover":{
									color: theme.palette.primary.main,
								},
							},
							"& .sub-menu-active": {
								display: "flex",
								alignItems:"center",
								fontSize: "14px",
								color: theme.palette.primary.main,
								transition: theme.transitions.easing.easeOut,
								"& .MuiSvgIcon-root":{
									fontSize: "18px",
								},
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
	"@keyframes slideUp":{
		from:{
			transform: "translateY(-10px)",
		},
		to:{
			transform: "translate(0)",
		},
	},
}));

const menu = [
	{
		label: "About",
		id: 0,
		slug: "about",
	},
	{
		label: "Slider",
		id: 1,
		slug: "slider",
	},
	{
		label: "Blog",
		id: 2,
		slug: "blog",
	},
	{
		label: "News",
		id: 3,
		slug: "news",
	},
	{
		label: "Event",
		id: 4,
		slug: "event",
	},
	{
		label: "Services",
		id: 5,
		slug: "services",
	},
	{
		label: "Contact",
		id: 6,
		slug: "contact",
	},
];

const iconsMap = new Map([
	['About', <AssignmentOutlinedIcon/>],
	['Slider', <AccountBoxOutlinedIcon/>],
	['Services', <SettingsOutlinedIcon/>],
	['News', <BusinessCenterOutlinedIcon/>],
	['Blog', <NewspaperOutlinedIcon/>],
	['Event', <ContactPhoneOutlinedIcon/>],
	['Contact', <ContactPhoneOutlinedIcon/>],
])
const Sidebar = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<header className={classes.root}>
			<nav className="navigation">
				<Typography component="div" className="navbar-brand">
					<Link to="/">
						<img src={Image} alt="img"/>
					</Link>
				</Typography>
				<Divider sx={{borderColor: theme.palette.text.lightGray, my: 2}}/>
				<ul className="menu-list">
					<li className="menu-item">
						<NavLink to="/" className={({isActive}) =>
							isActive ? 'active' : "item-link"
						}>
							<Box component="div" className="icon-holder">
								<GridViewRoundedIcon/>
							</Box>
							<Typography variant="span">
								Dashboard
							</Typography>
						</NavLink>
					</li>
					{
						menu.map((item, i) => {
							let iconValue = iconsMap.get(item?.label);
							return (
								<SubMenu item={item} iconValue={iconValue} key={i + "__"}/>
							)
						})
					}
				</ul>
			</nav>
		</header>
	)
}

export default Sidebar;