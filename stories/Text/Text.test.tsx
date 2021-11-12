import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'

import { Text } from '../../components/Utils/Text';

describe("Text Component should be render child Element", () => {
  // Text Render
  it("Expect Text Component render text: 'Heading1 Text'", () => {
    render(<Text variant="h1" children="Heading1 Text"/>)
    expect(screen.getByText("Heading1 Text"))
  })
})
