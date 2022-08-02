import React from "react";
import { Grid } from "@mui/material";
import Content from "../components/Content/index";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import { theme } from "../theme";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

const styles = {
  root: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
    p: 2,
    maxWidth: "1500px",
    m: "0 auto",
  },
};

const DashboardPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={2.3}>
        {matches ? null : <LeftBar />}
      </Grid>
      <Grid item xs={matches ? 12 : 9.3}>
        <Header />
        <Content />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
