import React from "react";
import { CSS, styled } from "../../stitches.config";

export const StyledCard = styled('div', {
  variants: {
    type: {
      outlined: {
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)'
      },
      inner: {
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)'
      }
    }
  },

  defaultVariants: {
    type: 'inner'
  }
})

export interface CardProps {
  /**
   * set type of the card
   */
  type?: "outlined" | "inner",

  /**
   * set the css
   */
  css?: any,
  /**
   * Show the children elemnt
   */
  children?: React.ReactNode
}

export const Card = ({type, css, children}: CardProps) => (
  <StyledCard type={type} css={css}>
    {children}
  </StyledCard>
)