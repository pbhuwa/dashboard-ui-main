import React from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Image from "Assets/Images/user.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .testimonial": {
      background: "#fff",
      boxShadow: theme.shadows[5],
      borderRadius: "15px",
      padding: theme.spacing(4, 0),
      "& .MuiPaper-root": {
        boxShadow: theme.shadows[0],
        borderRadius: 0,
        "& .MuiTableContainer-root": {
          "& .MuiTable-root": {
            "& .MuiTableCell-root": {
              fontFamily: "unset",
              padding: theme.spacing(2, 4),
              borderBottom: "1px solid #f1f1f1",
            },
            "& .MuiTableHead-root": {
              "& .MuiTableRow-root": {
                "& .MuiTableCell-root": {
                  color: theme.palette.text.gray,
                },
              },
            },
            "& .MuiTableBody-root": {
              "& .MuiTableRow-root": {
                "& .MuiTableCell-root": {
                  color: theme.palette.text.title,
                  "& img": {
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                    border: `2px solid ${theme.palette.primary.main}`,
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

const columns = [
  {
    id: "name",
    label: "Name",
    minWidth: "170px",
  },
  {
    id: "image",
    label: "Image",
    minWidth: "100px",
  },
  {
    id: "comment",
    label: "Comment",
  },
];

const rows = [
  {
    name: "Bhuwan Pariyar",
    image: Image,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa earum est inventore itaque",
  },
  {
    name: "Nikit Karki",
    image: Image,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa earum est inventore itaque",
  },
  {
    name: "Harish Joshi",
    image: Image,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa earum est inventore itaque",
  },
];

const Testimonial = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const classes = useStyles();
  const theme = useTheme();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section className={classes.root}>
      <Typography component="div" className="testimonial">
        <Typography component="div" className="text-holder" mb={3} mx="20px">
          <Typography
            variant="h1"
            className="title"
            color={theme.palette.primary.main}
            fontSize={theme.typography.h3}
            fontWeight={theme.typography.fontWeightSemiBold}
          >
            Latest Comments
          </Typography>
        </Typography>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, i) => {
                    return (
                      <TableRow role="checkbox" tabIndex={-1} key={i + "__"}>
                        <TableCell
                          style={{
                            fontWeight: theme.typography.fontWeightSemiBold,
                          }}
                        >
                          {item.name}
                        </TableCell>
                        <TableCell>
                          <img src={item.image} alt="" />
                        </TableCell>
                        <TableCell
                          style={{
                            color: theme.palette.text.gray,
                            lineHeight: 2,
                          }}
                        >
                          {item.comment}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Typography>
    </section>
  );
};

export default Testimonial;
