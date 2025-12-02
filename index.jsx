import React from "react";
import { createRoot } from "react-dom/client";
import App from "React-comps/App";

const rootEl = document.getElementById("react");
const root = createRoot(rootEl);
root.render(<App />);