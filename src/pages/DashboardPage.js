import React from "react";
import { Grid } from "@mui/material";
import Content from "../components/Content/index";
import { theme } from "../theme";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const styles = {
  root: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    // gap: 5,
    p: 2,
    // maxWidth: "1500px",
    m: "0 auto",
  },
};

const Wrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

const DashboardPage = ({ setShowNav }) => {
  setShowNav(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={2.3}></Grid>
      <Wrapper item xs={matches ? 12 : 9.3}>
        <Content />
      </Wrapper>
    </Grid>
  );
};

export default DashboardPage;
