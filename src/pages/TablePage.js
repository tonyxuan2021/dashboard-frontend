import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { theme } from "../theme";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
    p: 2,
    maxWidth: "1500px",
    m: "0 auto",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
  },

  ProfileContainer: {
    background: "white",
    mt: "-70px",
    ml: 3,
    mr: 3,
    p: 2,
    borderRadius: "15px",
  },
};

export default function TablePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={2.0}></Grid>
      <Grid item xs={matches ? 12 : 9.6}>
        <Grid
          item
          sx={{
            height: "100vh",
            background: "white",
            borderRadius: "12px",
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            color={theme.palette.primary.dark}
          >
            Datatable Simple
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.primary.grey}
            sx={{ mb: 5, opacity: 0.6 }}
          >
            A lightweight, extendable, dependency-free javascript HTML table
            plugin.
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            sx={{
              border: "none",
              "& .MuiDataGrid-cell": {
                color: theme.palette.primary.grey,
              },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "NAME", width: 200 },
  { field: "position", headerName: "POSITION", width: 250 },
  { field: "office", headerName: "OFFICE", width: 130 },
  {
    field: "age",
    headerName: "AGE",
    type: "number",
    width: 90,
  },
  {
    field: "date",
    headerName: "START DATE",
    width: 130,
    sortable: false,
  },
  {
    field: "salary",
    headerName: "SALARY",
    type: "number",
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    name: "Rudolph Jurczik",
    age: 36,
    position: "Web Developer III",
    office: "Jaciara",
    date: "11/19/2020",
    salary: "$193,993",
  },
  {
    id: 2,
    name: "Cobb Fish",
    age: 60,
    position: "VP Product Management",
    office: "General Elizardo Aquino",
    date: "8/27/2020",
    salary: "$201,191",
  },
  {
    id: 3,
    name: "Joyce Gason",
    age: 48,
    position: "VP Product Management",
    office: "Jingzhou",
    date: "10/10/2020",
    salary: "$285,350",
  },
  {
    id: 4,
    name: "Cobb Fish",
    age: 60,
    position: "VP Product Management",
    office: "General Elizardo Aquino",
    date: "8/27/2020",
    salary: "$201,191",
  },
  {
    id: 5,
    name: "Melisande Spall",
    age: 50,
    position: "VP Accounting",
    office: "Xiakouyi",
    date: "11/21/2020",
    salary: "$290,169",
  },
  {
    id: 6,
    name: "Cassandre Watters",
    age: 21,
    position: "Technical Writer",
    office: "Karang Tengah",
    date: "7/31/2021",
    salary: "$213,508",
  },
  {
    id: 7,
    name: "Kayle Fallon",
    age: 19,
    position: "Technical Writer",
    office: "Midleton",
    date: "12/10/2020",
    salary: "$294,275",
  },
  {
    id: 8,
    name: "Amata Cahan",
    age: 56,
    position: "Technical Writer",
    office: "Hradec Králové",
    date: "9/22/2020",
    salary: "$385,712",
  },
  {
    id: 9,
    name: "Gunar Albrecht",
    age: 52,
    position: "Tax Accountant",
    office: "Chernivtsi",
    date: "6/30/2021",
    salary: "$392,642",
  },
  {
    id: 10,
    name: "Yvor Ching",
    age: 43,
    position: "Systems Administrator IV",
    office: "Sobreira",
    date: "10/4/2020",
    salary: "$445,688",
  },
];
