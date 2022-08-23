import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import house_1 from "../../assets/content/house_1.jpg";
import house_2 from "../../assets/content/house_2.jpg";
import house_3 from "../../assets/content/house_3.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { theme } from "../../theme";
import { styled } from "@mui/material/styles";

const styles = {
  flexRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  bolghadow: {
    bolghadow:
      "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
  },
  grey: {
    color: theme.palette.primary.grey,
  },
  dark: {
    color: theme.palette.primary.dark,
  },
};

const ResidenceBox = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: 100,
  },
}));

const Residence = () => {
  return (
    <Grid container item sx={styles.flexRow}>
      {houses.map((house) => {
        return (
          <ResidenceBox
            item
            sx={[
              styles.flexColumn,
              styles.bolghadow,
              { background: "white", borderRadius: "15px" },
            ]}
            lg={3.8}
            sm={5.5}
            key={house.id}
          >
            <Grid item sx={[{ p: 3, mt: "-60px" }]}>
              <img
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  bolghadow: "5px 5px 30px",
                }}
                src={house.img}
              ></img>
            </Grid>
            <Grid item sx={[styles.flexColumn, { gap: 2, minHeight: "235px" }]}>
              <Typography textAlign="center" variant="h5" color={styles.dark}>
                {house.title}
              </Typography>
              <Typography
                sx={{ pl: 3, pr: 3, pb: 3, opacity: 0.6 }}
                textAlign="center"
                variant="h6"
                color={styles.grey}
              >
                {house.content}
              </Typography>
            </Grid>
            <Divider variant="middle" sx={{ opacity: 0.75 }} />
            <Grid item sx={[styles.flexRow, { p: 3 }]}>
              <Typography color={styles.grey}>
                ${house.price.toLocaleString()}/night
              </Typography>
              <Grid item sx={[styles.flexRow, { gap: 1 }]}>
                <LocationOnIcon sx={styles.grey} />
                <Typography color={styles.grey}>{house.location}</Typography>
              </Grid>
            </Grid>
          </ResidenceBox>
        );
      })}
    </Grid>
  );
};

const houses = [
  {
    id: 1,
    img: house_1,
    title: "Cozy 5 Stars Apartment",
    content:
      "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
    price: 899,
    location: "Barcelona, Spain",
  },
  {
    id: 2,
    img: house_2,
    title: "Office Studio",
    content:
      "The place is close to Metro Station and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the night life in London, UK.",
    price: 1119,
    location: "London, UK",
  },
  {
    id: 3,
    img: house_3,
    title: "Beautiful Castle",
    content:
      "The place is close to Metro Station and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Milan.",
    price: 459,
    location: "Milan, Italy",
  },
];

export default Residence;
