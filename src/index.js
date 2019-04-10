import React from "react";
import ReactDom from "react-dom";
import Todo from "./todolist";
import Heading from "./heading";
import TodoBody from "./todoMain";
import "./index.css";

const test = document.querySelector("#container");
ReactDom.render(
  <div>
    <Heading />
    <TodoBody />
    <Todo />
  </div>,
  test
);
