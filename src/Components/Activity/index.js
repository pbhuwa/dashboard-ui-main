import React from "react";
import {makeStyles, useTheme} from "@mui/styles";
import {Container, Grid, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {
	Chart as ChartJS,
	ArcElement,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import {Bar, Doughnut} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(17),
		"& .activity": {
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
					"& .activity-bg": {
						background: "#fff",
						boxShadow: theme.shadows[5],
						borderRadius: "15px",
						padding: theme.spacing(4),
						height: "100%",
						"& .tab-holder ": {
							width: "100%",
							"& .MuiTabs-root": {
								minHeight: "unset",
								marginTop: theme.spacing(4),
								"& .MuiTabs-scroller": {
									"& .MuiTabs-flexContainer": {
										"& .MuiButtonBase-root": {
											padding: theme.spacing(0),
											minWidth: "unset",
											minHeight: "unset",
											position: "relative",
											paddingLeft: theme.spacing(4),
											color: theme.palette.text.gray,
											"&::before": {
												content: "''",
												position: "absolute",
												left: 0,
												top: "50%",
												transform: "translateY(-50%)",
												border: `1px solid ${theme.palette.text.gray}`,
												height: "15px",
												width: "15px",
												borderRadius: "50%",
											},
											"&::after": {
												content: "''",
												position: "absolute",
												left: "5px",
												top: "50%",
												transform: "translateY(-50%)",
												background: theme.palette.text.gray,
												height: "7px",
												width: "7px",
												borderRadius: "50%",
											},
											"&:not(:last-child)": {
												marginRight: theme.spacing(8),
											},
											"&.Mui-selected": {
												color: theme.palette.primary.main,
												"&::before": {
													border: `1px solid ${theme.palette.primary.main}`,
												},
												"&::after": {
													background: theme.palette.primary.main,
												},
											},
										},
									},
									"& .MuiTabs-indicator": {
										display: "none",
									},
								},
							},
						},
					},
				},
			},
		},
	},
}));

ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function TabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Typography component="div" className="tab-content">{children}</Typography>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Activity = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const theme = useTheme();

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
				labels: {
					// This more specific font property overrides the global property
					font: {
						size: 12
					},
					color: theme.palette.text.gray,
					usePointStyle: true,
				},
			},
			title: {
				display: true,
				padding: {
					top: 10,
					bottom: 30
				},
				font: {
					size: 12
				},
			},
		},
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

	const data = {
		labels,
		datasets: [
			{
				label: 'Client',
				data: labels.map(() => faker.datatype.number({min: 0, max: 900})),
				backgroundColor: theme.palette.primary.main,
				borderRadius: 15,
				borderSkipped: false,
			},
			{
				label: 'Designer',
				data: labels.map(() => faker.datatype.number({min: 0, max: 900})),
				backgroundColor: theme.palette.secondary.main,
				borderRadius: 15,
				borderSkipped: false,
			},
		],
	};

	const doughnutData = {
		labels: ['Mobile', 'Desktop', 'Tablet', 'Others'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					theme.palette.primary.main,
					'#00b4d8',
					'#073b4c',
					'#06d6a0',
					theme.palette.secondary.main,
					'#fb8500',
				],

			},
		],
	};

	return (
		<section className={classes.root}>
			<Container className="activity">
				<Grid container spacing={3}>
					<Grid item lg={8} md={12} sm={12}>
						<Typography component="div" className="activity-bg" display="flex" alignItems="flex-satart"
						            flexDirection="column">
							<Typography variant="h1" className="title" m={0} p={0}
							            sx={{
								            fontWeight: theme.typography.fontWeightSemiBold,
								            color: theme.palette.primary.main,
								            fontSize: theme.typography.h3,
							            }}>
								Activity Chart
							</Typography>
							<Box className="tab-holder">
								<TabPanel value={value} index={0}>
									<Bar options={options} data={data}/>
								</TabPanel>
								<TabPanel value={value} index={1}>
									<Bar options={options} data={data}/>
								</TabPanel>
								<TabPanel value={value} index={2}>
									<Bar options={options} data={data}/>
								</TabPanel>
								<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
									<Tab label="Daily" {...a11yProps(0)} />
									<Tab label="Weekly" {...a11yProps(1)} />
									<Tab label="Monthly" {...a11yProps(2)} />
								</Tabs>
							</Box>
						</Typography>
					</Grid>
					<Grid item lg={4} md={12} sm={12}>
						<Typography component="div" className="activity-bg" display="flex" alignItems="center">
							<Doughnut
								data={doughnutData}
							/>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</section>
	)
}

export default Activity;