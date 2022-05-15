import React from "react";

import ReactDom from "react-dom";

import UserCv from "./UserCv";
import "./index.css"

const rooElement = document.querySelector("#root");

ReactDom.render(<UserCv />, rooElement);