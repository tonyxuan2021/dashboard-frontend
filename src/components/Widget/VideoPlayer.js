import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import music from "../../assets/widget/live-from-space.jpeg";
import { theme } from "../../theme";

export default function VideoPlayer() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        mb: 4,
        backgroundImage: `linear-gradient(195deg, rgba(66, 66, 74, 0.85), rgba(25, 25, 25, 0.85)), url(${music})`,
        borderRadius: "15px"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "0 auto" }}>
          <Typography component="div" variant="h5" color="white">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            component="div"
            sx={{ opacity: 0.5 }}
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pl: 1,
            pb: 1,
          }}
        >
          <IconButton aria-label="previous" sx={{ color: "white" }}>
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause" sx={{ color: "white" }}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next" sx={{ color: "white" }}>
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      {/* <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      /> */}
    </Card>
  );
}
