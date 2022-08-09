import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { theme } from "./theme";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import ProfilePage from "./pages/ProfilePage";
import LogoutPage from "./pages/LogoutPage";
import { useState } from "react";
import PricingPage from "./pages/PricingPage";
import WidgetPage from "./pages/WidgetPage";
import TablePage from "./pages/TablePage";

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
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      {showNav && (
        <Grid container sx={styles.root}>
          <Grid item xs={2.3}>
            {matches ? null : <LeftBar />}
          </Grid>
          <Grid item xs={matches ? 12 : 9.3}>
            <Header />
          </Grid>
        </Grid>
      )}
      <Routes>
        <Route
          path="/"
          element={<DashboardPage setShowNav={setShowNav} />}
        ></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route
          path="/logout"
          element={<LogoutPage setShowNav={setShowNav} />}
        ></Route>
        <Route
          path="/price"
          element={<PricingPage setShowNav={setShowNav} />}
        ></Route>
        <Route path="/widget" element={<WidgetPage />}></Route>
        <Route path="/table" element={<TablePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
