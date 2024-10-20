import React from "react";
import {makeStyles, useTheme} from "@mui/styles";
import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(10),
		"& .stats": {
			"& .MuiGrid-root": {
				"& .MuiGrid-item": {
					width: "100%",
					"&:nth-child(2)":{
						"& .MuiPaper-root": {
							"& .icon-holder":{
								background: theme.palette.primary.main,
								boxShadow: theme.shadows[2],
							},
						},
					},
					"&:nth-child(3)":{
						"& .MuiPaper-root": {
							"& .icon-holder":{
								background: "#00b4d8",
								boxShadow: "10px 10px 10px #00b4d875",
							},
						},
					},
					"&:last-child":{
						"& .MuiPaper-root": {
							"& .icon-holder":{
								background: "#fb8500",
								boxShadow: "10px 10px 10px #fb850075",
							},
						},
					},
					"& .MuiPaper-root": {
						boxShadow: theme.shadows[5],
						borderRadius: "15px",
						minWidth: "unset",
						"& .icon-holder": {
							background: theme.palette.secondary.main,
							boxShadow: theme.shadows[3],
							height: "40px",
							width: "40px",
							borderRadius: "10px",
							display: "grid",
							placeItems: "center",
							color: "#fff",
							"& .MuiSvgIcon-root": {
								fontSize: "20px",
							},
						},
					},
				},
			},
		},
	},
}));

const stats = [
	{
		title: "Average Rating",
		value: "18,899",
		percentage: "-84%",
		icon: <StarsOutlinedIcon />,
	},
	{
		title: "Average Rating",
		value: "18,899",
		percentage: "-84%",
		icon: <ThumbsUpDownOutlinedIcon />
	},
	{
		title: "Average Rating",
		value: "18,899",
		percentage: "-84%",
		icon: <TouchAppOutlinedIcon />
	},
	{
		title: "Average Rating",
		value: "18,899",
		percentage: "84%",
		icon: <GroupOutlinedIcon />
	},
];

const Stats = () => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<section className={classes.root}>
			<Container className="stats">
				<Grid container spacing={3}>
					{
						stats.map((item, i) => {
							const percentageArr = item?.percentage?.split("%");
							const isPercentagePositive = percentageArr && Number(percentageArr[0]) > 0;
							return (
								<Grid item lg={3} md={12} sm={12} key={i + "__"}>
									<Card>
										<CardContent sx={{pb: "16px !important"}}>
											<Typography component="div" className="icon-holder" mb={2}>
												{item.icon}
											</Typography>
											<Typography sx={{fontSize: 18}} color={theme.palette.primary.main}
											            fontWeight="bold" mb={1}>
												{item.value}
											</Typography>
											<Typography component="div" className="content-holder" display="flex"
											            alignItems="center" justifyContent="space-between">
												<Typography sx={{fontSize: 16}} color={theme.palette.text.gray}>
													{item.title}
												</Typography>
												<Typography
													color={isPercentagePositive ? theme.palette.success.main : theme.palette.error.main}
													fontSize={16}>
													{item.percentage}
												</Typography>
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							)
						})
					}
				</Grid>
			</Container>
		</section>
	)
}

export default Stats;