import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'

import { Status } from '../../components/Elements/ColorStatus';

describe("The Status Elemnet should return the PASS or FAIL text", () => {
  // In case the Color status is true, should render the "PASS"
  it("The Status Element should return the PASS", () => {
    render(<Status passed={true}/>)
    expect(screen.getByText("PASS"))
  })

  // In case the Color status is false, should render the "FAIL"
  it("The Status Element should return the FAIL", () => {
    render(<Status passed={false}/>)
    expect(screen.getByText("FAIL"))
  })
})