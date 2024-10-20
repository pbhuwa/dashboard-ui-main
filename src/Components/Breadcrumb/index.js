import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {makeStyles, useTheme} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(4, 0),
		"@media(min-width: 992px)": {
			marginLeft: "248px",
		},
	},
}));

function handleClick(event) {
	event.preventDefault();
}

export const Breadcrumb = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const breadcrumbs = [
		<Link underline="hover" key="1" color={theme.palette.text.title} fontSize={theme.typography.h5}
		      letterSpacing="0" href="/" onClick={handleClick}>
			Dashboard
		</Link>,
		<Typography key="2" color={theme.palette.text.gray} fontSize={theme.typography.h5} letterSpacing="0">
			{props.breadCrumbTitle ? props.breadCrumbTitle : "Create About"}
		</Typography>,
	];

	return (
		<section className={classes.root}>
			<Stack spacing={2}>
				<Breadcrumbs
					separator={<NavigateNextIcon fontSize="small"/>}
					aria-label="breadcrumb"
				>
					{breadcrumbs}
				</Breadcrumbs>
			</Stack>
		</section>
	);
}
