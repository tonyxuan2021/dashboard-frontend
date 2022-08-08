import React from "react";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import hero from "../assets/price/hero.jpg";

import CheckIcon from "@mui/icons-material/Check";
import RemoveIcon from "@mui/icons-material/Remove";
import { theme } from "../theme";
import { Link } from "react-router-dom";
import coin from "../assets/price/coinbase.svg";
import nasa from "../assets/price/nasa.svg";
import netf from "../assets/price/netflix.svg";
import pint from "../assets/price/pinterest.svg";
import spot from "../assets/price/spotify.svg";
import voda from "../assets/price/vodafone.svg";
import Questions from "../components/Price/Questions";

const styles = {
  logoutbk: {
    background: `linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)) center / cover,url(${hero})`,
    minHeight: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    p: 3,
    m: 2,
    borderRadius: "15px",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  flexRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const PricingPage = ({ setShowNav }) => {
  setShowNav(false);

  return (
    <Grid item>
      <Grid
        item
        sx={[
          styles.logoutbk,
          styles.flexColumn,
          { gap: 10, alignItems: "normal" },
        ]}
      >
        <Grid item>
          <AppBar
            position="static"
            color="transparent"
            sx={{ boxShadow: "none" }}
          >
            <Toolbar>
              <Link to="/" style={{ flexGrow: 1 }}>
                <Typography variant="body1" component="div" color="white">
                  Diamond Admin PRO
                </Typography>
              </Link>

              <Button
                variant="contained"
                color="blueColor"
                sx={{ pl: 3, pr: 3, borderRadius: "10px" }}
              >
                <Typography variant="body1" color="white">
                  BUY NOW
                </Typography>
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item sx={{ textAlign: "center", color: "white" }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Pick the best plan for you
          </Typography>
          <Typography variant="h6">
            You have Free Unlimited Updates and Premium Support on each package.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        sx={[
          styles.flexColumn,
          {
            alignItems: "normal",
            background: "white",
            ml: 6,
            mr: 6,
            mt: -10,
            mb: 10,
            pt: 10,
            pb: 10,
            borderRadius: "12px",
          },
        ]}
      >
        <Grid item sx={[styles.flexRow, {}]}>
          <Grid
            item
            sx={[
              styles.flexColumn,
              {
                p: 4,
                m: 4,
                width: "32%",
                borderRadius: "15px",
              },
            ]}
            // xs={4}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: -6,
                mb: 5,
                pl: 8,
                pr: 8,
                borderRadius: "20px",
                border: "none",
                boxShadow: "none",
              }}
            >
              <Typography color={theme.palette.primary.dark} fontWeight={700}>
                STARTER
              </Typography>
            </Button>
            <Grid
              item
              display="flex"
              sx={{ color: theme.palette.primary.dark, mb: 6 }}
            >
              <Typography variant="h6">$</Typography>
              <Typography variant="h3" fontWeight={700}>
                59
              </Typography>
              <Typography variant="h6" alignSelf="flex-end">
                /mo
              </Typography>
            </Grid>
            <Grid
              item
              sx={[
                styles.flexColumn,
                { alignItems: "flex-start", gap: 2, mb: 5 },
              ]}
            >
              {lists[0].desc.map((list, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    sx={[
                      styles.flexRow,
                      { gap: 2, color: theme.palette.primary.grey },
                    ]}
                  >
                    {list.icon}
                    <Typography variant="h6">{list.text}</Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Button
              variant="contained"
              fullWidth
              color="blackColor"
              sx={{ borderRadius: "10px" }}
            >
              <Typography color="white">JOIN</Typography>
            </Button>
          </Grid>
          <Grid
            item
            sx={[
              styles.flexColumn,
              {
                background:
                  "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                p: 4,
                m: 4,
                width: "32%",
                borderRadius: "15px",
              },
            ]}
            // xs={4}
          >
            <Button
              variant="contained"
              color="blueColor"
              sx={{
                mt: -6,
                mb: 5,
                pl: 8,
                pr: 8,
                borderRadius: "20px",
                border: "none",
                boxShadow: "none",
              }}
            >
              <Typography color="white" fontWeight={700}>
                PREMIUM
              </Typography>
            </Button>
            <Grid item display="flex" sx={{ color: "white", mb: 6 }}>
              <Typography variant="h6">$</Typography>
              <Typography variant="h3" fontWeight={700}>
                89
              </Typography>
              <Typography variant="h6" alignSelf="flex-end">
                /mo
              </Typography>
            </Grid>
            <Grid
              item
              sx={[
                styles.flexColumn,
                { alignItems: "flex-start", gap: 2, mb: 5 },
              ]}
            >
              {lists[1].desc.map((list, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    sx={[
                      styles.flexRow,
                      { gap: 2, color: "white", opacity: 0.7 },
                    ]}
                  >
                    {list.icon}
                    <Typography variant="h6">{list.text}</Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Button
              variant="contained"
              fullWidth
              color="blueColor"
              sx={{ borderRadius: "10px" }}
            >
              <Typography color="white">TRY PREMIUM</Typography>
            </Button>
          </Grid>
          <Grid
            item
            sx={[
              styles.flexColumn,
              {
                p: 4,
                m: 4,
                width: "32%",
                borderRadius: "15px",
              },
            ]}
            // xs={4}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: -6,
                mb: 5,
                pl: 8,
                pr: 8,
                borderRadius: "20px",
                border: "none",
                boxShadow: "none",
              }}
            >
              <Typography color={theme.palette.primary.dark} fontWeight={700}>
                STARTER
              </Typography>
            </Button>
            <Grid
              item
              display="flex"
              sx={{ color: theme.palette.primary.dark, mb: 6 }}
            >
              <Typography variant="h6">$</Typography>
              <Typography variant="h3" fontWeight={700}>
                99
              </Typography>
              <Typography variant="h6" alignSelf="flex-end">
                /mo
              </Typography>
            </Grid>
            <Grid
              item
              sx={[
                styles.flexColumn,
                { alignItems: "flex-start", gap: 2, mb: 5 },
              ]}
            >
              {lists[2].desc.map((list, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    sx={[
                      styles.flexRow,
                      { gap: 2, color: theme.palette.primary.grey },
                    ]}
                  >
                    {list.icon}
                    <Typography variant="h6">{list.text}</Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Button
              variant="contained"
              fullWidth
              color="blackColor"
              sx={{ borderRadius: "10px" }}
            >
              <Typography color="white">JOIN</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            color={theme.palette.primary.grey}
            sx={{ textAlign: "center", mb: 5 }}
          >
            More than 50+ brands trust Material
          </Typography>
        </Grid>
        <Grid item sx={[styles.flexRow, { maxWidth: "100vw", mb: 12 }]}>
          <Grid item>
            <img style={{ maxWidth: "220px" }} src={coin}></img>
          </Grid>
          <Grid item>
            <img style={{ maxWidth: "220px" }} src={nasa}></img>
          </Grid>
          <Grid item>
            <img style={{ maxWidth: "220px" }} src={netf}></img>
          </Grid>
          <Grid item>
            <img style={{ maxWidth: "220px" }} src={pint}></img>
          </Grid>
          <Grid item>
            <img style={{ maxWidth: "220px" }} src={spot}></img>
          </Grid>
          <Grid item>
            <img style={{ maxWidth: "220px" }} src={voda}></img>
          </Grid>
        </Grid>
        <Grid item>
          <Questions />
        </Grid>
      </Grid>
    </Grid>
  );
};

const lists = [
  {
    name: "STARTER",
    price: 59,
    desc: [
      {
        icon: <CheckIcon />,
        text: "2 team members",
      },
      {
        icon: <CheckIcon />,
        text: "20GB Cloud storage",
      },
      {
        icon: <RemoveIcon />,
        text: "Integration help",
      },
      {
        icon: <RemoveIcon />,
        text: "Sketch Files",
      },
      {
        icon: <RemoveIcon />,
        text: "API Access",
      },
      {
        icon: <RemoveIcon />,
        text: "Complete documentation",
      },
    ],
  },
  {
    name: "PREMIUM",
    price: 89,
    desc: [
      {
        icon: <CheckIcon />,
        text: "10 team members",
      },
      {
        icon: <CheckIcon />,
        text: "40GB Cloud storage",
      },
      {
        icon: <CheckIcon />,
        text: "Integration help",
      },
      {
        icon: <CheckIcon />,
        text: "Sketch Files",
      },
      {
        icon: <RemoveIcon />,
        text: "API Access",
      },
      {
        icon: <RemoveIcon />,
        text: "Complete documentation",
      },
    ],
  },
  {
    name: "ENTERPRISE",
    price: 99,
    desc: [
      {
        icon: <CheckIcon />,
        text: "Unlimited team members",
      },
      {
        icon: <CheckIcon />,
        text: "100GB Cloud storage",
      },
      {
        icon: <CheckIcon />,
        text: "Integration help",
      },
      {
        icon: <CheckIcon />,
        text: "Sketch Files",
      },
      {
        icon: <CheckIcon />,
        text: "API Access",
      },
      {
        icon: <CheckIcon />,
        text: "Complete documentation",
      },
    ],
  },
];

export default PricingPage;
