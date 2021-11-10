import React from "react";
import { styled } from "../stitches.config";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string | undefined;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction, this documentation is also found in storybook!
 */
export const Button = ({
  color = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const Button = styled("button", {
    // base styles
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
    // variants
    variants: {
      color: {
        primary: {
          backgroundColor: "$primary",
          color: "hsl(225,37%,92%)",
          "&:hover": {
            backgroundColor: "hsl(252,78%,40%)",
          },
        },
        secondary: {
          backgroundColor: "$secondary",
          "&:hover": {
            backgroundColor: "hsl(206,10%,90%)",
          },
        },
      },
      size: {
        small: {
          fontSize: "12px",
          padding: "10px 15px",
        },
        medium: {
          fontSize: "14px",
          padding: "11px 20px",
        },
        large: {
          fontSize: "16px",
          padding: "12px 25px",
        },
      },
    },
  });
  return (
    <Button type="button" color={color} size={size} {...props}>
      {label}
    </Button>
  );
};
