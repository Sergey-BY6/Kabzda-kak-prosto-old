
type PropsType = {
    on: boolean
  onChange: (on: boolean) => void
}

export const UseStateOnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "yellowgreen" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"

    }
    const indicattorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: props.on ? "yellowgreen" : "red",
        display: "inline-block",
        marginLeft: "5px"
    }


    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange(true)}>on</div>
            <div style={offStyle} onClick={() => props.onChange(false)}>off</div>
            <div style={indicattorStyle}></div>

        </div>
    )
}