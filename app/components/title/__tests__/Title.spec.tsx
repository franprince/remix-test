import React from 'react'
import { screen, render } from "@testing-library/react";
import { Title } from "../index";

describe("pindonga", () => {
  it("Should render title", () => {
    render(<Title title="Holi" />);
    const titleText = screen.getByText(/holi/i);
    expect(titleText).toBeInTheDocument();
  });
});
