import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const BorderRadius = {
  borderRadius: "10px",
};
function App() {
  return (
    <Paper
      elevation={10}
      sx={{
        my: 4,
        height: "auto",
        width: "80%",
        mx: "auto",
        backgroundColor: "#5C9CE5",
        borderRadius: "10px",
      }}
    >
      <Grid container>
        <Grid item xs={6} md={3} sx={{ backgroundColor: "transparent" }}>
          Cities
        </Grid>
        <Grid item container xs={12} md={9}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#E4F1FF",
                width: "100%",
                height: "15rem",
                alignItems: "center",
                textAlign: "center",
                p: 3,
              }}
            >
              Search box
              <Paper elevation={5}>Forecast Weather</Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#CDE1FC",
                p: 2,
                width: "100%",
                height: "15rem",
              }}
            >
              Current weather
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
