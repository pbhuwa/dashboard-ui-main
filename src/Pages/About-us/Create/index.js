import React, { useState, useRef } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import {
  Box,
  Button,
  Container,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { Editor } from "Pages/Editor";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Breadcrumb } from "../../../Components/Breadcrumb";
import toast from "./../../../Services/Notification";
import { storage } from "./../../../Services/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { aboutSchema } from "Services/Validation";
import { ToastContainer } from "react-toastify";
import { addData } from "./../../../Services/Collection";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0, 10),
    "& .about-us-create-page": {
      "& .about-us-create-page-bg": {
        background: "#fff",
        borderRadius: "15px",
        padding: theme.spacing(6),
        boxShadow: theme.shadows[5],
        "& .MuiGrid-root": {
          "& .MuiGrid-item": {
            width: "100%",
            "& .MuiFormControl-root": {
              "& .MuiFormLabel-root": {
                fontFamily: "unset",
                color: theme.palette.text.gray,
                "&.Mui-focused": {
                  color: theme.palette.primary.main,
                },
              },
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                fontFamily: "unset",
                lineHeight: 0,
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                },
                "& .MuiInputBase-input": {
                  height: "20px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.text.lightGray,
                  borderWidth: "1px",
                },
              },
            },
            "& .ck-editor": {
              "& .ck-editor__top": {
                "& .ck-sticky-panel": {
                  "& .ck-sticky-panel__content": {
                    "& .ck-toolbar ": {
                      border: `1px solid ${theme.palette.text.lightGray}`,
                      borderBottom: "none",
                      borderRadius: "8px 8px 0 0",
                    },
                  },
                },
              },
              "& .ck-editor__main": {
                "& .ck-rounded-corners": {
                  borderRadius: "0 0 8px 8px",
                },
                "& .ck-editor__editable": {
                  minHeight: "200px",
                  borderColor: theme.palette.text.lightGray,
                  "&.ck-focused:not(.ck-editor__nested-editable)": {
                    border: `1px solid ${theme.palette.text.lightGray}`,
                    boxShadow: "none",
                  },
                },
              },
            },
            "& .submit-btn": {
              background: theme.palette.text.success,
              boxShadow: theme.shadows[8],
              borderRadius: "8px",
              padding: theme.spacing("8px", 3),
              minWidth: "150px",
              fontSize: theme.typography.h4,
              transition: theme.transitions.easing.easeOut,
              textTransform: "capitalize",
              letterSpacing: 0,
              "&.back-btn": {
                color: theme.palette.text.gray,
                background: theme.palette.text.lightGray,
                boxShadow: `10px 10px 10px ${theme.palette.text.gray}4f`,
                "& .MuiSvgIcon-root": {
                  fontSize: theme.typography.h3,
                },
              },
              "&:hover": {
                color: theme.palette.text.light,
                background: theme.palette.primary.main,
                boxShadow: theme.shadows[2],
              },
            },
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      marginLeft: "224px",
    },
  },
}));
const AboutUsCreatePage = () => {
  const [submittingForm, setSubmittingForm] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const imageRef = useRef(null);

  const uploadFile = async (file) => {
    const storageRef = ref(storage, "images/" + file.name);
    const snapshot = await uploadBytes(storageRef, file);
    const fileUrl = await getDownloadURL(snapshot.ref);
    return fileUrl;
  };

  const handleSubmit = async (values, { resetForm }) => {
    setSubmittingForm(true);
    const imageUrl = await uploadFile(values.image);
    values.image = imageUrl;
    await addData(values);
    resetForm();
    // axios
    //   .post(values, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     setSubmittingForm(false);
    //     if (res.status === 200) {
    //       resetForm({
    //         name: "",
    //         rank: "",
    //         summary: "",
    //         image: "",
    //       });
    //       toast.showSuccess("User Created Successfully");
    //       console.log(imageRef);
    //       imageRef.current.value = "";
    //     } else {
    //       toast.showError("Sent Failed");
    //       setSubmittingForm(false);
    //     }
    //   });
  };

  return (
    <>
      <Breadcrumb />
      <section className={classes.root}>
        <Container className="about-us-create-page">
          <Typography component="div" className="about-us-create-page-bg">
            <Formik
              initialValues={{
                name: "",
                rank: "",
                summary: "",
                image: "",
              }}
              validationSchema={aboutSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                /* and other goodies */
              }) =>
                isSubmitting ? (
                  <h1>Loading...</h1>
                ) : (
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete="off"
                  >
                    <Grid container spacing={3}>
                      <Grid item lg={10} md={12} sm={12}>
                        <TextField
                          label="Name"
                          placeholder="Enter your name"
                          name="name"
                          type="text"
                          fullWidth
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          error={errors.name && touched.name}
                        />
                        {errors.name && touched.name ? (
                          <Typography
                            sx={{
                              color: "red",
                              mt: 1,
                            }}
                            className="error-message"
                          >
                            {errors.name}
                          </Typography>
                        ) : null}
                      </Grid>
                      <Grid item lg={2} md={12} sm={12}>
                        <TextField
                          placeholder="Enter Rank"
                          label="Rank"
                          type="number"
                          name="rank"
                          inputProps={{
                            min: 0,
                            max: 100,
                          }}
                          fullWidth
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.rank}
                        />
                      </Grid>
                      <Grid item lg={12} md={12} sm={12}>
                        <FormHelperText
                          sx={{
                            color: theme.palette.text.gray,
                            fontSize: theme.typography.h4,
                            mt: 0,
                            mb: 1,
                            fontFamily: "unset",
                          }}
                        >
                          Description
                        </FormHelperText>
                        <Editor />
                      </Grid>
                      <Grid item lg={6} md={12} sm={12}>
                        <TextField
                          type="file"
                          name="image"
                          onChange={(event) => {
                            setFieldValue(
                              "image",
                              event.currentTarget.files[0]
                            );
                          }}
                          onBlur={handleBlur}
                          error={errors.image && touched.image}
                          inputProps={{
                            accept: ".jpg,.png,.jpeg",
                            ref: imageRef,
                          }}
                          sx={{
                            "& legend": { display: "none" },
                            "& fieldset": { top: 0 },
                          }}
                          fullWidth
                        />
                        {errors.image && touched.image ? (
                          <Typography
                            sx={{
                              color: "red",
                              mt: 1,
                            }}
                            className="error-message"
                          >
                            {errors.image}
                          </Typography>
                        ) : null}
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={12}
                        sm={12}
                        display="flex"
                        alignItems="center"
                      >
                        <Typography
                          component="div"
                          className="status-bg"
                          sx={{
                            border: `1px solid ${theme.palette.text.lightGray}`,
                            width: "100%",
                            borderRadius: "8px",
                            padding: "4.5px 15px",
                          }}
                        >
                          <FormGroup
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Typography variant="span" mr={2}>
                              Status:
                            </Typography>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  defaultChecked
                                  sx={{
                                    color: theme.palette.text.gray,
                                    "&.Mui-checked": {
                                      color: theme.palette.success.main,
                                      "&label": {
                                        color: "red",
                                      },
                                    },
                                  }}
                                />
                              }
                              label="Active"
                              sx={{
                                color: theme.palette.text.gray,
                                mr: 3,
                              }}
                              name="active"
                              value="active"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    color: theme.palette.text.gray,
                                    "&.Mui-checked": {
                                      color: theme.palette.error.main,
                                      "&label": {
                                        color: "red",
                                      },
                                    },
                                  }}
                                />
                              }
                              label="Inactive"
                              sx={{
                                color: theme.palette.text.gray,
                                mr: 0,
                              }}
                              name="inactive"
                              value="inactive"
                            />
                          </FormGroup>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        md={6}
                        sm={6}
                        display="flex"
                        alignItems="center"
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          className="submit-btn"
                          sx={{ mr: 2 }}
                        >
                          Save About
                        </Button>
                        <Button
                          variant="contained"
                          type="submit"
                          className="submit-btn back-btn"
                        >
                          <ArrowBackRoundedIcon sx={{ mr: 1 }} /> Back to List
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                )
              }
            </Formik>
          </Typography>
        </Container>
        <ToastContainer />
      </section>
    </>
  );
};

export default AboutUsCreatePage;
