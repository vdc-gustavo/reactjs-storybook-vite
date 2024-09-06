import Button from "./Button";

export default {
  component: Button,
};

export const Primary = {
  name: "Primary",
  args: {
    label: "Button",
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    label: "Secondary",
  },
};
