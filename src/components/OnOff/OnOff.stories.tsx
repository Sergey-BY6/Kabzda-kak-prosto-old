import React from 'react';
import { action } from "@storybook/addon-actions"
import { OnOff} from './OnOff';



export default {
    title: "OnOff",
    component: OnOff,
}
const callback = action("on or off clocked")
export const onModeTrue = () => <OnOff value={true}/>;
export const ofModeFalse = () => <OnOff value={false}/>;


