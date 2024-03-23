import { memo, useEffect } from "react"

type MessageProps = {
    message: string;
}

const Message = memo(function({message}: MessageProps) {

    useEffect(() => {
        //Calll the server get the data 
        // Calculate the x axis and y axis
        // Create chart 
        // Draw the chart
        console.log("Message is mounted or updated");
    });



    return (
        <div>
            <p>{message}</p>
        </div>
    )
});

export default Message;