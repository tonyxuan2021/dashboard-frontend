import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import project1 from "../../assets/profile/home-decor-1.webp";
import project2 from "../../assets/profile/home-decor-2.webp";
import project3 from "../../assets/profile/home-decor-3.webp";
import project4 from "../../assets/profile/home-decor-4.jpeg";
import team1 from "../../assets/profile/team-1.jpg";
import team2 from "../../assets/profile/team-2.jpg";
import team3 from "../../assets/profile/team-3.jpg";
import team4 from "../../assets/profile/team-4.jpg";

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
};

const Projects = () => {
  return (
    <Grid item sx={{ p: 2 }}>
      <Typography
        variant="h6"
        color={theme.palette.primary.dark}
        fontWeight={700}
        sx={{ mb: 1 }}
      >
        Projects
      </Typography>
      <Typography sx={{ mb: 5 }} color={theme.palette.primary.grey}>
        Architects design houses
      </Typography>
      <Grid item sx={[styles.flexRow, { gap: 5 }]}>
        {projects.map((project, index) => {
          return (
            <Grid key={index} item xs={3} sx={[styles.flexColumn, { gap: 2 }]}>
              <Grid item>
                <img
                  style={{ width: "100%", borderRadius: "15px" }}
                  src={project.img}
                ></img>
              </Grid>
              <Typography color={theme.palette.primary.grey}>
                {project.num}
              </Typography>
              <Typography
                variant="h5"
                color={theme.palette.primary.dark}
                fontWeight={700}
              >
                {project.title}
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.primary.grey}
                sx={{ mb: 2 }}
              >
                {project.desc}
              </Typography>
              <Grid
                item
                sx={[styles.flexRow, { justifyContent: "flex-start" }]}
              >
                <Button
                  size="large"
                  variant="outlined"
                  color="blueColor"
                  sx={{
                    display: "block",
                    pl: 3.5,
                    pr: 3.5,
                    border: "2px solid",
                    borderRadius: "10px",
                    zIndex: 0,
                  }}
                >
                  <Typography fontWeight={700}>VIEW </Typography>
                  <Typography fontWeight={700}>PROJECT </Typography>
                </Button>
                <Grid item sx={{ ml: -2, zIndex: 1 }}>
                  <img
                    style={{
                      width: "25px",
                      borderRadius: "50%",
                      border: "3px solid white",
                    }}
                    src={team1}
                  ></img>
                  <img
                    style={{
                      width: "25px",
                      borderRadius: "50%",
                      border: "3px solid white",
                      marginLeft: "-16px",
                    }}
                    src={team2}
                  ></img>
                  <img
                    style={{
                      width: "25px",
                      borderRadius: "50%",
                      border: "3px solid white",
                      marginLeft: "-16px",
                    }}
                    src={team3}
                  ></img>
                  <img
                    style={{
                      width: "25px",
                      borderRadius: "50%",
                      border: "3px solid white",
                      marginLeft: "-16px",
                    }}
                    src={team4}
                  ></img>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

const projects = [
  {
    num: "Project #2",
    title: "Modern",
    desc: "As Uber works through a huge amount of internal management turmoil.",
    img: project1,
  },
  {
    num: "Project #1",
    title: "Scandinavian",
    desc: "Music is something that everyone has their own specific opinion about.",
    img: project2,
  },
  {
    num: "Project #3",
    title: "Minimalist",
    desc: "Different people have different taste, and various types of music.",
    img: project3,
  },
  {
    num: "Project #4",
    title: "Gothic",
    desc: "Why would anyone pick blue over pink? Pink is obviously a better color.",
    img: project4,
  },
];

export default Projects;
