import React from "react";
import hero from "../assets/content/heroImg.jpeg";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import Profile from "../components/Profile";

const styles = {
  root: {
    // background: theme.palette.primary.main,
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
  backgroundHero: {
    background: `linear-gradient(195deg, rgba(73, 163, 241, 0.6), rgba(26, 115, 232, 0.6)) 50% center / cover,url(${hero})`,
    minHeight: "22rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
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

const ProfilePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={2.3}></Grid>
      <Grid item xs={matches ? 12 : 9.3}>
        <Grid item sx={[styles.flexColumn]}>
          <Grid item sx={styles.backgroundHero}></Grid>
          <Grid item sx={styles.ProfileContainer}>
            <Profile />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
