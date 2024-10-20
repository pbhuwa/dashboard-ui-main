import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Container, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#f2f7ff",
    padding: theme.spacing(6, 0),
    "& .footer": {
      display: "flex",
      alignItems: "center",
    },
    "@media(max-width: 600px)": {
      "& .footer": {
        flexWrap: "wrap",
        justifyContent: "center",
      },
    },
    "@media(min-width: 768px)": {
      "& .footer": {
        flexWrap: "nowrap",
        justifyContent: "space-between",
      },
    },
    "@media(min-width: 992px)": {
      marginLeft: "224px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <section className={classes.root}>
      <Container className="footer">
        <Typography
          variant="h1"
          className="copy-right"
          fontSize={theme.typography.h4}
          color={theme.palette.text.title}
        >
          {new Date().getFullYear()} © Bhuwan Pariyar
        </Typography>
        <Typography
          variant="h2"
          className="made-by"
          fontSize={theme.typography.h4}
          display="flex"
          alignItems="center"
          color={theme.palette.text.title}
        >
          Made with{" "}
          <FavoriteBorderRoundedIcon
            sx={{
              color: theme.palette.primary.main,
              px: 1,
            }}
          />
          by &nbsp;
          <Typography variant="span" color={theme.palette.primary.main}>
            {" "}
            Bhuwan{" "}
          </Typography>
        </Typography>
      </Container>
    </section>
  );
};

export default Footer;
