import { useEffect,useState } from "react"

export default function MessageBox2(){

    let lastPageRefresh = new Date();
    let [totalClick,setTotalClick] = useState(0);
    let [title,setTitle] = useState("Hello World !!!");
    let [totalRefreshTimes,setTotalRefreshTimes] = useState(1);


    //Type 1 : ComponentDidMount + componentDidUpdate
    useEffect(() => {
        console.log("Component Mounted and Component is updated");
        lastPageRefresh = new Date();
    });

    //Type 2 : ComponentDidMount
    useEffect(() => {
        console.log("Component Mounted");
    },[]);

    //Type 3 : Updates only when the title changes
    useEffect(() => {
        console.log("Component is getting updated because title got changed");
        setTotalRefreshTimes(totalRefreshTimes + 1);
        document.title = `Total Times Refreshed : ${totalRefreshTimes}`;
    },[title]);

    //Type 4 : ComponentWillUnmount
    useEffect(() => {
        return () => {
            console.log("Component is getting unmounted");
        }
    },[]);

    return(
        <div>
             <strong>Last Page Refresh : {lastPageRefresh.toString()}</strong>
            <h1>{title}</h1>
            <button onClick={() => { setTitle("Hello Universe".toUpperCase() + Math.random())}}>Change Title</button>
            <button onClick={() => { setTotalClick(totalClick + 1)}}>Total Clicks : {totalClick}</button>
        </div>
    )
}