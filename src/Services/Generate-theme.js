import {createTheme} from "@mui/material/styles";

const generateTheme = (theme, modeName) => createTheme({
	palette: {
		primary: {
			main: "#f72585",
		},
		secondary: {
			main: "#7209b7",
		},
		ternary: {
			main: "#3a0ca3",
		},
		text: {
			light: "#fff",
			title: "#000814",
			subTitle: "#adb5bd",
			gray: "#898989",
			lightGray: "#dee2e6",
			success: "#06d6a0",
			filter: "#118ab2",
		},
	},
	shadows: {
		0: "none",
		1: "0 10px 50px #e9ecef",
		2: "10px 10px 10px #f7258575",
		3: "10px 10px 10px #7209b775",
		4: "0 10px 50px #3a0ca34f",
		5: "0 20px 27px 0 rgb(0 0 0 / 5%)",
		6: "0 10px 50px #f725854f",
		7: "0 10px 50px #7209b74f",
		8: "10px 10px 10px #06d6a04f",
		9: "10px 10px 10px #118ab24f",
	},
	transitions: {
		easing: {
			easeOut: "all .3s ease-out",
			easeOut2: "all .5s ease-out",
			easeOut3: "all 1s ease-out",
		},
	},
	spacing: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 150, 200, 250, 300, 350, 400, 450, 500],
	typography: {
		h1: "32px",
		h2: "24px",
		h3: "18px",
		h4: "16px",
		h5: "14px",
		h6: "12px",
		fontWeightMedium: 500,
		fontWeightSemiBold: 600,
		fontWeightBold: 700,
		fontWeightBlack: 800,
	},
});

export default generateTheme;