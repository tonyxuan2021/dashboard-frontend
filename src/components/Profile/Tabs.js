// import { Box, Tab, Tabs } from "@mui/material";
import { Tab, Tabs, Box, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../theme";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";

const styles = {
  tabColor: {
    color: theme.palette.primary.dark,
  },
};

const ProfileTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        background: "rgb(248, 249, 250)",
        borderRadius: "15px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          hidden: true,
        }}
        sx={{
          "& button:focus": {
            background: "white",
          },
          p: 0.5,
        }}
      >
        <Tab
          label="App"
          icon={<HomeIcon />}
          style={styles.tabColor}
          sx={{ borderRadius: "15px", minHeight: 0 }}
          iconPosition="start"
        ></Tab>

        <Tab
          label="Message"
          icon={<EmailIcon />}
          style={styles.tabColor}
          sx={{ borderRadius: "15px", minHeight: 0 }}
          iconPosition="start"
        ></Tab>
        <Tab
          label="Setting"
          icon={<SettingsIcon />}
          style={styles.tabColor}
          sx={{ borderRadius: "15px", minHeight: 0 }}
          iconPosition="start"
        ></Tab>
      </Tabs>
    </Box>
  );
};

export default ProfileTab;
