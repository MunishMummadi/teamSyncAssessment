import { FaqItem } from ".";

export default {
  title: "Components/FaqItem",
  component: FaqItem,
  argTypes: {
    breakpoint: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
    iconPosition: {
      options: ["right", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: true,
    expanded: true,
    divider: true,
    breakpoint: "desktop",
    iconPosition: "right",
    className: {},
    textClassName: {},
    text: "Is there a free trial available?",
    supportingTextClassName: {},
    text1:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    textClassNameOverride: {},
  },
};
