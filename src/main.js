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
const root = document.getElementById("root");
const queryClient = new QueryClient();
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement(QueryClientProvider, { client: queryClient },
            React.createElement(App, null)))), root);
