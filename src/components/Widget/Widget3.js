import React from "react";
import { Grid, LinearProgress, Typography } from "@mui/material";
import SavingsIcon from "@mui/icons-material/Savings";
import { theme } from "../../theme";
import CalendarLib from "./CalendarLib";
import VideoPlayer from "./VideoPlayer";
import StraightIcon from "@mui/icons-material/Straight";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import KeyIcon from "@mui/icons-material/Key";

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

const Widget3 = () => {
  return (
    <Grid
      item
      sx={[
        styles.flexRow,
        {
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        },
      ]}
    >
      <Grid
        item
        sx={[
          styles.flexColumn,
          {
            background: "white",
            p: 2,
            gap: 1,
            borderRadius: "12px",
            height: "550px",
          },
        ]}
        xs={4.8}
      >
        <Typography
          variant="h6"
          color={theme.palette.primary.dark}
          fontWeight={700}
        >
          Calendar
        </Typography>
        <Typography color={theme.palette.primary.grey} variant="body2">
          {new Date().toJSON().slice(0, 10).replace(/-/g, "/")}
        </Typography>
        <CalendarLib />
      </Grid>
      <Grid
        item
        sx={[styles.flexColumn, { gap: 5 }]}
        xs={2.5}
        justifyContent="space-between"
        alignItems="stretch"
        height="550px"
      >
        <Grid
          item
          sx={{
            background: "white",
            p: 3,
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.primary.dark}
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            Categories
          </Typography>

          {events.map((event) => {
            return (
              <Grid
                item
                sx={[styles.flexRow, { gap: 2, mb: 3, alignItems: "center" }]}
              >
                <Grid
                  item
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                    p: 1,
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
        <Grid item>
          <VideoPlayer />
        </Grid>
      </Grid>
      <Grid item sx={[styles.flexColumn, {}]} xs={4}>
        <Grid
          item
          sx={{
            background: "white",
            p: 3,
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.primary.dark}
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            Orders overview
          </Typography>
          <Grid item sx={styles.flexColumn}>
            <Grid item sx={[styles.flexRow, { mb: 3 }]}>
              <StraightIcon sx={{ color: "green" }} />
              <Typography
                variant="body1"
                color={theme.palette.primary.grey}
                fontWeight={700}
                sx={{ mb: 1 }}
              >
                24% this month
              </Typography>
            </Grid>
            <Grid item sx={[styles.flexColumn, { gap: 4, mb: 5 }]}>
              {orders.map((order) => {
                return (
                  <Grid
                    item
                    sx={[styles.flexRow, { gap: 2 }]}
                    alignItems="center"
                  >
                    <Grid
                      item
                      sx={{
                        background: `${order.color}`,
                        borderRadius: "12px",
                        p: 1.5,
                        color: "white",
                      }}
                    >
                      {order.icon}
                    </Grid>
                    <Typography
                      variant="body1"
                      fontWeight={700}
                      color={theme.palette.primary.dark}
                    >
                      {order.title}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const events = [
  {
    title: "Devices",
    date: "250 in stock",
    icon: <SavingsIcon fontSize="small" />,
  },
  {
    title: "Devices",
    date: "250 in stock",
    icon: <SavingsIcon fontSize="small" />,
  },
  {
    title: "Devices",
    date: "250 in stock",
    icon: <SavingsIcon fontSize="small" />,
  },
];

const orders = [
  {
    title: "$2400, Design changes",
    color: "green",
    icon: <NotificationsIcon fontSize="small" />,
  },
  {
    title: "New order #1832412",
    color: "rgb(244, 67, 53)",
    icon: <AdfScannerIcon fontSize="small" />,
  },
  {
    title: "Server payments for April",
    color: "rgb(26, 115, 232)",
    icon: <ShoppingCartIcon fontSize="small" />,
  },
  {
    title: "New card added for order",
    color: "rgb(251, 140, 0)",
    icon: <CreditCardIcon fontSize="small" />,
  },
  {
    title: "New card added for order",
    color: "rgb(233, 30, 99)",
    icon: <KeyIcon fontSize="small" />,
  },
];

export default Widget3;
