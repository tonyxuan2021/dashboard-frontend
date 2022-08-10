import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { theme } from "../theme";
import product1 from "../assets/product/product1.jpg";
import product2 from "../assets/product/product2.jpg";
import product3 from "../assets/product/product3.jpg";
import product4 from "../assets/product/product4.jpg";
import product5 from "../assets/product/product5.jpg";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
    p: 2,
    maxWidth: "1500px",
    m: "0 auto",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexRow: {
    display: "flex",
  },

  ProfileContainer: {
    background: "white",
    mt: "-70px",
    ml: 3,
    mr: 3,
    p: 2,
    borderRadius: "15px",
  },

  radius: {
    borderRadius: "12px",
  },
};

export default function ProductPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  const [selectedImg, setSelectedImg] = useState(product1);

  const handleSelectedImg = (img) => {
    setSelectedImg(img);
  };

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={2.0}></Grid>
      <Grid item xs={matches ? 12 : 9.6}>
        <Grid item sx={[styles.flexColumn, { ml: 4 }]}>
          {/* this is the top grid */}
          <Grid item sx={{ background: "white", p: 4, borderRadius: "12px" }}>
            <Typography
              variant="h5"
              color={theme.palette.primary.dark}
              fontWeight={700}
              sx={{ mb: 4 }}
            >
              Product Details
            </Typography>
            <Grid item sx={styles.flexRow} justifyContent="space-between">
              <Grid item xs={6}>
                <Grid item sx={styles.flexColumn} gap={4}>
                  <Grid item>
                    <img
                      style={{
                        width: "100%",
                        borderRadius: "12px",
                        maxHeight: 550,
                      }}
                      src={selectedImg}
                    ></img>
                  </Grid>
                  <Grid
                    item
                    sx={[styles.flexRow, { maxHeight: 90 }]}
                    justifyContent="space-between"
                  >
                    {images.map((img) => {
                      return (
                        <Button onClick={() => setSelectedImg(img.img)}>
                          <img
                            style={{
                              width: "100%",
                              maxHeight: "100px",
                              borderRadius: "12px",
                            }}
                            src={img.img}
                          ></img>
                        </Button>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  color={theme.palette.primary.dark}
                >
                  Minimal Bar Stool
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* this is the bottom grid */}
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const images = [
  {
    img: product1,
  },
  {
    img: product2,
  },
  {
    img: product3,
  },
  {
    img: product4,
  },
  {
    img: product5,
  },
];
