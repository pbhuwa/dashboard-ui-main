import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import Image from "Assets/Images/user.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListRoundedIcon from "@mui/icons-material/ListRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(10),
    "& .user-list": {
      "& .MuiGrid-root": {
        "& .text-holder": {
          "& .MuiFormControl-root": {
            "& .MuiInputBase-root": {
              borderRadius: "8px",
              background: "#fff",
              boxShadow: theme.shadows[5],
              color: theme.palette.text.gray,
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                  borderWidth: "1px",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "& .MuiSelect-select": {
                padding: theme.spacing(1, 6, 1, 3),
              },
            },
          },
        },
        "& .MuiGrid-item": {
          width: "100%",
          "& .user-list-item": {
            "&:not(:last-child)": {
              marginBottom: theme.spacing(5),
            },
            "& .view-profile": {
              "& a": {
                fontWeight: theme.typography.fontWeightMedium,
                textDecoration: "underline",
                transition: theme.transitions.easing.easeOut,
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              },
            },
          },
          "& .referrals-list-item": {
            "&:nth-child(3)": {
              "& .icon-holder": {
                background: "#fb8500",
                boxShadow: "10px 10px 10px #fb850075",
              },
              "& .progress-bar": {
                "& .progress-bar-value": {
                  "& .bar-bg": {
                    background: "#fb8500",
                  },
                },
              },
            },
            "&:nth-child(4)": {
              "& .icon-holder": {
                background: "#00b4d8",
                boxShadow: "10px 10px 10px #00b4d875",
              },
              "& .progress-bar": {
                "& .progress-bar-value": {
                  "& .bar-bg": {
                    background: "#00b4d8",
                  },
                },
              },
            },
            "&:last-child": {
              "& .icon-holder": {
                background: "#06d6a0",
                boxShadow: "10px 10px 10px #06d6a075",
              },
              "& .progress-bar": {
                "& .progress-bar-value": {
                  "& .bar-bg": {
                    background: "#06d6a0",
                  },
                },
              },
            },
            "&:not(:last-child)": {
              marginBottom: theme.spacing("42px"),
            },
            "& .icon-holder": {
              height: "40px",
              minWidth: "40px",
              borderRadius: "10px",
              background: theme.palette.primary.main,
              boxShadow: theme.shadows[2],
              display: "grid",
              placeItems: "center",
              "& .MuiSvgIcon-root": {
                color: "#fff",
              },
            },
            "& .progress-bar": {
              "& .progress-bar-value": {
                background: theme.palette.text.lightGray,
                height: "5px",
                borderRadius: "30px",
                position: "relative",
                "& .bar-bg": {
                  position: "absolute",
                  background: theme.palette.primary.main,
                  height: "5px",
                  borderRadius: "30px",
                },
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      "& .user-list": {
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            "& .user-list-item": {
              flexWrap: "wrap",
            },
          },
        },
      },
    },
  },
}));

