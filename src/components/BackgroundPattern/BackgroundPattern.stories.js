import { BackgroundPattern } from ".";

export default {
  title: "Components/BackgroundPattern",
  component: BackgroundPattern,
  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
    type: {
      options: ["grid", "grid-dot", "empty", "grid-check"],
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
    backgroundMask: true,
    background: true,
    size: "md",
    type: "grid",
    breakpoint: "desktop",
    backgroundTrueSizeClassName: {},
    backgroundTrueSize: "/img/background-true-size-md-type-grid-check-breakpoint-desktop.svg",
  },
};
