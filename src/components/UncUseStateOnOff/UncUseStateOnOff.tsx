import {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export const UncUseStateOnOff = (props: PropsType) => {

let [on, setOn] = useState (props.defaultOn ? props.defaultOn: false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "yellowgreen" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"

    }
    const indicattorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: on ? "yellowgreen" : "red",
        display: "inline-block",
        marginLeft: "5px"
    }

const onClicked = () => {
    setOn(true)
    props.onChange(true)
}
const offClicked = () => {
    setOn(false)
    props.onChange(false)
}

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off</div>
            <div style={indicattorStyle}></div>

        </div>
    )
}