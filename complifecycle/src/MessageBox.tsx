import { Component } from "react";

type MessageBoxProps = {
    message: string
}

type MessageBoxState = {
    message: string,
    lastupdated: Date
    totalclicks: number
}

export default class MessageBox extends Component<MessageBoxProps,MessageBoxState>{

     totalClicks: number = 0;
     totalRefreshTimes : any = [];
    constructor(props: MessageBoxProps){
        super(props);

        this.state = {
            message: props.message,
            lastupdated : new Date(),
            totalclicks: 0,
        }
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    //1. Props Changes
    //2. State Changes
    //3. Force Update
    componentDidUpdate(prevProps: Readonly<MessageBoxProps>, prevState: Readonly<MessageBoxState>, snapshot?: any): void {
        console.log("Component is getting updated");
        this.totalRefreshTimes.push(new Date().toString());
        document.title = `Total Times Refreshed : ${this.totalRefreshTimes.length}`;   
    }

    shouldComponentUpdate(nextProps: Readonly<MessageBoxProps>, nextState: Readonly<MessageBoxState>, nextContext: any): boolean {
        if(this.totalClicks > 5){
            this.totalClicks = 0;
            return true;
        }
        this.totalClicks++;
        return false;
    }

    componentWillUnmount() {
        console.log("Component is getting unmounted");
    }

    reloadThePage(){
        this.forceUpdate();
    }


    render(){
        return(
            <div>
                <h1>{this.props.message},  {this.state?.lastupdated?.toString() }</h1>
                <button onClick={() => { this.setState({ lastupdated: new Date()})}}>Refresh Page</button>
                <button onClick={() => { this.reloadThePage()}}>Force Refresh</button>
            </div>
        )
    }
}