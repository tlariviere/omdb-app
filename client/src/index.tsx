import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./containers/App";
import queryDefaultOptions from "./constants/queryDefaultOptions";
import "./styles/globals.scss";

const queryClient = new QueryClient({
  defaultOptions: queryDefaultOptions,
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
