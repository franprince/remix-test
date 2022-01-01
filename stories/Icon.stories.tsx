import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "../components/icon/Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Icon",
    component: Icon,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    parameters: [
        "name",
        "variable"
    ]

} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => (
    <Icon {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    name: "linkedin", url: "https://www.linkedin.com"
};

