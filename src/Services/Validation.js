import * as yup from "yup";

let aboutSchema = yup.object().shape({
  name: yup.string().required("Enter your name"),
  summary: yup.string().nullable(),
  image: yup
    .mixed()
    .required("Image is required")
    .test(
      "is-valid-size",
      "Max allowed size is 2MB",
      (value) => value && value.size <= 2000000
    ),
});

let serviceSchema = yup.object().shape({
  title: yup.string().required("Enter your title"),
  description: yup.string().nullable(),
  summary: yup.string().required("Please enter summary"),
  rank: yup.number().nullable(),
  image: yup
    .mixed()
    .required("Image is required")
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) => value && value.size <= 1002400
    ),
});

export { aboutSchema, serviceSchema };
