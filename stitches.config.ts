// import { createCss } from "@stitches/react";

import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  config
} = createStitches({
  theme: {
    ...{},
    colors: {
      secondary: "hsl(206,10%,76%)",
      primary: "hsl(252,78%,60%)",
    },
    space: {},
    fontSizes: {
      body1: '1rem',
      body2: '0.875rem',
      button: '0.875rem',
      caption: '0.75rem',
      h1: '6rem',
      h2: '3.75rem',
      h3: '3rem',
      h4: '2rem',
      h5: '1.5rem',
      h6: '1.25rem',
      inherit: 'trasparent',
      overline: '0.75rem',
      subtitle1: '1rem',
      subtitle2: '0.875rem'
    },
    fonts: {},
    fontWeights: {},
    lineHeights: {
      overline: '2rem',
      body1: '1.5rem',
      body2: '1.25rem'
    },
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

export type CSS = Stitches.CSS<typeof config>

export const globalStyles = (mediaArray: any) =>
  globalCss({
    '@font-face': [
      {
        fontFamily: '"Work Sans", sans-serif'
      }
    ],
    '*': { margin: 0, padding: 0 },
  })