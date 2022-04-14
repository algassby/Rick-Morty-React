import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";
import Cart from "../src/components/Cart";
import Home from "../src/components/Home";
import Product from "../src/components/Product";

let container: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("test Cart component", () => {
  act(() => {
    ReactDOM.render(
      <Product data={{ name: "Figurine de Rick Sanchez", quantity: 10 }} />,
      container
    );
  });
  const title = screen.getByText(/Figurine de Rick Sanchez/i);
  expect(title).toBeInTheDocument();
  expect(container.getElementsByClassName("touch").length);

  const quantity = screen.getByText(/10/i);
  expect(quantity).toBeInTheDocument();
  expect(container.getElementsByClassName("touch").length);
});

test("test Cart component", () => {
  act(() => {
    ReactDOM.render(<Cart setRoute={() => console.log("")} />, container);
  });
  const title = screen.getByText(/Figurine de/i);
  expect(title).toBeInTheDocument();
  expect(container.getElementsByClassName("touch").length);

  const quantity = screen.getByText(/Quantitée/i);
  expect(quantity).toBeInTheDocument();
  expect(container.getElementsByClassName("touch").length);
});

test("test Home component", () => {
  act(() => {
    ReactDOM.render(<Home setRoute={() => console.log("")} />, container);
  });
  const title = screen.getByText(/Aller sur panier/i);
  expect(title).toBeInTheDocument();
  expect(container.getElementsByClassName("touch").length);

  const quantity = screen.getByText(/Quantitée/i);
  expect(quantity).toBeInTheDocument();
  expect(container.getElementsByClassName("touch").length);
});
