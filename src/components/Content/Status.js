import { Divider, Grid, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import ChairIcon from "@mui/icons-material/Chair";
import BarChartIcon from "@mui/icons-material/BarChart";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const iconStatus = [
  {
    id: 1,
    title: "Bookings",
    icon: <ChairIcon />,
    number: 281,
    percent: "+55%",
    bkColor: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
    period: "than last week",
  },
  {
    id: 2,
    title: "Today's Users",
    icon: <BarChartIcon />,
    number: 2300,
    percent: "+3%",
    bkColor: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    period: "than last month",
  },
  {
    id: 3,
    title: "Revenue",
    icon: <StoreIcon />,
    number: 34000,
    percent: "+1%",
    bkColor: "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
    period: "than yesterday",
  },
  {
    id: 4,
    title: "Followers",
    icon: <PersonAddIcon />,
    number: "+91",
    percent: "Just updated",
    bkColor: "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
    period: "Just updated",
  },
];

const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  border: {
    background: "white",
    borderRadius: "15px",
    p: 2,
  },
  icon: {
    // background: "black",
    width: 64,
    height: 64,
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "-40px",
    color: "white",
  },
};

const Status = () => {
  return (
    <Grid container item sx={[styles.flexRow, {mb: 10}]}>
      {iconStatus.map((status) => {
        return (
          <Grid item xs={2.8} sx={[styles.flexColumn, styles.border]}>
            <Grid item sx={styles.flexRow}>
              <Icon item sx={[styles.icon, { background: status.bkColor }]}>
                {status.icon}
              </Icon>
              <Grid item sx={[styles.flexColumn, { alignItems: "flex-end" }]}>
                <Typography variant="h6">{status.title}</Typography>
                <Typography variant="h5" fontWeight={700}>
                  {status.number}
                </Typography>
              </Grid>
            </Grid>
            <Divider variant="middle" sx={{ mt: 3, mb: 3 }} />
            <Grid item display="flex" gap={1} alignItems="center">
              <Typography
                color="rgb(76, 175, 80)"
                fontSize="large"
                fontWeight={700}
              >
                {status.percent}
              </Typography>
              <Typography>{status.period}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Status;
