import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  TextField,
  Badge,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { theme } from "../theme";
import { styled } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgb(26, 115, 232)",
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "rgb(26, 115, 232)",
    },
  },
});

const styles = {
  light: {
    color: theme.palette.primary.grey,
  },
  dark: {
    color: theme.palette.primary.dark,
  },
};

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          disableGutters={true}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid display="flex" alignItems="center">
            <Grid display="flex" flexDirection="column" sx={{ mr: 10 }}>
              <Grid display="flex" gap={1.5}>
                <HomeIcon sx={styles.light} />
                <Typography>/</Typography>
                <Typography sx={{ opacity: 0.5 }}>Dashboards</Typography>
                <Typography sx={styles.light}>/</Typography>
                <Typography>Analytics</Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" fontWeight={700} sx={styles.dark}>
                  Analytics
                </Typography>
              </Grid>
            </Grid>
            <MenuIcon
              fontSize="large"
              sx={[styles.light, { cursor: "pointer" }]}
            />
          </Grid>
          <Grid display="flex" alignItems="center" gap={3}>
            <Grid>
              <CssTextField
                variant="outlined"
                label="Search here"
              ></CssTextField>
            </Grid>
            <Grid display="flex" gap={2}>
              <AccountCircleIcon sx={styles.light} />
              <SettingsIcon sx={styles.light} />
              <Badge badgeContent={9} color="error">
                <NotificationsIcon sx={styles.light} />
              </Badge>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
