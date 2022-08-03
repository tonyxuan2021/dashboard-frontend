import { Grid, Typography } from "@mui/material";
import React from "react";
import avatarBruce from "../../assets/profile/bruce-mars.jpeg";
import ProfileTab from "./Tabs";
import { theme } from "../../theme";
import Settings from "./Settings";

const styles = {
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Profile = () => {
  return (
    <Grid container item sx={[styles.flexColumn]}>
      <Grid item sx={[styles.flexRow, { mb: 5 }]}>
        <Grid item sx={[styles.flexRow, { alignItems: "center", gap: 3 }]}>
          <Grid item sx={{ width: "90px" }}>
            <img
              style={{ width: "100%", borderRadius: "50%" }}
              src={avatarBruce}
            ></img>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              color={theme.palette.primary.dark}
              fontWeight={700}
            >
              Richard Davis
            </Typography>
            <Typography color={theme.palette.primary.grey}>
              CEO / Co-Founder
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <ProfileTab />
        </Grid>
      </Grid>
      <Grid item>
        <Settings />
      </Grid>
    </Grid>
  );
};

export default Profile;
