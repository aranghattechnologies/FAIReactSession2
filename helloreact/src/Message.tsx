

export type MessageProps = {
    message: string,
    description?: string
    isActive?:boolean
    sentMessageToParent : (data:string) => void //STEP 2 : Define a props
                                          //  that will recieve a fun
}

const activeStyle = {
    color : 'green',
    fontFamily: 'Arial'
}

const inactiveStyle = {
    color : 'lightgray',
    fontFamily: 'Times New Roman'

}

export default function 
Message({message, description = "No Description",isActive,sentMessageToParent}:MessageProps)
                
//(props:MessageProps)
{
    return(
        // <div style={isActive ? activeStyle : inactiveStyle}>
        <div className={isActive ? "activeElement" : "inActiveElement"}>
        <h1>{message}</h1>
        <small>{description}</small>
        {/* {isActive &&   <button type="button"
                onClick={() => sentMessageToParent("Message from Child")}>
                    Sent message to parent
                </button>}
        {!isActive && "The message is inactive"} */}

        {isActive ?  <button type="button"
                onClick={() => sentMessageToParent("Message from Child")}>
                    Sent message to parent
                </button> : "The message is inactive"}
      
        </div>
    )
}