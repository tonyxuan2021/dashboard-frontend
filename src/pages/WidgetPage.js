import React from "react";
import hero from "../assets/content/heroImg.jpeg";
import { Grid, LinearProgress, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TaskIcon from "@mui/icons-material/Task";
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
          <Grid
            item
            sx={[
              styles.flexRow,
              {
                alignItems: "center",
                justifyContent: "space-between",
              },
            ]}
          >
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
              xs={4}
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
            <Grid
              item
              sx={[
                styles.flexColumn,
                {
                  background: "white",
                  height: "410px",
                  p: 1,
                  gap: 3,
                  borderRadius: "12px",
                },
              ]}
              xs={7.5}
            >
              <Grid
                item
                sx={[
                  styles.flexRow,
                  {
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 3,
                  },
                ]}
              >
                <Grid item sx={[styles.flexRow, { gap: 2 }]}>
                  <Grid
                    item
                    sx={{
                      background:
                        "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                      p: 2,
                      borderRadius: "12px",
                    }}
                  >
                    <DateRangeIcon sx={{ color: "white" }} fontSize="large" />
                  </Grid>
                  <Grid item sx={[styles.flexColumn, { gap: 2 }]}>
                    <Typography color={theme.palette.primary.grey}>
                      Tasks
                    </Typography>
                    <Typography variant="h5" fontWeight={700}>
                      480
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    color={theme.palette.primary.grey}
                    fontWeight={700}
                  >
                    60%
                  </Typography>
                  <LinearProgress
                    color="blueColor"
                    sx={{ width: "100%", height: "10px" }}
                    variant="determinate"
                    value={60}
                  />
                </Grid>
              </Grid>
              <Grid item sx={{ background: "white", height: "200px" }}>
                <Charts_4 />
              </Grid>
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
