import { FooterLink } from ".";

export default {
  title: "Components/FooterLink",
  component: FooterLink,
  argTypes: {
    color: {
      options: ["primary", "gray"],
      control: { type: "select" },
    },
    theme: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    badge: true,
    color: "primary",
    theme: "dark",
    stateProp: "hover",
    className: {},
    buttonTextClassName: {},
    buttonText: "Overview",
  },
};
