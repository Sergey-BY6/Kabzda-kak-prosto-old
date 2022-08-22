import React, {useState} from 'react';

export type AccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion (props: AccordionPropsType ) {

let [collapsed, setCollapsed] = useState (false)

        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

export type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle (props: AccordionTitlePropsType) {
    return (
            <h3 onClick={ () => props.onClick()}>-- {props.title} -- </h3>
    )
}

export function AccordionBody () {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}

// export default UnControlledAccordion