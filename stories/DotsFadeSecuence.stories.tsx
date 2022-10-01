import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DotsFadeSecuence } from "../components/utilities/loaders/dots-fade-secuence/DotsFadeSecuence";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Utilities/Loaders/DotsFadeSecuence",
    component: DotsFadeSecuence,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        animate: {
            control: "boolean",
            description: "Animate or not",
        },
        quantity: { control: "number", description: "The number of dots" },
        bg_color: {
            control: "color",
            description: "A valid css string color token",
        },
        duration: {
            control: "number",
            description: "The animation duration",
        },
        stager: {
            control: "number",
            description: "The animation stagger coordination value",
        },
    },
} as ComponentMeta<typeof DotsFadeSecuence>;

const Template: ComponentStory<typeof DotsFadeSecuence> = (args) => <DotsFadeSecuence {...args} />;

export const Base = Template.bind({});
Base.args = {
    animate: true,
    quantity: 3,
    bg_color: "grey",
    duration: 1,
    stager: 0.1,
};
