import { useEffect, useState } from "react"

const Count = ()=>{
    // const [count,setCount]=useState(0)
    const [resourceType,setResourceType]=useState('posts')
    useEffect (()=>{
        console.log('resources changed')
    },[resourceType]) //runs once when the dependency array is empty
    // const plusCount = ()=>{
    //     //always return previus state before modifying it
    //     setCount((prev)=>prev + 1)
    //     //use effect runs when the component mounts,then re runs when he dependency array chanages
    // }
    return(
        <>
        <div className="flex flex-row bg-white h-[60px] w-[100px] justify-center rounded-lg items-center">
            {/* <button onClick={plusCount}>+</button> */}
            {/* <p className="px-[10px]">{count}</p> */}
            <button>-</button>
             <button onClick={setResourceType('posts')}>posts</button>
            <button onClick={setResourceType('users')}>users</button>
            <button onClick={setResourceType('comments')}>comments</button>
        </div>
        </>
    )
}
export default Count 