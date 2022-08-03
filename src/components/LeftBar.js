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
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DiamondIcon from "@mui/icons-material/Diamond";
import { theme } from "../theme";
import avatarImg from "../assets/content/avatar.jpeg";
import { Link } from "react-router-dom";

const styles = {
  container: {
    // height: "52rem",
    height: "96vh",
    width: "16rem",
    background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
    borderRadius: 4,
    position: "fixed",
  },
  light: {
    color: theme.palette.primary.light,
  },
};

const LeftBar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const handleClick = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <Grid sx={styles.container}>
      <List>
        <ListItem sx={{ color: "white" }}>
          <Link to="/" className="link">
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <DiamondIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Diamond Admin PRO" />
            </ListItemButton>
          </Link>
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
            onClick={handleClick}
          >
            <Avatar
              sx={{ width: "40px", height: "40px", mr: 2.5 }}
              src={avatarImg}
            />
            <ListItemText primary="Brooklyn Alice" sx={styles.light} />
            <KeyboardArrowDownIcon sx={styles.light} />
          </ListItemButton>
        </ListItem>
        {openProfile && (
          <List>
            <ListItem>
              <ListItemButton sx={{ display: "flex", gap: 4.5 }}>
                <Typography variant="h6" color="white" sx={{ pl: 0.5 }}>
                  M
                </Typography>
                <Link to="/profile">
                  <ListItemText primary="My Profile" sx={styles.light} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ display: "flex", gap: 5 }}>
                <Typography variant="h6" color="white" sx={{ pl: 0.5 }}>
                  L
                </Typography>
                <Link to="/logout" className="link">
                  <ListItemText primary="Logout" sx={styles.light} />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        )}
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
