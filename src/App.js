import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { theme } from "./theme";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import ProfilePage from "./pages/ProfilePage";

const styles = {
  root: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
    p: 2,
    maxWidth: "1500px",
    m: "0 auto",
  },
};

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <BrowserRouter>
      <Grid container sx={styles.root}>
        <Grid item xs={2.3}>
          {matches ? null : <LeftBar />}
        </Grid>
        <Grid item xs={matches ? 12 : 9.3}>
          <Header />
        </Grid>
      </Grid>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
