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

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
    borderRadius: 4,
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
              <DiamondIcon />
            </ListItemIcon>
            <ListItemText primary="Diamond Co." />
            <KeyboardArrowDownIcon />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        variant="middle"
        sx={{
          background: "white",
        }}
      />
      <List>
        <ListItem>
          <ListItemButton>
            <Avatar src="https://via.placeholder.com/50" />
            <ListItemText primary="Brokklyn Alice" sx={styles.light} />
            <KeyboardArrowDownIcon sx={styles.light} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        variant="middle"
        sx={{
          background: "white",
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
        <Typography color="white">PAGES</Typography>

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
