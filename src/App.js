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
import ProductPage from "./pages/ProductPage";
import { styled } from "@mui/material/styles";

const styles = {
  root: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    p: 2,
  },
};

const LeftBarContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

function App() {
  const theme = useTheme();
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      {showNav && (
        <Grid container sx={styles.root}>
          <LeftBarContainer item lg={2.3}>
            <LeftBar />
          </LeftBarContainer>
          <Grid item lg={9.3}>
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
        <Route path="/product" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
