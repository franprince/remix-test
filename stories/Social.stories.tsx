import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Social } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Social",
  component: Social,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Social>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Social> = (args) => (
  <Social {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "Encontrame en:",
  socialNetworks: [{ name: "linkedin", url: "https://www.linkedin.com" }, { name: "github", url: "https://www.github.com" }]
};
