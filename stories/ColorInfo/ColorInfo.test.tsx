import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'

import { ColorInfo } from '../../components/Elements/ColorInfo';

describe("ColorInfo should convert the color vale with spec type", () => {
  // Render the Hex Value
  it("ColorInfo Element should render the Hex value", () => {
    render(<ColorInfo type="HEX" value="ff0000"/>)
    expect(screen.getByText("HEX"))
    expect(screen.getByText("ff0000"))
  })

  // Render the RGB Value
  it("ColorInfo Element should render the RGB value", () => {
    render(<ColorInfo type="RGB" value="ff0000"/>)
    expect(screen.getByText("RGB"))
    expect(screen.getByText("255-0-0"))
  })

  // Render the CMYK Value
  it("ColorInfo Element should render the CMYK value", () => {
    render(<ColorInfo type="CMYK" value="ff0000"/>)
    expect(screen.getByText("CMYK"))
    expect(screen.getByText("0-100-100-0"))
  })

  // Render the Pantone Color name
  it("ColorInfo Element should render the Pantone Color Name", () => {
    render(<ColorInfo type="Pantone" value="ff0000"/>)
    expect(screen.getByText("Pantone"))
    expect(screen.getByText("Red"))
  })
})