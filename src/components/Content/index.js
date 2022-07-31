import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import canada from "../../assets/content/canada.png";
import finland from "../../assets/content/finland.png";
import jamaica from "../../assets/content/jamaica.png";
import portugal from "../../assets/content/portugal.png";
import { theme } from "../../theme";
import Map from "./Map";
import { Charts_1 } from "./Charts/Charts_1";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Charts_2 } from "./Charts/Charts_2";
import { Charts_3 } from "./Charts/Charts_3";
import Status from "./Status";

const styles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  padding: {
    pb: 2,
    pt: 2,
  },
  borderBottom: {
    borderBottom: `1px solid lightgrey`,
    "&:last-child": {
      borderBottom: "none",
    },
  },
  language: {
    background: "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
    width: "5rem",
    height: "5rem",
    mt: "-3.5rem",
    borderRadius: "0.75rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    background: "white",
    width: "300px",
    height: "350px",
    borderRadius: "15px",
  },
};

const Content = () => {
  return (
    <Grid container display="flex" flexDirection="column">
      <Grid
        sx={[
          styles.flex,
          {
            background: "white",
            p: 5,
            borderRadius: "15px",
            boxShadow:
              "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
            mb: 10,
          },
        ]}
      >
        <Grid item xs={6}>
          <Grid item sx={{ display: "flex", gap: 3, mb: 3 }}>
            <Grid item sx={styles.language}>
              <LanguageIcon fontSize="large" sx={{ color: "white" }} />
            </Grid>
            <Typography
              color={theme.palette.primary.dark}
              sx={{ mt: "-1.5rem" }}
              variant="body1"
              fontWeight={700}
            >
              Sales by Country
            </Typography>
          </Grid>
          <Grid item>
            {financials.map((country) => {
              return (
                <Grid
                  item
                  sx={[
                    styles.flex,
                    styles.borderBottom,
                    styles.padding,
                    { alignItems: "center" },
                  ]}
                  gap={3}
                  key={country.id}
                >
                  <Grid item>
                    <img src={country.img}></img>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>Country</Typography>
                    <Typography>{country.name}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>Sales:</Typography>
                    <Typography>{country.sales}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>Value:</Typography>
                    <Typography>${country.value}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>Bounce:</Typography>
                    <Typography>{country.bounce}</Typography>
                  </Grid>
                </Grid>
              );
            })}
            <Grid item></Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Map />
        </Grid>
      </Grid>
      <Grid item sx={[styles.flex, {mb: 7}]}>
        <Grid item sx={[styles.paper]} xs={3.8}>
          <Grid
            item
            sx={{
              background:
                "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
              m: 3,
              p: 3,
              borderRadius: "15px",
              mt: "-2rem",
            }}
          >
            <Charts_1 />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              pl: 3,
              pr: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color={theme.palette.primary.dark}
            >
              Website Views
            </Typography>
            <Typography color={theme.palette.primary.grey}>
              Last Campaign Performance
            </Typography>
            <Divider variant="middle" />
            <Grid item sx={{ display: "flex", gap: 1 }}>
              <AccessTimeIcon
                sx={{ color: theme.palette.primary.grey, fontSize: "middle" }}
              />
              <Typography color={theme.palette.primary.grey}>
                campaign sent 2 days ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={[styles.paper]} xs={3.8}>
          <Grid
            item
            sx={{
              background:
                "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
              m: 3,
              p: 3,
              borderRadius: "15px",
              mt: "-2rem",
            }}
          >
            <Charts_2 />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              pl: 3,
              pr: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color={theme.palette.primary.dark}
            >
              Website Views
            </Typography>
            <Typography color={theme.palette.primary.grey}>
              Last Campaign Performance
            </Typography>
            <Divider variant="middle" />
            <Grid item sx={{ display: "flex", gap: 1 }}>
              <AccessTimeIcon
                sx={{ color: theme.palette.primary.grey, fontSize: "middle" }}
              />
              <Typography color={theme.palette.primary.grey}>
                campaign sent 2 days ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={[styles.paper]} xs={3.8}>
          <Grid
            item
            sx={{
              background:
                "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
              m: 3,
              p: 3,
              borderRadius: "15px",
              mt: "-2rem",
            }}
          >
            <Charts_3 />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              pl: 3,
              pr: 3,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color={theme.palette.primary.dark}
            >
              Website Views
            </Typography>
            <Typography color={theme.palette.primary.grey}>
              Last Campaign Performance
            </Typography>
            <Divider variant="middle" />
            <Grid item sx={{ display: "flex", gap: 1 }}>
              <AccessTimeIcon
                sx={{ color: theme.palette.primary.grey, fontSize: "middle" }}
              />
              <Typography color={theme.palette.primary.grey}>
                campaign sent 2 days ago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Status />
    </Grid>
  );
};

const financials = [
  {
    id: 1,
    name: "Canada",
    sales: 2500,
    value: 230900,
    bounce: "29.9%",
    img: canada,
  },
  {
    id: 2,
    name: "Finland",
    sales: 3900,
    value: 440000,
    bounce: "40.22%",
    img: finland,
  },
  {
    id: 3,
    name: "Jamaica",
    sales: 1400,
    value: 190700,
    bounce: "23.44%",
    img: jamaica,
  },
  {
    id: 4,
    name: "Portugal",
    sales: 562,
    value: 143960,
    bounce: "32.14%",
    img: portugal,
  },
];

export default Content;
