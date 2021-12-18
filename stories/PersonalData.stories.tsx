import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PersonalData } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PersonalData",
  component: PersonalData,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PersonalData>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PersonalData> = (args) => (
  <PersonalData {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: "Francisco Prince",
  location: "La Plata, Bs. As., Argentina",
  jobTitle: "Frontend developer",
  availability: "No disponible",
};
