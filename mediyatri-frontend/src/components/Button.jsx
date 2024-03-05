import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-lg",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-light_blue-900",
    blue_gray_400: "bg-blue_gray-400",
    amber_A400_51: "bg-amber-A400_51",
    gray_900: "bg-gray-900 text-white-A700",
    light_blue_900: "bg-light_blue-900 text-white-A700",
    deep_orange_300: "bg-deep_orange-300",
    blue_gray_400_01: "bg-blue_gray-400_01",
    amber_A400: "bg-amber-A400",
  },
};
const sizes = { xs: "p-1", sm: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "blue_gray_400",
    "amber_A400_51",
    "gray_900",
    "light_blue_900",
    "deep_orange_300",
    "blue_gray_400_01",
    "amber_A400",
  ]),
};

export { Button };
