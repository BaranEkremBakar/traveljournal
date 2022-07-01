import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
const el = document.getElementById("root");
if (el === null) throw new Error("Root container missing in index.html");

const root = ReactDOM.createRoot(el);
root.render(<App />);
