import { AvatarContrast } from ".";

export default {
  title: "Components/AvatarContrast",
  component: AvatarContrast,
  argTypes: {
    weight: {
      options: ["regular", "heavy", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    weight: "regular",
    className: {},
  },
};
