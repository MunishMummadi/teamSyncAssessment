import React from "react";
import ReactDOMClient from "react-dom/client";
import { Talentsync } from "./screens/Talentsync";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Talentsync />);
