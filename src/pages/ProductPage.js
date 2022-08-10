import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Grid,
  LinearProgress,
  List,
  ListItem,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { theme } from "../theme";
import product1 from "../assets/product/product1.jpg";
import product2 from "../assets/product/product2.jpg";
import product3 from "../assets/product/product3.jpg";
import product4 from "../assets/product/product4.jpg";
import product5 from "../assets/product/product5.jpg";
import { fontSize } from "@mui/system";
import ProductDropDown from "../components/Product/ProductDropDown";
import ProductDropDownMaterial from "../components/Product/ProductDropDown";
import ProductDropDownColor from "../components/Product/ProductDropDownColor";
import ProductDropDownQty from "../components/Product/ProductDropDownQty";
import chair1 from "../assets/product/furniture1.jpeg";
import chair2 from "../assets/product/furniture2.jpeg";
import chair3 from "../assets/product/furniture3.jpeg";
import chair4 from "../assets/product/furniture4.jpeg";

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
        <Grid
          item
          sx={
            ([styles.flexColumn],
            { ml: 4, p: 4, background: "white", borderRadius: "12px" })
          }
        >
          {/* this is the top grid */}
          <Grid item sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              color={theme.palette.primary.dark}
              fontWeight={700}
              sx={{ mb: 4 }}
            >
              Product Details
            </Typography>
            <Grid item sx={styles.flexRow} justifyContent="space-between">
              <Grid item xs={6.3}>
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
              <Grid item xs={5} sx={styles.flexColumn} gap={3}>
                <Grid item>
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    color={theme.palette.primary.dark}
                  >
                    Minimal Bar Stool
                  </Typography>
                  <Rating
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: theme.palette.primary.grey,
                      },
                    }}
                    readOnly
                    defaultValue={4.5}
                    precision={0.5}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    color={theme.palette.primary.dark}
                    fontWeight={700}
                  >
                    Price
                  </Typography>
                  <Typography
                    variant="h5"
                    color={theme.palette.primary.dark}
                    fontWeight={700}
                    sx={{ mb: 2 }}
                  >
                    $1,419
                  </Typography>
                  <Button
                    variant="contained"
                    color="third"
                    sx={{ borderRadius: "10px", boxShadow: "none" }}
                  >
                    <Typography
                      variant="body2"
                      color="rgb(51, 149, 55)"
                      fontWeight={700}
                    >
                      IN STOCK
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Typography color={theme.palette.primary.grey}>
                    Description
                  </Typography>
                  <List
                    sx={{
                      color: theme.palette.primary.grey,
                      fontSize: 18,
                      mb: 4,
                    }}
                  >
                    <ListItem>
                      The most beautiful curves of this swivel stool adds an
                      elegant touch to any environment
                    </ListItem>
                    <ListItem>
                      Memory swivel seat returns to original seat position
                    </ListItem>
                    <ListItem>
                      Comfortable integrated layered chair seat cushion design
                    </ListItem>
                    <ListItem>Fully assembled! No assembly required</ListItem>
                  </List>
                  <Grid
                    item
                    sx={[styles.flexRow, { mb: 4 }]}
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Typography
                        sx={{ ml: "10px" }}
                        color={theme.palette.primary.grey}
                      >
                        Frame Material
                      </Typography>
                      <ProductDropDownMaterial />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ ml: "10px" }}
                        color={theme.palette.primary.grey}
                      >
                        Color
                      </Typography>
                      <ProductDropDownColor />
                    </Grid>
                    <Grid item>
                      <Typography
                        sx={{ ml: "10px" }}
                        color={theme.palette.primary.grey}
                      >
                        Quantity
                      </Typography>
                      <ProductDropDownQty />
                    </Grid>
                  </Grid>
                  <Button
                    color="blueColor"
                    variant="contained"
                    sx={{ p: 1, pl: 5, pr: 5, borderRadius: "10px" }}
                  >
                    <Typography color="white">ADD TO CART</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* this is the bottom grid */}
          <Grid item>
            <Typography
              variant="h5"
              color={theme.palette.primary.dark}
              fontWeight={700}
              sx={{ mb: 3 }}
            >
              Other Products
            </Typography>
            <Grid
              item
              sx={[
                styles.flexRow,
                { mb: 1, pb: 3, borderBottom: "1px solid lightgrey" },
              ]}
            >
              <Grid item xs={4}>
                <Typography variant="body2" color={theme.palette.primary.grey}>
                  PRODUCT
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2" color={theme.palette.primary.grey}>
                  PRICE
                </Typography>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="body2" color={theme.palette.primary.grey}>
                  REVIEW
                </Typography>
              </Grid>
              <Grid item xs={2.5}>
                <Typography variant="body2" color={theme.palette.primary.grey}>
                  AVAILABILITY
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="body2" color={theme.palette.primary.grey}>
                  ID
                </Typography>
              </Grid>
            </Grid>
            {chairs.map((chair) => {
              return (
                <Grid
                  item
                  sx={[
                    styles.flexRow,
                    { p: 1.5, borderBottom: "1px solid lightgrey" },
                  ]}
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={4}
                    sx={[styles.flexRow, { alignItems: "center" }]}
                    gap={2}
                  >
                    <Grid item sx={{ width: "18%" }}>
                      <img
                        style={{
                          width: "57px",
                          height: "57px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        src={chair.img}
                      ></img>
                    </Grid>
                    <Typography
                      color={theme.palette.primary.dark}
                      fontWeight={700}
                    >
                      {chair.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography color={theme.palette.primary.grey}>
                      {chair.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.5}>
                    <Typography>
                      <Rating
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: theme.palette.primary.grey,
                          },
                        }}
                        readOnly
                        defaultValue={chair.review}
                        precision={0.5}
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={2.5}>
                    <Typography>
                      <LinearProgress
                        color={chair.bar > 70 ? "secondary" : "warning"}
                        sx={{ width: "70%", height: "8px" }}
                        variant="determinate"
                        value={chair.bar}
                      />
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography color={theme.palette.primary.grey}>
                      {chair.id}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
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

const chairs = [
  {
    name: "Christopher Knight Home",
    img: chair1,
    price: "$89.53",
    review: 4.5,
    bar: 80,
    id: 230019,
  },
  {
    name: "Bar Height Swivel Barstool",
    img: chair2,
    price: "$99.99",
    review: 5,
    bar: 90,
    id: 87120,
  },
  {
    name: "Signature Design by Ashley",
    img: chair3,
    price: "$129",
    review: 4.5,
    bar: 60,
    id: 412301,
  },
  {
    name: "Modern Square",
    img: chair4,
    price: "$59.99",
    review: 4.5,
    bar: 40,
    id: 115701,
  },
];
