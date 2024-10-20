import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export const SubMenu = ({item, iconValue}) => {
	const [show, toggleShow] = useState(false);
	return (
		<li className="menu-item" onClick={() => toggleShow(!show)}>
			<Typography component="div" className="item-link" display="flex" alignItems="center"
			            justifyContent="space-between">
				<Typography component="div" className="divider" display="flex" alignItems="center" gap={1}>
					<Box component="div" className="icon-holder" lineHeight="0">
						{iconValue}
					</Box>
					<Typography variant="span">
						{item.label}
					</Typography>
				</Typography>
				<ExpandMoreRoundedIcon/>
			</Typography>
			{
				show && (
					<ul className="sub-menu">
						<li className="sub-menu-item">
							<NavLink to={`/create`} className={({isActive}) =>
								isActive ? 'sub-menu-active' : "sub-menu-item-link"
							}>
								<AddRoundedIcon sx={{mr: 1}}/> Create
							</NavLink>
						</li>
						<li className="sub-menu-item">
							<NavLink to={`/list`} className={({isActive}) =>
								isActive ? 'sub-menu-active' : "sub-menu-item-link"
							}>
								<FormatListBulletedRoundedIcon sx={{mr: 1}}/> List
							</NavLink>
						</li>
					</ul>
				)
			}
		</li>
	)
}