import React, {useState} from 'react';
import { action } from "@storybook/addon-actions"
import {UseStateOnOff} from './UseStateOnOff';



export default {
    title: "UseStateOnOff",
    component: UseStateOnOff,
}

const callback = action("on or off clocked")
export const onMode = () => <UseStateOnOff on={true} onChange={callback}/>;
export const ofMode = () => <UseStateOnOff on={false} onChange={callback}/>;


export const ModeChanging = () => {
const [value, setValue] = useState<boolean> (true)
return <UseStateOnOff on={value} onChange={setValue} />;
}
