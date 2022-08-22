import React from 'react';
import { action } from "@storybook/addon-actions"
import { UnControlledAccordion} from './UnControlledAccordion';


export default {
    title: "UnControlledAccordion",
    component: UnControlledAccordion,
}


const callback = action("accordion mode change event fired")

export const MenuChanging = () => {
    return <UnControlledAccordion titleValue={"Users"} />
}


