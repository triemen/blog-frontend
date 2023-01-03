import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN || "undefined domain"}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || "undefined client id"}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
