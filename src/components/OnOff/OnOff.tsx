import React from 'react';
import s from './OnOff.module.css'


type OnOffPropsType = {
    value: boolean

}

export const OnOff: React.FC<OnOffPropsType> = (props) => {
    return (
        <div>
            <Button selected={props.value}/>
        </div>
    )
}

type ButtonPropsType = {
    selected: boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {

        return (
            <div className={s.everyButton}>
                <button className={props.selected ? s.green : s.white}>on</button>
                <button className={props.selected ? s.white : s.red}>off</button>
                <div className={props.selected ? s.radiusGreen : s.radiusRed}></div>
            </div>
        )
        // } else {
        //     return (
        //         <div className={s.everyButton}>
        //             <button>on</button>
        //             <button className={s.red}>off</button>
        //            <div className={s.radiusRed}></div>
        //         </div>
        //     )
        // }
    // }
}