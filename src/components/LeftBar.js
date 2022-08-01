import {
  Grid,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Mail";
import ImageIcon from "@mui/icons-material/Image";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DiamondIcon from "@mui/icons-material/Diamond";
import { theme } from "../theme";
import avatarImg from "../assets/content/avatar.jpeg";

const styles = {
  container: {
    height: "52rem",
    width: "19rem",
    background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
    borderRadius: 4,
    position: "fixed",
  },
  light: {
    color: theme.palette.primary.light,
  },
};

const LeftBar = () => {
  return (
    <Grid sx={styles.container}>
      <List>
        <ListItem sx={{ color: "white" }}>
          <ListItemButton>
            <ListItemIcon sx={{ color: "white" }}>
              <DiamondIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Diamond Admin PRO" />
            <KeyboardArrowDownIcon />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        variant="middle"
        sx={{
          background: "white",
          opacity: 0.75,
        }}
      />
      <List>
        <ListItem>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "space-between", pl: 1.5 }}
          >
            <Avatar
              sx={{ width: "40px", height: "40px", mr: 2.5 }}
              src={avatarImg}
            />
            <ListItemText primary="Brooklyn Alice" sx={styles.light} />
            <KeyboardArrowDownIcon sx={styles.light} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        variant="middle"
        sx={{
          background: "white",
          opacity: 0.75,
        }}
      />
      <List>
        <ListItem sx={{ color: "white" }}>
          <ListItemButton>
            <ListItemIcon sx={{ color: "white" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboards" sx={styles.light} />
            <KeyboardArrowDownIcon sx={styles.light} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <Typography color="white" pl="18px">
          PAGES
        </Typography>

        {items.map((item, index) => (
          <ListItem key={index} sx={{ color: "white" }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText sx={styles.light} primary={item.text} />
              <KeyboardArrowDownIcon sx={styles.light} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

const items = [
  {
    icon: <ImageIcon />,
    text: "Pages",
  },
  {
    icon: <AppsIcon />,
    text: "Applications",
  },
  {
    icon: <ShoppingBasketIcon />,
    text: "Ecommerce",
  },
  {
    icon: <BeenhereIcon />,
    text: "Authentication",
  },
];

export default LeftBar;
