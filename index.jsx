import React from "react";
import { createRoot } from "react-dom/client";
import App from "React comp-s/App";

const rootEl = document.getElementById("react");
const root = createRoot(rootEl);
root.render(<App />);