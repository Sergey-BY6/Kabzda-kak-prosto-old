import React from 'react';
import { action } from "@storybook/addon-actions"
import {UncUseStateOnOff} from './UncUseStateOnOff';




export default {
    title: "UncUseStateOnOff",
    component: UncUseStateOnOff,
}

const callback = action("on or off clocked")
export const onMode = () => <UncUseStateOnOff  defaultOn={true} onChange={callback}/>;
export const offMode = () => <UncUseStateOnOff  defaultOn={false} onChange={callback}/>;
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>
export const DefaultInputValue = () => <input  defaultValue={"yo"} />;


