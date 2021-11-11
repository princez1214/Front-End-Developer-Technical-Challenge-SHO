import React from 'react'
import { CSS, styled } from '../../stitches.config'
import type * as Stitches from '@stitches/react'

export const StyledText = styled('p', {
  margin: 0,

  variants: {
    variant: {
      body1: {
        fontSize: '$body1'
      },
      body2: {
        fontSize: '$body2'
      },
      button: {
        fontSize: '$button'
      },
      caption: {
        fontSize: '$caption'
      },
      h1: {
        fontSize: '$h1'
      },
      h2: {
        fontSize: '$h2'
      },
      h3: {
        fontSize: '$h3'
      },
      h4: {
        fontSize: '$h4'
      },
      h5: {
        fontSize: '$h5'
      },
      h6: {
        fontSize: '$h6'
      },
      inherit: {
        fontSize: '$inherit'
      },
      overline: {
        fontSize: '$overline'
      },
      subtitle1: {
        fontSize: '$subtitle1'
      },
      subtitle2: {
        fontSize: '$subtitle2'
      }
    }
  },

  defaultVariants: {
    variant: 'body1'
  }
})

type TextProp = {
  variant: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2'
  children?: React.ReactNode
  css?: any
} & Stitches.VariantProps<typeof StyledText>

export const Text: React.FC<TextProp> = (({variant, children, css}: TextProp) => (
  <StyledText variant={variant} css={css}>
    {children}
  </StyledText>
))