import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DotsFadeScaleSecuence } from "../components/utilities/loaders/dots-fade-scale-secuence/DotsFadeScaleSecuence";
import { number } from "prop-types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Utilities/Loaders/DotsFadeScaleSecuence",
    component: DotsFadeScaleSecuence,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        quantity: { control: "number",  description: "The number of dots" },
        bg_color: {
            control: "color",
            description: "A valid css string color token",
        },
        duration: { control: "number", description: "The animation duration" },
        stager: {
            control: "number",
            description: "The animation stagger coordination value",
        },
    },
} as ComponentMeta<typeof DotsFadeScaleSecuence>;

const Template: ComponentStory<typeof DotsFadeScaleSecuence> = (args) => (
    <DotsFadeScaleSecuence {...args} />
);

export const Base = Template.bind({});
Base.args = {
    quantity: 3,
    bg_color:'grey',
    duration: 1,
    stager: 0.1,
};
