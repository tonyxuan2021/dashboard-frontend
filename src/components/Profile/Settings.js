import { Divider, Grid, Switch, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CreateIcon from "@mui/icons-material/Create";
import avatar1 from "../../assets/profile/avatar1.jpg";
import avatar2 from "../../assets/profile/avatar2.jpg";
import avatar3 from "../../assets/profile/avatar3.jpg";
import avatar4 from "../../assets/profile/avatar4.jpg";
import avatar5 from "../../assets/profile/avatar5.jpg";

const styles = {
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fontGrey: {
    color: theme.palette.primary.grey,
    opacity: 1,
  },
};

const Settings = () => {
  return (
    <Grid container item sx={[styles.flexRow, { alignItems: "flex-start" }]}>
      <Grid item xs={4} sx={{ p: 2 }}>
        <Typography
          variant="h6"
          color={theme.palette.primary.dark}
          fontWeight={700}
          sx={{ mb: 5 }}
        >
          Platform Settings
        </Typography>
        <Typography
          variant="body2"
          sx={[styles.fontGrey, { mb: 1, fontWeight: 700 }]}
        >
          ACCOUNT
        </Typography>
        <Grid item sx={[styles.flexColumn, { gap: 2, mb: 4 }]}>
          <Grid item sx={[styles.flexRow]}>
            <Switch defaultChecked color="info" />
            <Typography sx={styles.fontGrey}>
              Email me when someone follows me
            </Typography>
          </Grid>
          <Grid item sx={styles.flexRow}>
            <Switch color="info" />
            <Typography sx={styles.fontGrey}>
              Email me when someone follows me
            </Typography>
          </Grid>
          <Grid item sx={styles.flexRow}>
            <Switch defaultChecked color="info" />
            <Typography sx={styles.fontGrey}>
              Email me when someone follows me
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={[styles.fontGrey, { mb: 1, fontWeight: 700 }]}
        >
          APPLICATION
        </Typography>
        <Grid item sx={[styles.flexColumn, { gap: 2 }]}>
          <Grid item sx={[styles.flexRow]}>
            <Switch color="info" />
            <Typography sx={styles.fontGrey}>
              Email me when someone follows me
            </Typography>
          </Grid>
          <Grid item sx={styles.flexRow}>
            <Switch defaultChecked color="info" />
            <Typography sx={styles.fontGrey}>
              Email me when someone follows me
            </Typography>
          </Grid>
          <Grid item sx={styles.flexRow}>
            <Switch color="info" />
            <Typography sx={styles.fontGrey}>
              Email me when someone follows me
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{ p: 2 }}>
        <Grid item sx={[styles.flexRow, { mb: 3 }]}>
          <Typography
            variant="h6"
            color={theme.palette.primary.dark}
            fontWeight={700}
          >
            Profile Information
          </Typography>
          <Grid item>
            <CreateIcon />
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          lineHeight={2}
          sx={[styles.fontGrey, { mb: 6 }]}
        >
          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </Typography>
        <Grid item sx={[styles.flexColumn, { gap: 2 }]}>
          <Grid
            item
            sx={[styles.flexRow, { justifyContent: "flex-start", gap: 2 }]}
          >
            <Typography
              variant="body1"
              color={theme.palette.primary.dark}
              fontWeight={700}
            >
              Full Name:
            </Typography>
            <Typography variant="body1" color={theme.palette.primary.grey}>
              Alec M. Thompson
            </Typography>
          </Grid>
          <Grid
            item
            sx={[styles.flexRow, { justifyContent: "flex-start", gap: 2 }]}
          >
            <Typography
              variant="body1"
              color={theme.palette.primary.dark}
              fontWeight={700}
            >
              Mobile:
            </Typography>
            <Typography variant="body1" color={theme.palette.primary.grey}>
              (44) 123 1234 123
            </Typography>
          </Grid>
          <Grid
            item
            sx={[styles.flexRow, { justifyContent: "flex-start", gap: 2 }]}
          >
            <Typography
              variant="body1"
              color={theme.palette.primary.dark}
              fontWeight={700}
            >
              Email:
            </Typography>
            <Typography variant="body1" color={theme.palette.primary.grey}>
              alecthompson@mail.com
            </Typography>
          </Grid>
          <Grid
            item
            sx={[styles.flexRow, { justifyContent: "flex-start", gap: 2 }]}
          >
            <Typography
              variant="body1"
              color={theme.palette.primary.dark}
              fontWeight={700}
            >
              Location:
            </Typography>
            <Typography variant="body1" color={theme.palette.primary.grey}>
              USA
            </Typography>
          </Grid>
          <Grid
            item
            sx={[styles.flexRow, { justifyContent: "flex-start", gap: 2 }]}
          >
            <Typography
              variant="body1"
              color={theme.palette.primary.dark}
              fontWeight={700}
            >
              Social:
            </Typography>
            <Grid item sx={[styles.flexRow, { gap: 2 }]}>
              <FacebookIcon color="action" />
              <TwitterIcon color="action" />
              <InstagramIcon color="action" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{ p: 2 }}>
        <Typography
          variant="h6"
          color={theme.palette.primary.dark}
          fontWeight={700}
          sx={{ mb: 3 }}
        >
          Conversations
        </Typography>
        <Grid item sx={[styles.flexColumn, {p:2}]}>
          {people.map((person, index) => {
            return (
              <Grid key={index} item sx={[styles.flexRow, { mb: 2 }]}>
                <Grid item sx={{ width: "60px" }}>
                  <img
                    style={{ width: "100%", borderRadius: "50%" }}
                    src={person.img}
                  ></img>
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="h6"
                    color={theme.palette.primary.dark}
                    fontWeight={700}
                  >
                    {person.name}
                  </Typography>
                  <Typography color={theme.palette.primary.grey}>
                    {person.text}
                  </Typography>
                </Grid>
                <Typography
                  color={theme.palette.blueColor.main}
                  fontWeight={700}
                >
                  REPLY
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const people = [
  {
    name: "Sophie B.",
    text: "Hi! I need more information..",
    img: avatar1,
  },
  {
    name: "Anne Marie",
    text: "Awesome work, can you..",
    img: avatar2,
  },
  {
    name: "Ivanna",
    text: "About files I can..",
    img: avatar3,
  },
  {
    name: "Peterson",
    text: "Have a great afternoon..",
    img: avatar4,
  },
  {
    name: "Nick Daniel",
    text: "Hi! I need more information..",
    img: avatar5,
  },
];

export default Settings;
