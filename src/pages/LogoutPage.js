import {
  AppBar,
  Button,
  Grid,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import hero from "../assets/logout/logoutbk.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { theme } from "../theme";
import { Link } from "react-router-dom";

const styles = {
  logoutbk: {
    background: `linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)) center / cover,url(${hero})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    p: 5,
  },
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

const LogoutPage = ({ setShowNav }) => {
  setShowNav(false);
  return (
    <Grid container item sx={[styles.logoutbk, styles.flexColumn]}>
      <Grid item sx={{ mb: 15 }}>
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
      <Grid
        item
        sx={{
          m: " 0 auto",
          width: "450px",
          background: "white",
          borderRadius: "15px",
        }}
      >
        <Grid
          item
          sx={{
            textAlign: "center",
            background:
              "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            m: "-30px",
            p: 5,
            ml: 4,
            mr: 4,
            borderRadius: "15px",
          }}
        >
          <Typography
            color="white"
            variant="h5"
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            Sign in
          </Typography>
          <Grid
            item
            sx={[styles.flexRow, { justifyContent: "center", gap: 3 }]}
          >
            <FacebookIcon fontSize="medium" sx={{ color: "white" }} />
            <GitHubIcon fontSize="medium" sx={{ color: "white" }} />
            <GoogleIcon fontSize="medium" sx={{ color: "white" }} />
          </Grid>
        </Grid>
        <Grid item sx={[styles.flexColumn, { p: 5, gap: 2, mt: 5 }]}>
          <TextField
            label="email"
            variant="outlined"
            color="blueColor"
          ></TextField>
          <TextField
            label="password"
            variant="outlined"
            color="blueColor"
          ></TextField>
          <Grid
            item
            sx={[styles.flexRow, { justifyContent: "flex-start", mb: 1 }]}
          >
            <Switch></Switch>
            <Typography color={theme.palette.primary.grey}>
              Remember me
            </Typography>
          </Grid>
          <Button
            variant="contained"
            color="blueColor"
            sx={{ p: 1.5, borderRadius: "12px", mb: 5 }}
          >
            <Typography color="white">SIGN IN</Typography>
          </Button>
          <Grid item sx={[styles.flexRow, { justifyContent: "center" }]}>
            <Typography
              variant="h6"
              color={theme.palette.primary.grey}
              sx={{ mr: 1 }}
            >
              Don't have an account?
            </Typography>
            <Typography
              variant="h6"
              color={theme.palette.blueColor.main}
              fontWeight={700}
            >
              {" "}
              Sign up
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogoutPage;
