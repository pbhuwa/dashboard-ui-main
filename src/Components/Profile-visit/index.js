import React from "react";
import {makeStyles, useTheme} from "@mui/styles";
import {Typography} from "@mui/material";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

const useStyles = makeStyles((theme) => ({
	root: {
		"& .profile-visit": {
			background: "#fff",
			boxShadow: theme.shadows[5],
			borderRadius: "15px",
			padding: theme.spacing(4),
		},
	},
}));

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
const ProfileVisit = () => {
	const classes = useStyles();
	const theme = useTheme();

	 const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
				display: false,
				labels: {
					usePointStyle: true,
				},
			},
			title: {
				display: true,
			},
		},
		scales: {
			y: {
				display: false,
			},
			x: {
				display: false,
			}
		},
	};

	const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

   const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
				borderColor: theme.palette.primary.main,
				backgroundColor: `${theme.palette.primary.main}75`,
			},
		],
	};
	const data2 = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
				borderColor: theme.palette.secondary.main,
				backgroundColor: `${theme.palette.secondary.main}75`,
			},
		],
	};

	return (
		<section className={classes.root}>
			<Typography component="div" className="profile-visit">
				<Typography component="div" className="text-holder" mb={6}>
					<Typography variant="h1" className="title" color={theme.palette.primary.main}
					            fontSize={theme.typography.h3}
					            fontWeight={theme.typography.fontWeightSemiBold}>
						Profile Visit
					</Typography>
				</Typography>
				<Typography component="div" className="profile-visit-country" align="center" mb={6}>
					<Typography variant="h2" className="profile-visit-country-name" color={theme.palette.text.title}
					            fontSize={theme.typography.h4}>
						Asia
					</Typography>
					<Line options={options} data={data} />
				</Typography>
				<Typography component="div" className="profile-visit-country" align="center">
					<Typography variant="h2" className="profile-visit-country-name" color={theme.palette.text.title}
					            fontSize={theme.typography.h4}>
						Europe
					</Typography>
					<Line options={options} data={data2} />
				</Typography>
			</Typography>
		</section>
	)
}

export default ProfileVisit;