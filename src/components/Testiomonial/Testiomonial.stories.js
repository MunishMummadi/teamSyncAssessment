import { Testiomonial } from ".";

export default {
  title: "Components/Testiomonial",
  component: Testiomonial,
  argTypes: {
    size: {
      options: ["md", "lg"],
      control: { type: "select" },
    },
    arrow: {
      options: ["right", "left"],
      control: { type: "select" },
    },
    type: {
      options: ["arrow", "button-arrow", "button-chevron"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["disabled", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    arrow: "right",
    type: "arrow",
    stateProp: "disabled",
    sizeLgArrowLeftClassName: {},
    arrowLeft7Color: "#667085",
    arrowRight5Color: "#667085",
  },
};
