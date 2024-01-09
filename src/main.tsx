import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import store from "./ReduxToolkit/store";
import { QueryClient, QueryClientProvider } from "react-query";
const theme = createTheme({
  palette: {
    mode: "light",
  },
});
const root = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </Provider>,
  root
);
