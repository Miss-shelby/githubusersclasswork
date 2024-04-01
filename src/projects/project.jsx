// import { Input } from "postcss"
//exercise one
import { useState } from "react"

export const InputFeild =()=>{
    const [value,setInputValue] = useState('')
    const[isVisible,setisVisible] = useState(false) //set the isvisibe to false
    const changeText=()=>{
        setisVisible(!isVisible) //change it back to be true when false and false when true
        
    }
    const changeValue =(e)=>{
        const {value }= e.target //we destructuure our value because it is an object
        setInputValue(value)
    }
    return(
    <>
     <div className="bg-white h-[50vh]">
        <input onChange={changeValue} className="bg-white border border-x-stone-950 mt-[20px]" type="text" value={value} />
        <p>input text:{value}</p>
        <button className="btn btn-info" onClick={changeText}>show/hide text</button>
        {/* only shows the text when isvisible is true */}
        { isVisible && <p>Toggle me</p>}    
     </div>
    </>)
}
//no2
export const CharacterCount= ()=>{

    const[inputValue,setInputValue] = useState('')
    const [characterlength,setCharacterLength] = useState(0)
    const handleInputValue = (e)=>{
        const value = e.target.value;
        setInputValue(value)
        setCharacterLength(value.length)
        
        
    }
   
    return (
        <>
        <div className="bg-gray-500 pt-[50px] pb-[100px]">
            <textarea onChange={handleInputValue} className="bg-white border border-x-stone-950 mt-[20px]" type='text' value={inputValue} name="" id="" cols="30" rows="5"></textarea>
            {/* <input className="bg-white border border-x-stone-950 mt-[20px]"  /> */}
            <p>CharacterCount: {characterlength}</p>
            <TodoList/>
        </div>
        </>
    )
}
export const TodoList = ()=>{
    //we create a new state to handle our inputs value which will be our todos
    const[todos,setTodos] = useState([])
    //state to set our input value 
    const [value,setvalue] = useState(" ")
    //function to get our input value and set it to state
    const handleUserInput =(e)=>{
        const {value} = e.target
        setvalue(value)
    }
    //a function to add our input value to the todos array,we take todo as input and then destructure our todos array to add the new one which will bw input
    const handleTodos=(todo)=>{
        console.log(todos)
        setTodos(todos=>[...todos,todo])
    }
    //to add or todos we call the function that takes todo as parameter and pass input value as argument,so when its called our todo gets added
    const addTodos=()=>{
       console.log(value)
       handleTodos(value)
       setvalue("");
    }
    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos); 
    }
    return (
        <>
        <div>
            <input className="bg-white border border-x-stone-950 mt-[20px]" type='text' onChange={handleUserInput}  value={value}/>
            <button onClick={addTodos} className="btn btn-outline">add</button>
            <ul>
                    {todos.map((todo, index) => ( 
                        <li key={index}>{todo} <span><button onClick={()=>deleteTodo(index)} className="btn btn-warning">delete</button></span></li>
                    ))}
                </ul>
        </div>
        </>
    )
}

