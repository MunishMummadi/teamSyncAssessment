import { CheckIcon } from ".";

export default {
  title: "Components/CheckIcon",
  component: CheckIcon,
  argTypes: {
    type: {
      options: ["line", "filled", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "xs", "lg", "two-xl", "xl", "md"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "gray", "success"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "line",
    size: "sm",
    color: "primary",
    typeLineSizeSmClassName: {},
  },
};
