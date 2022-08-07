import React from "react";
import hero from "../assets/content/heroImg.jpeg";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TaskIcon from "@mui/icons-material/Task";
import { Charts_2 } from "../components/Content/Charts/Charts_2";
import Charts_4 from "../components/Content/Charts/Charts_4";

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
  flexRow: {
    display: "flex",
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

const WidgetPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={2.0}></Grid>
      <Grid item xs={matches ? 12 : 9.6}>
        <Grid item sx={[styles.flexColumn, { ml: 4 }]}>
          <Grid item sx={styles.flexRow}>
            <Grid
              item
              sx={[
                styles.flexColumn,
                {
                  background: "white",
                  pt: 3,
                  pl: 3,
                  pr: 5,
                  borderRadius: "15px",
                },
              ]}
            >
              <Typography
                variant="h6"
                color={theme.palette.primary.dark}
                fontWeight={700}
                sx={{ mb: 1 }}
              >
                Upcoming events
              </Typography>
              <Typography
                sx={{ mb: 3 }}
                variant="body1"
                color={theme.palette.primary.grey}
              >
                Joined
              </Typography>
              {events.map((event) => {
                return (
                  <Grid
                    item
                    sx={[
                      styles.flexRow,
                      { gap: 2, mb: 3, alignItems: "center" },
                    ]}
                  >
                    <Grid
                      item
                      sx={{
                        color: "white",
                        background:
                          "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                        p: 3,
                        borderRadius: "12px",
                      }}
                    >
                      {event.icon}
                    </Grid>
                    <Grid item sx={[styles.flexColumn]}>
                      <Typography
                        color={theme.palette.primary.dark}
                        fontWeight={700}
                        variant="body1"
                        sx={{ mb: 2 }}
                      >
                        {" "}
                        {event.title}
                      </Typography>
                      <Typography> {event.date}</Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <Grid item sx={{ background: "white" }} xs={8}>
              <Charts_4 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const events = [
  {
    title: "Cyber Week",
    date: "27 March 2020, at 12:30 PM",
    icon: <SavingsIcon />,
  },
  {
    title: "Meeting with Marry",
    date: "24 March 2020, at 10:00 PM",
    icon: <NotificationsActiveIcon />,
  },
  {
    title: "Tasks planification",
    date: "24 March 2020, at 12:30 AM",
    icon: <TaskIcon />,
  },
];

export default WidgetPage;