const userList = [
  {
    name: "Bhuwan Pariyar",
    email: "bhuwan@gmail.com",
    designation: "Designer",
    image: Image,
  },
  {
    name: "Bhuwan Pariyar",
    email: "bhuwan@gmail.com",
    designation: "Admin",
    image: Image,
  },
  {
    name: "Bhuwan Pariyar",
    email: "bhuwan@gmail.com",
    designation: "Designer",
    image: Image,
  },
  {
    name: "Bhuwan Pariyar",
    email: "bhuwan@gmail.com",
    designation: "Client",
    image: Image,
  },
];
const referralsList = [
  {
    name: "Bhuwan Pariyar",
    icon: <ReplyRoundedIcon />,
    percentage: "80%",
  },
  {
    name: "Bhuwan Pariyar",
    icon: <SendOutlinedIcon />,
    percentage: "70%",
  },
  {
    name: "Bhuwan Pariyar",
    icon: <SearchOutlinedIcon />,
    percentage: "60%",
  },
  {
    name: "Bhuwan Pariyar",
    icon: <ListRoundedIcon />,
    percentage: "90%",
  },
];
const UserList = () => {
  const [age, setAge] = useState("");
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className={classes.root}>
      <Container className="user-list">
        <Grid container spacing={5}>
          <Grid item lg={6} md={12} sm={12}>
            <Typography
              component="div"
              className="user-bg"
              sx={{
                background: "#fff",
                padding: theme.spacing(4),
                borderRadius: "15px",
                boxShadow: theme.shadows[5],
              }}
            >
              <Typography
                component="div"
                className="text-holder"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={3}
              >
                <Typography
                  variant="h1"
                  className="main-title"
                  fontSize={theme.typography.h3}
                  color={theme.palette.primary.main}
                  fontWeight={theme.typography.fontWeightSemiBold}
                >
                  User List
                </Typography>
                <FormControl>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em
                        style={{
                          color: theme.palette.text.gray,
                        }}
                      >
                        Sort
                      </em>
                    </MenuItem>
                    <MenuItem
                      value={10}
                      style={{
                        color: theme.palette.text.gray,
                      }}
                    >
                      By Name
                    </MenuItem>
                    <MenuItem
                      value={20}
                      style={{
                        color: theme.palette.text.gray,
                      }}
                    >
                      By Date
                    </MenuItem>
                  </Select>
                </FormControl>
              </Typography>
              {userList.map((item, i) => {
                const isClient = item.designation === "Client";
                const isAdmin = item.designation === "Admin";
                return (
                  <Typography
                    component="div"
                    className="user-list-item"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={3}
                    key={i + "__"}
                  >
                    <Typography
                      component="div"
                      className="profile-image"
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Typography component="div" className="user-image">
                        <Avatar
                          alt="Remy Sharp"
                          src={item.image}
                          sx={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "10px",
                          }}
                        />
                      </Typography>
                      <Typography
                        component="div"
                        className="content-holder"
                        pr={5}
                      >
                        <Typography
                          variant="h2"
                          className="name"
                          fontSize="16px"
                          fontWeight={theme.typography.fontWeightSemiBold}
                          color={theme.palette.text.title}
                          position="relative"
                          display="inline-block"
                          pr={10}
                        >
                          {item.name}
                          <Typography
                            variant="span"
                            sx={{
                              border:
                                isAdmin || isClient
                                  ? isAdmin
                                    ? `1px solid ${theme.palette.primary.main}`
                                    : `1px solid ${theme.palette.secondary.main}`
                                  : "1px solid #fca000",
                              borderRadius: "30px",
                              color:
                                isAdmin || isClient
                                  ? isAdmin
                                    ? theme.palette.primary.main
                                    : theme.palette.secondary.main
                                  : "#fca000",
                              fontSize: "12px",
                              padding: theme.spacing(1),
                              position: "absolute",
                              top: "-5px",
                              right: "-30px",
                              minWidth: "80px",
                              textAlign: "center",
                            }}
                          >
                            {item.designation}
                          </Typography>
                        </Typography>
                        <Typography
                          variant="h6"
                          className="gmail"
                          fontSize="14px"
                          color={theme.palette.text.gray}
                        >
                          {item.email}
                        </Typography>
                      </Typography>
                    </Typography>
                    <Typography component="div" className="view-profile">
                      <Link to="#">View Profile</Link>
                    </Typography>
                  </Typography>
                );
              })}
            </Typography>
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <Typography
              component="div"
              className="user-bg"
              sx={{
                background: "#fff",
                padding: theme.spacing(4),
                borderRadius: "15px",
                boxShadow: theme.shadows[5],
              }}
            >
              <Typography component="div" className="text-holder" mb={3}>
                <Typography
                  variant="h1"
                  className="main-title"
                  fontSize={theme.typography.h3}
                  color={theme.palette.primary.main}
                  fontWeight={theme.typography.fontWeightSemiBold}
                >
                  Top Referrals
                </Typography>
              </Typography>
              {referralsList.map((item, i) => {
                return (
                  <Typography
                    component="div"
                    className="referrals-list-item"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={3}
                    key={i + "_"}
                  >
                    <Typography component="div" className="icon-holder">
                      {item.icon}
                    </Typography>
                    <Typography
                      component="div"
                      className="progress-bar"
                      width="100%"
                    >
                      <Typography
                        component="div"
                        className="progress-bar-item"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        mb={1}
                      >
                        <Typography
                          variant="h2"
                          className="name"
                          fontSize="16px"
                          fontWeight={theme.typography.fontWeightSemiBold}
                          color={theme.palette.text.title}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          className="gmail"
                          fontSize="14px"
                          color={theme.palette.text.gray}
                        >
                          {item.percentage}
                        </Typography>
                      </Typography>
                      <Typography
                        component="div"
                        className="progress-bar-value"
                      >
                        <Typography
                          variant="span"
                          className="bar-bg"
                          sx={{
                            width: item.percentage,
                          }}
                        />
                      </Typography>
                    </Typography>
                  </Typography>
                );
              })}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export default UserList;
