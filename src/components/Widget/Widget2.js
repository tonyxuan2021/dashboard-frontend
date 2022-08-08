import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { theme } from "../../theme";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payment";
// import CreditCardTemp from "./CreditCard";

const styles = {
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
  },
};

const Widget2 = () => {
  return (
    <Grid item sx={[styles.flexRow, { gap: 4 }]}>
      <Grid item xs={3} sx={[styles.flexColumn, { gap: 4 }]}>
        {data1.map((data) => {
          return (
            <Grid
              item
              sx={[
                styles.flexRow,
                {
                  gap: 2,
                  background: "white",
                  p: 2,
                  justifyContent: "space-between",
                  borderRadius: "12px",
                },
              ]}
            >
              <Grid
                item
                sx={{
                  p: 3,
                  background:
                    "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                  borderRadius: "12px",
                  color: "white",
                }}
              >
                {data.icon}
              </Grid>
              <Grid item>
                <Typography variant="h6" color={theme.palette.primary.grey}>
                  {data.title}
                </Typography>
                <Typography
                  variant="h5"
                  color={theme.palette.primary.dark}
                  fontWeight={700}
                  sx={{ textAlign: "right" }}
                >
                  {data.number}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={5} sx={[styles.flexRow, { gap: 4 }]}>
        {data2.map((data) => {
          return (
            <Grid
              item
              sx={[
                styles.flexColumn,
                {
                  background: "white",
                  pt: 2,
                  pb: 2,
                  pl: 4,
                  pr: 4,
                  gap: 2,
                  alignItems: "center",
                  borderRadius: "12px",
                },
              ]}
            >
              <Grid
                item
                sx={{
                  p: 3,
                  background:
                    "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                  borderRadius: "12px",
                  color: "white ",
                }}
              >
                {data.icon}
              </Grid>
              <Typography
                variant="h6"
                fontWeight={700}
                color={theme.palette.primary.dark}
              >
                {data.title}
              </Typography>
              <Typography color={theme.palette.primary.grey}>
                {data.text}
              </Typography>
              <Divider
                variant="middle"
                sx={{ width: "100%", color: "theme.palette.primary.grey" }}
              />
              <Typography
                variant="h5"
                fontWeight={700}
                color={theme.palette.primary.dark}
              >
                {data.num}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={3}>
        {/* <CreditCardTemp /> */}
      </Grid>
    </Grid>
  );
};

const data1 = [
  {
    title: "Battery Health",
    number: "99 %",
    icon: <BatteryChargingFullIcon fontSize="large" />,
  },
  {
    title: "Music Volume",
    number: "15/100",
    icon: <VolumeDownIcon fontSize="large" />,
  },
];

const data2 = [
  {
    title: "Salary",
    text: "Belong Interactive",
    num: "+$2000",
    icon: <AccountBalanceIcon fontSize="large" />,
  },
  {
    title: "Paypal",
    text: "Freelance Payment",
    num: "$455.00",
    icon: <PaymentIcon fontSize="large" />,
  },
];

export default Widget2;
