import { Grid } from "@mui/material";
import Content from "./components/Content";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import { theme } from "./theme";

const styles = {
  root: {
    background: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
    p: 3,
  },
};

function App() {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={2.3}>
        <LeftBar />
      </Grid>
      <Grid item xs={9.3}>
        <Header />
        <Content />
      </Grid>
    </Grid>
  );
}

export default App;
