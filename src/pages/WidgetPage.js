import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import Widget1 from "../components/Widget/Widget1";
import Widget2 from "../components/Widget/Widget2";

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

const WidgetPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={2.0}></Grid>
      <Grid item xs={matches ? 12 : 9.6}>
        <Grid item sx={{ ml: 4 }}>
          <Widget1 />
        </Grid>
        <Grid item sx={{ ml: 4 }}>
          <Widget2 />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WidgetPage;
