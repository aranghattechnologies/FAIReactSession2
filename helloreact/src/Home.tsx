import Message from "./Message";
import { MessageProps } from "./Message";

export default function Home() {

    function getRandomMessage() {
        return Math.random() > 0.5 ? "Hello World" : "Hello Univerise";
    }

    //STEP 1 : create a function to recieve data
    function parentMethodToRecieveData(data:string){
        alert(data);
    }

    let message: MessageProps = {
        message: "What a wonderful world",
        sentMessageToParent : parentMethodToRecieveData,
        isActive:true
        // STEP 3 : Sent the fun as props
    }

    let message2 : MessageProps = {
        message: "What a wonderful Universe",
        sentMessageToParent : parentMethodToRecieveData,
        isActive:false
    }

    let messages = [
        {message: "What a wonderful world", isActive:true,sentMessageToParent : parentMethodToRecieveData},
        {message: "What a wonderful Universe", isActive:false,sentMessageToParent : parentMethodToRecieveData},
        {message: "What a wonderful Galaxy", isActive:true,sentMessageToParent : parentMethodToRecieveData}
    ];

    return (
        <>
            <div>
                <h1>Home</h1>
                <div>{new Date().toString()}</div>
                <span>10 + 10 = {10 + 10} </span>
                <button type="button"
                    onClick={() => alert(getRandomMessage())}
                >Click me</button>

            </div>
            {
                    messages.map((msg) => {
                        return <Message {...msg}/>
                        // return msg.isActive ? <Message {...msg}/> : null
                    })
            }
        </>
    )
}



