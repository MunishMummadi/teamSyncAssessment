import { CheckItemText } from ".";

export default {
  title: "Components/CheckItemText",
  component: CheckItemText,
  argTypes: {
    type: {
      options: ["line", "filled", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["md", "sm", "lg", "xl"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "success"],
      control: { type: "select" },
    },
    breakpoint: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "line",
    size: "md",
    color: "primary",
    breakpoint: "desktop",
    className: {},
    checkIconTypeLineSizeSmClassName: {},
    textClassName: {},
    text: "All features and premium support",
  },
};
