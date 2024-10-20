import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import Image from "Assets/Images/user.png";
import { Button, Typography } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none !important",
    borderRadius: "0 !important",
    "& .MuiTable-root": {
      "& .MuiTableCell-root": {
        fontFamily: "unset",
        borderBottom: `1px solid ${theme.palette.text.lightGray}`,
      },
      "& .MuiTableHead-root": {
        borderTop: `1px solid ${theme.palette.text.lightGray}`,
        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            color: theme.palette.text.title,
          },
        },
      },
      "& .MuiTableBody-root": {
        "& .MuiTableRow-root": {
          "& .MuiTableCell-root": {
            color: theme.palette.text.gray,
            "& img": {
              height: "60px",
              width: "60px",
              borderRadius: "50%",
            },
            "& .MuiButtonBase-root": {
              background: theme.palette.error.main,
              boxShadow: `10px 10px 10px ${theme.palette.error.main}4f`,
              transition: theme.transitions.easing.easeOut,
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              minWidth: "unset",
              padding: 0,
              "& .MuiSvgIcon-root": {
                fontSize: theme.typography.h3,
              },
              "&:last-child": {
                background: theme.palette.text.filter,
                boxShadow: theme.shadows[9],
              },
              "&:hover": {
                background: theme.palette.primary.main,
                boxShadow: theme.shadows[2],
              },
            },
          },
        },
      },
    },
    "& .MuiTablePagination-root": {
      "& .MuiTablePagination-selectLabel, .MuiInputBase-root, .MuiTablePagination-displayedRows":
        {
          fontFamily: "unset",
          color: theme.palette.text.gray,
          fontWeight: theme.typography.fontWeightMedium,
        },
    },
  },
}));

const columns = [
  {
    id: "title",
    label: "Title",
  },
  {
    id: "image",
    label: "Image",
  },
  {
    id: "description",
    label: "Description",
  },
  {
    id: "link",
    label: "Link",
    align: "right",
  },
  {
    id: "createAt",
    label: "Create At",
    align: "right",
  },
  {
    id: "action",
    label: "Action",
  },
];

const rows = [
  {
    title: "Company Website",
    image: Image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum diam ut libero tempor " +
      "aliquam. Cras sagittis in urna at interdum. Morbi congue lorem eget semper faucibus.",
    link: "https://youtube.com",
    rank: 1,
    status: "active",
    createAt: "2023-03-1",
  },
  {
    title: "Company Website",
    image: Image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum diam ut libero tempor " +
      "aliquam. Cras sagittis in urna at interdum. Morbi congue lorem eget semper faucibus.",
    link: "https://youtube.com",
    rank: 1,
    status: "active",
    createAt: "2023-03-1",
  },
  {
    title: "Company Website",
    image: Image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum diam ut libero tempor " +
      "aliquam. Cras sagittis in urna at interdum. Morbi congue lorem eget semper faucibus.",
    link: "https://youtube.com",
    rank: 1,
    status: "active",
    createAt: "2023-03-1",
  },
];

const ListTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} className={classes.root}>
      <TableContainer>
        <Table aria-label="sticky table">
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
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i + "__"}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>
                      <img src={row.image} alt={row.name} />
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.link}</TableCell>
                    <TableCell>{row.createAt}</TableCell>
                    <TableCell>
                      <Typography
                        component="div"
                        className="button-holder"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                      >
                        <Button variant="contained">
                          <DeleteOutlineRoundedIcon />
                        </Button>
                        <Button variant="contained">
                          <EditRoundedIcon />
                        </Button>
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ListTable;
